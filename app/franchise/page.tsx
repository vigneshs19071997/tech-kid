import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Photo } from "@/components/Photo";
import { Eyebrow, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Franchise" };

const support = [
  { title: "Curriculum", text: "Ready lesson plans, activity kits and tech-play kits for every class." },
  { title: "Training", text: "Full training for your teachers and staff before you open, and every year after." },
  { title: "Setup", text: "Help with finding the site, interiors, furniture and safety setup." },
  { title: "Marketing", text: "Launch campaign, social media, brochures and admission support." },
  { title: "Parent app", text: "Our parent app and school software, ready to use from day one." },
  { title: "Ongoing help", text: "A dedicated manager and regular quality checks." },
];

const steps = [
  "Send us the form below",
  "Call with our franchise team",
  "Visit our West Tambaram centre",
  "Sign the agreement",
  "Setup and training",
  "Grand opening",
];

export default function FranchisePage() {
  return (
    <>
      <section className="bg-rust text-white">
        <div className="container-x grid gap-10 pb-16 pt-32 md:grid-cols-[1.2fr_1fr] md:items-center md:pb-24 md:pt-40">
          <div>
          <p className="text-xs font-bold tracking-[0.18em] text-sun">FRANCHISE</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Open a Tech Kidz in your city.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Start your own preschool with a trusted brand. We give you the curriculum, training, setup and marketing.
          </p>
          <a href="#apply" className="mt-6 inline-block rounded-lg bg-sun px-6 py-3 text-sm font-bold text-navy">
            Apply now
          </a>
          </div>
          <Photo src="/images/school-group.jpg" className="aspect-square rounded-2xl shadow-2xl ring-4 ring-white/15" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-24">
        <div className="container-x">
          <Eyebrow>WHAT YOU GET</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">We support you at every step</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {support.map((s, i) => (
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
            <Eyebrow light>WHO CAN APPLY</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Is this right for you?</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {[
                "You love working with children and families",
                "You have or can rent 1,500 – 3,000 sq ft in a residential area",
                "You can invest in setup (ask us for the full details)",
                "You can give full time to run the centre",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sun" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow light>HOW IT WORKS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">6 simple steps</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="font-extrabold text-sun">Step {i + 1}</span>
                  <p className="mt-1 text-sm">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-20 bg-white py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl bg-sun p-6 md:p-10">
            <h2 className="text-3xl font-extrabold">Franchise enquiry</h2>
            <p className="mb-6 mt-1 text-sm text-navy/80">Our franchise team will call you within two working days.</p>
            <EnquiryForm
              type="franchise"
              submitLabel="Send Enquiry"
              successText="Thank you! Our franchise team will call you soon."
              fields={[
                { name: "parent_name", label: "Your name", required: true },
                { name: "phone", label: "Mobile number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email" },
                { name: "city", label: "City / area", required: true },
                { name: "message", label: "Tell us about you (optional)", type: "textarea" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
