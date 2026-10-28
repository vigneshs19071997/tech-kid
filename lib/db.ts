import { neon } from "@neondatabase/serverless";

// Creates the Neon client only when it is needed,
// so the site can still build without DATABASE_URL.
export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set. Add it to .env.local");
  return neon(url);
}
