"use client";

import { useState } from "react";

export type Field = {
  name: "parent_name" | "phone" | "email" | "child_name" | "child_age" | "program" | "city" | "message";
  label: string;
  type?: "text" | "tel" | "email" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  full?: boolean; // take the whole row
};

type Props = {
  type: "callback" | "visit" | "admission" | "contact" | "franchise" | "daycare";
  fields: Field[];
  submitLabel?: string;
  inline?: boolean; // one row layout (home page yellow box)
  successText?: string;
};

export function EnquiryForm({
  type,
  fields,
  submitLabel = "Send",
  inline = false,
  successText = "Thank you! We'll call you back within one working day.",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl bg-white p-6 text-center">
        <p className="text-lg font-bold text-navy">✓ Received</p>
        <p className="mt-1 text-sm text-navy/70">{successText}</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-rust underline">
          Send another
        </button>
      </div>
    );
  }

  const button = (
    <button
      type="submit"
      disabled={status === "sending"}
      className="w-full rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-2 disabled:opacity-60"
    >
      {status === "sending" ? "Sending…" : submitLabel}
    </button>
  );

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className={inline ? "grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end" : "grid gap-4 sm:grid-cols-2"}>
        {fields.map((f) => (
          <label key={f.name} className={`block ${!inline && (f.full || f.type === "textarea") ? "sm:col-span-2" : ""}`}>
            <span className="mb-1.5 block text-xs font-semibold text-navy">{f.label}</span>
            {f.type === "textarea" ? (
              <textarea name={f.name} required={f.required} rows={4} className="input" />
            ) : f.type === "select" ? (
              <select name={f.name} required={f.required} className="input" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                inputMode={f.type === "tel" ? "numeric" : undefined}
                maxLength={f.type === "tel" ? 14 : 150}
                className="input"
              />
            )}
          </label>
        ))}
        {inline ? <div className="md:w-48">{button}</div> : <div className="sm:col-span-2">{button}</div>}
      </div>
      {status === "error" && <p className="mt-3 text-sm font-semibold text-rust">{error}</p>}
    </form>
  );
}
