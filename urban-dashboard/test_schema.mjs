import { Database } from 'duckdb-async';
import path from 'path';

async function main() {
  try {
    const db = await Database.create(':memory:');
    const poiFile = path.join(process.cwd(), '../data/cities/kielce/04_results/poi_matrix.parquet');
    const popFile = path.join(process.cwd(), '../data/cities/kielce/04_results/pop_matrix.parquet');
    
    console.log('--- POI SCHEMA ---');
    let res = await db.all(`DESCRIBE SELECT * FROM '${poiFile}'`);
    console.log(res);
    
    console.log('--- POP SCHEMA ---');
    let popRes = await db.all(`DESCRIBE SELECT * FROM '${popFile}'`);
    console.log(popRes);
    
    console.log('--- POI SAMPLE ---');
    let sample = await db.all(`SELECT * FROM '${poiFile}' LIMIT 1`);
    console.log(sample);
  } catch (e) {
    console.error(e);
  }
}
main();
