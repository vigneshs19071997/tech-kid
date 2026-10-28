import { getSql } from "@/lib/db";

const TYPES = ["callback", "visit", "admission", "contact", "franchise", "daycare"];

function clean(value: unknown, max = 300): string | null {
  if (typeof value !== "string") return null;
  const v = value.trim().slice(0, max);
  return v.length ? v : null;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const type = clean(body.type, 20);
  const parentName = clean(body.parent_name, 100);
  const phoneDigits = (clean(body.phone, 20) ?? "").replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  const email = clean(body.email, 150);

  if (!type || !TYPES.includes(type)) {
    return Response.json({ error: "Invalid form type." }, { status: 400 });
  }
  if (!parentName) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
    return Response.json({ error: "Please enter a valid 10-digit mobile number." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  try {
    const sql = getSql();
    await sql`
      INSERT INTO enquiries (type, parent_name, phone, email, child_name, child_age, program, city, message)
      VALUES (
        ${type}, ${parentName}, ${phoneDigits}, ${email},
        ${clean(body.child_name, 100)}, ${clean(body.child_age, 20)},
        ${clean(body.program, 50)}, ${clean(body.city, 80)}, ${clean(body.message, 2000)}
      )
    `;
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Enquiry save failed:", err);
    return Response.json(
      { error: "Sorry, we could not save this right now. Please call us." },
      { status: 500 }
    );
  }
}
