import Database from 'better-sqlite3';
import { Database as DuckDB } from 'duckdb-async';
import * as wkx from 'wkx';
import fs from 'fs';
import path from 'path';

const DATA_DIR = process.env.BUSOS_DATA_DIR || path.join(process.cwd(), '../data/cities');

interface GpkgContentRow {
  table_name: string;
}

interface GpkgGeomColumnRow {
  column_name: string;
}

type GpkgRow = Record<string, unknown>;

interface DuckDbPoiRow {
  poi_id?: unknown;
  name?: string;
  category?: string;
  tier?: string;
  lat?: number;
  lon?: number;
  w?: number | string;
  sum_pull?: number | string;
}

interface DuckDbPopRow {
  grid_id?: unknown;
  lat?: number;
  lon?: number;
  pop_val?: unknown;
  sum_pull_pop?: number | string;
}

export function getAvailableCities(): string[] {
  if (!fs.existsSync(DATA_DIR)) return [];
  return fs.readdirSync(DATA_DIR).filter(f => fs.statSync(path.join(DATA_DIR, f)).isDirectory());
}

export function getHubsFromGpkg(city: string) {
  const gpkgPath = path.join(DATA_DIR, city, '04_results', 'stop_dna.gpkg');
  if (!fs.existsSync(gpkgPath)) throw new Error(`GPKG not found at ${gpkgPath}`);
  
  const db = new Database(gpkgPath, { readonly: true });
  const tables = db.prepare(`SELECT table_name FROM gpkg_contents WHERE data_type = 'features'`).all() as GpkgContentRow[];
  if (tables.length === 0) return { type: 'FeatureCollection', features: [] };
  
  const tableName = tables[0].table_name;
  const geomColRes = db.prepare(`SELECT column_name FROM gpkg_geometry_columns WHERE table_name = ?`).get(tableName) as GpkgGeomColumnRow | undefined;
  const geomCol = geomColRes ? geomColRes.column_name : 'geom';
  
  const rows = db.prepare(`SELECT * FROM "${tableName}"`).all() as GpkgRow[];
  db.close();
  
  const features = rows.map(row => {
    let geojson = null;
    const geomBuf = row[geomCol] as Buffer | Uint8Array | undefined;
    if (geomBuf) {
      try {
        const buf = Buffer.from(geomBuf);
        const flags = buf[3];
        const envCode = (flags & 0x0E) >> 1;
        let headerSize = 8;
        if (envCode === 1) headerSize += 32;
        else if (envCode === 2 || envCode === 3) headerSize += 48;
        else if (envCode === 4) headerSize += 64;
        
        const wkbData = buf.subarray(headerSize);
        geojson = wkx.Geometry.parse(wkbData).toGeoJSON();
      } catch (err) {
        console.error('WKB parse error', err);
      }
    }
    
    delete row[geomCol];
    // Convert any BigInt props to string to ensure JSON serialization
    for (const key in row) {
      if (typeof row[key] === 'bigint') row[key] = (row[key] as bigint).toString();
    }

    return {
      type: 'Feature',
      geometry: geojson,
      properties: row
    };
  });
  
  return {
    type: 'FeatureCollection',
    features
  };
}

export function getLayerFromGpkg(city: string, fileName: string) {
  const gpkgPath = path.join(DATA_DIR, city, '02_spatial', fileName);
  if (!fs.existsSync(gpkgPath)) throw new Error(`GPKG not found at ${gpkgPath}`);
  const db = new Database(gpkgPath, { readonly: true });
  const tables = db.prepare(`SELECT table_name FROM gpkg_contents WHERE data_type = 'features'`).all() as GpkgContentRow[];
  if (tables.length === 0) return { type: 'FeatureCollection', features: [] };
  const tableName = tables[0].table_name;
  const geomColRes = db.prepare(`SELECT column_name FROM gpkg_geometry_columns WHERE table_name = ?`).get(tableName) as GpkgGeomColumnRow | undefined;
  const geomCol = geomColRes ? geomColRes.column_name : 'geom';
  const rows = db.prepare(`SELECT * FROM "${tableName}"`).all() as GpkgRow[];
  db.close();
  const features = rows.map(row => {
    let geojson = null;
    const geomBuf = row[geomCol] as Buffer | Uint8Array | undefined;
    if (geomBuf) {
      try {
        const buf = Buffer.from(geomBuf);
        const envCode = (buf[3] & 0x0E) >> 1;
        let headerSize = 8;
        if (envCode === 1) headerSize += 32;
        else if (envCode === 2 || envCode === 3) headerSize += 48;
        else if (envCode === 4) headerSize += 64;
        geojson = wkx.Geometry.parse(buf.subarray(headerSize)).toGeoJSON();
      } catch {
        // Ignoruj uszkodzone geometrie
      }
    }
    delete row[geomCol];
    for (const key in row) if (typeof row[key] === 'bigint') row[key] = (row[key] as bigint).toString();
    return { type: 'Feature', geometry: geojson, properties: row };
  });
  return { type: 'FeatureCollection', features };
}

export function hstoreToObject(hstoreStr: string | null): Record<string, string> {
  if (!hstoreStr) return {};
  const obj: Record<string, string> = {};
  const regex = /"([^"]+)"=>"([^"]+)"/g;
  let match;
  while ((match = regex.exec(hstoreStr)) !== null) {
    obj[match[1]] = match[2];
  }
  return obj;
}

export async function getHubDetails(city: string, lat: number, lon: number, hubId?: string) {
  const poiFile = path.join(DATA_DIR, city, '04_results', 'poi_matrix.parquet');
  const popFile = path.join(DATA_DIR, city, '04_results', 'pop_matrix.parquet');
  const infraGpkg = path.join(DATA_DIR, city, '02_spatial', 'infrastructure.gpkg');
  const dnaGpkg = path.join(DATA_DIR, city, '04_results', 'stop_dna.gpkg');
  
  if (!fs.existsSync(poiFile) || !fs.existsSync(popFile) || !fs.existsSync(infraGpkg)) {
    throw new Error('Missing matrix or GPKG files');
  }

  // Odczyt metryk z GPKG dla klikniętego Hubu
  let hubMetrics: GpkgRow | null = null;
  if (hubId && fs.existsSync(dnaGpkg)) {
    const s = new Database(dnaGpkg, { readonly: true });
    try {
      const tables = s.prepare(`SELECT table_name FROM gpkg_contents WHERE data_type = 'features'`).all() as GpkgContentRow[];
      if (tables.length > 0) {
         // Sortujemy na wszelki wypadek malejąco by wziąć największą grawitację
         const row = s.prepare(`SELECT * FROM "${tables[0].table_name}" WHERE hub_id = ? ORDER BY raw_gravity DESC LIMIT 1`).get(Number(hubId)) as GpkgRow | undefined;
         if (row) {
           hubMetrics = row;
           // Sanityzacja bigint by nie wywaliło res.json w Next.js
           for (const key in hubMetrics) {
             if (typeof hubMetrics[key] === 'bigint') hubMetrics[key] = (hubMetrics[key] as bigint).toString();
           }
         }
      }
    } catch {
      // Ignoruj błąd odczytu szczegółów metryk
    }
    s.close();
  }

  const duckdb = await DuckDB.create(':memory:');
  const latDelta = 500 / 111000;
  const lonDelta = 500 / (111000 * Math.cos(lat * Math.PI / 180));
  
  const minLat = lat - latDelta;
  const maxLat = lat + latDelta;
  const minLon = lon - lonDelta;
  const maxLon = lon + lonDelta;

  const haversineSql = `(6371000 * acos(
    cos(radians(${lat})) * cos(radians(lat)) * cos(radians(lon) - radians(${lon})) +
    sin(radians(${lat})) * sin(radians(lat))
  ))`;

  const pq = (await duckdb.all(`
    SELECT poi_id, name, category, tier, lat, lon, w, sum_pull
    FROM read_parquet('${poiFile}')
    WHERE lat BETWEEN ${minLat} AND ${maxLat}
      AND lon BETWEEN ${minLon} AND ${maxLon}
      AND ${haversineSql} <= 500
    ORDER BY (w * sum_pull) DESC
  `)) as DuckDbPoiRow[];
  
  const popQ = (await duckdb.all(`
    SELECT grid_id, lat, lon, pop_val, sum_pull_pop
    FROM read_parquet('${popFile}')
    WHERE lat BETWEEN ${minLat} AND ${maxLat}
      AND lon BETWEEN ${minLon} AND ${maxLon}
      AND ${haversineSql} <= 500
  `)) as DuckDbPopRow[];
  duckdb.close();

  // Convert BigInts to string for serialization
  const pop = popQ.map(p => ({
    ...p,
    grid_id: p.grid_id ? String(p.grid_id) : null,
    pop_val: p.pop_val ? String(p.pop_val) : null
  }));

  const pois = pq.map(poi => ({
    ...poi,
    poi_id: poi.poi_id ? String(poi.poi_id) : null,
    w: Number(poi.w || 0),
    sum_pull: Number(poi.sum_pull || 0)
  }));
  
  return { pois, pop, metrics: hubMetrics };
}
