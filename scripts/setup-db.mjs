// Run with: npm run db:setup
// Creates the tables in your Neon database.
import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is missing. Put it in .env.local first.");
  process.exit(1);
}

const sql = neon(url);
const file = readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8");
const statements = file
  .split(";")
  .map((s) => s.replace(/--.*$/gm, "").trim())
  .filter(Boolean);

for (const statement of statements) {
  await sql.query(statement);
}

console.log("Done. Tables are ready in Neon.");
