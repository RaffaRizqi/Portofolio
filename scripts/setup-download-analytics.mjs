import { readFile } from 'node:fs/promises';
import process from 'node:process';
import pg from 'pg';

const connectionString = process.env.DIRECT_DATABASE_URL ?? process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is required.');
}

const schema = await readFile(new URL('../database/schema.sql', import.meta.url), 'utf8');
const client = new pg.Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10_000,
});

try {
  await client.connect();
  await client.query(schema);
  console.log('Download analytics schema is ready.');
} finally {
  await client.end();
}