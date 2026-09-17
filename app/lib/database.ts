import { Pool } from 'pg';

let databasePool: Pool | undefined;

export function getDatabasePool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL is not configured.');
  }

  databasePool ??= new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 1,
    connectionTimeoutMillis: 8_000,
    idleTimeoutMillis: 10_000,
    allowExitOnIdle: true,
  });

  return databasePool;
}
