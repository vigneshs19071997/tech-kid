import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Eyebrow, PageHero } from "@/components/Sections";
import { programs, site } from "@/lib/site";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  { title: "Enquire", text: "Fill the form or call us." },
  { title: "Visit", text: "Come with your child and see the school." },
  { title: "Meet", text: "A short, friendly chat with the teacher." },
  { title: "Join", text: "Submit the form, documents and fees." },
];

const docs = [
  "Child's birth certificate",
  "Child's Aadhaar card (if available)",
  "4 passport-size photos of the child",
  "Parents' ID and address proof",
  "Vaccination record",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        image="/images/parent-teacher.jpg"
        eyebrow={`ADMISSIONS OPEN · ${site.admissionsYear}`}
        title={
          <>
            Join the Tech Kidz <span className="text-sun">family.</span>
          </>
        }
        text="Admission is simple. Four easy steps, and our team helps you at every one."
      />

      <section className="bg-white py-14 md:py-24">
        <div className="container-x">
          <Eyebrow>HOW TO APPLY</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">4 simple steps</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl bg-mist p-6">
                <p className="text-2xl font-extrabold text-rust">0{i + 1}</p>
                <h3 className="mt-3 font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-navy/65">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-white md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow light>AGE GUIDE</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Age as on 1 June {site.admissionsYear.slice(0, 4)}</h2>
            <div className="mt-6 space-y-3">
              {programs.map((p) => (
                <div key={p.slug} className="flex items-center justify-between rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="font-bold">
                    {p.name} <span className="text-xs font-semibold text-white/60">({p.level})</span>
                  </span>
                  <span className="text-sm text-sun">{p.age.replace("YRS", "years")}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow light>DOCUMENTS NEEDED</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Keep these ready</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {docs.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sun" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-20 bg-white py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl bg-sun p-6 md:p-10">
            <h2 className="text-3xl font-extrabold">Admission enquiry</h2>
            <p className="mb-6 mt-1 text-sm text-navy/80">
              Book a free school visit. We&apos;ll call you back within one working day.
            </p>
            <EnquiryForm
              type="admission"
              submitLabel="Book Free Visit"
              fields={[
                { name: "parent_name", label: "Parent's name", required: true },
                { name: "phone", label: "Mobile number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email" },
                { name: "child_name", label: "Child's name" },
                { name: "child_age", label: "Child's age", type: "select", options: ["2 years", "3 years", "4 years", "5 years", "6 years"] },
                { name: "program", label: "Program", type: "select", options: [...programs.map((p) => `${p.name} (${p.level})`), "Daycare"] },
                { name: "message", label: "Any question? (optional)", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
