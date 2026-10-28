-- Tech Kidz database. One table holds every form on the site.
-- type = callback | visit | admission | contact | franchise | daycare

CREATE TABLE IF NOT EXISTS enquiries (
  id          SERIAL PRIMARY KEY,
  type        TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  phone       TEXT NOT NULL,
  email       TEXT,
  child_name  TEXT,
  child_age   TEXT,
  program     TEXT,
  city        TEXT,
  message     TEXT,
  status      TEXT NOT NULL DEFAULT 'new',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_type_idx ON enquiries (type);
