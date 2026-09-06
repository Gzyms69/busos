import Database from 'better-sqlite3';
import path from 'path';

function main() {
  const file = path.join(process.cwd(), '../data/cities/kielce/02_spatial/infrastructure.gpkg');
  const db = new Database(file, { readonly: true });
  
  const tables = db.prepare(`SELECT table_name FROM gpkg_contents WHERE data_type = 'features'`).all();
  console.log('TABLES:', tables);
  
  if (tables.length > 0) {
    const tableName = tables[0].table_name;
    const columns = db.prepare(`PRAGMA table_info("${tableName}")`).all();
    console.log('COLUMNS:', columns);
    const sample = db.prepare(`SELECT * FROM "${tableName}" LIMIT 1`).all();
    console.log('SAMPLE:', sample);
  }
}
main();
