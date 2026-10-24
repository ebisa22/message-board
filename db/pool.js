import { Pool } from "pg";

const database_url = process.env.DATABASE_URL;
if (!database_url) {
  throw new Error("database url missing");
}

const pool = new Pool({
  connectionString: database_url,
  ...(database_url.includes("render.com") && {
    ssl: { rejectUnauthorized: false },
  }),
});

export default pool