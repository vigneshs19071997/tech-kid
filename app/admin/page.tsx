import type { Metadata } from "next";
import { getSql } from "@/lib/db";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Enquiries", robots: { index: false, follow: false } };

type Row = {
  id: number;
  type: string;
  parent_name: string;
  phone: string;
  email: string | null;
  child_name: string | null;
  child_age: string | null;
  program: string | null;
  city: string | null;
  message: string | null;
  created_at: string;
};

// Open /admin?key=YOUR_ADMIN_KEY to see all form entries.
export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string; type?: string }>;
}) {
  const { key, type } = await searchParams;
  const allowed = !!process.env.ADMIN_KEY && key === process.env.ADMIN_KEY;

  let rows: Row[] = [];
  let error = "";
  if (allowed) {
    try {
      const sql = getSql();
      rows = (type
        ? await sql`SELECT * FROM enquiries WHERE type = ${type} ORDER BY created_at DESC LIMIT 500`
        : await sql`SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 500`) as Row[];
    } catch (e) {
      error = e instanceof Error ? e.message : "Database error";
    }
  }

  const types = ["callback", "admission", "daycare", "contact", "franchise"];

  return (
    <section className="min-h-screen bg-mist">
      <div className="bg-navy pb-8 pt-28 text-white">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold">Enquiries</h1>
          <p className="mt-1 text-sm text-white/60">All forms sent from the website.</p>
        </div>
      </div>

      <div className="container-x py-8">
        {!allowed ? (
          <p className="rounded-xl bg-white p-6 font-semibold">Not allowed. Open this page as /admin?key=YOUR_ADMIN_KEY</p>
        ) : error ? (
          <p className="rounded-xl bg-white p-6 font-semibold text-rust">{error}</p>
        ) : (
          <>
            <div className="mb-4 flex flex-wrap gap-2 text-sm">
              <a href={`/admin?key=${key}`} className={`rounded-full px-4 py-1.5 font-semibold ${!type ? "bg-navy text-white" : "bg-white"}`}>
                All
              </a>
              {types.map((t) => (
                <a
                  key={t}
                  href={`/admin?key=${key}&type=${t}`}
                  className={`rounded-full px-4 py-1.5 font-semibold capitalize ${type === t ? "bg-navy text-white" : "bg-white"}`}
                >
                  {t}
                </a>
              ))}
            </div>
            <div className="overflow-x-auto rounded-xl bg-white">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    {["Date", "Type", "Name", "Phone", "Email", "Child", "Age", "Program", "City", "Message"].map((h) => (
                      <th key={h} className="p-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={10} className="p-6 text-center text-navy/60">
                        No enquiries yet.
                      </td>
                    </tr>
                  )}
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-navy/10 align-top">
                      <td className="whitespace-nowrap p-3">
                        {new Date(r.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                      </td>
                      <td className="p-3 capitalize">{r.type}</td>
                      <td className="p-3 font-semibold">{r.parent_name}</td>
                      <td className="p-3">
                        <a href={`tel:${r.phone}`} className="text-rust underline">
                          {r.phone}
                        </a>
                      </td>
                      <td className="p-3">{r.email}</td>
                      <td className="p-3">{r.child_name}</td>
                      <td className="p-3">{r.child_age}</td>
                      <td className="p-3">{r.program}</td>
                      <td className="p-3">{r.city}</td>
                      <td className="max-w-xs p-3">{r.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
