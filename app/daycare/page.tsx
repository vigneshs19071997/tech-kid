import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Eyebrow, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Daycare" };

const included = [
  { icon: "🍲", title: "Healthy meals", text: "Fresh lunch and evening snack, planned by a nutritionist." },
  { icon: "😴", title: "Nap time", text: "Clean, quiet nap room with a cot for every child." },
  { icon: "📱", title: "Live updates", text: "Photos and updates on the parent app through the day." },
  { icon: "🧩", title: "Activities", text: "Homework help, art, stories, tech games and outdoor play." },
  { icon: "🛡️", title: "Safe and secure", text: "CCTV, secure pick-up with ID, and trained staff." },
  { icon: "🩹", title: "First aid ready", text: "Staff trained in first aid, with a doctor on call." },
];

const schedule = [
  { time: "12:30 pm", what: "School ends, kids move to daycare" },
  { time: "1:00 pm", what: "Lunch" },
  { time: "1:45 pm", what: "Nap time" },
  { time: "3:30 pm", what: "Evening snack" },
  { time: "4:00 pm", what: "Activities and outdoor play" },
  { time: "5:30 pm", what: "Stories and quiet play" },
  { time: "6:30 pm", what: "Pick-up closes" },
];

export default function DaycarePage() {
  return (
    <>
      <PageHero
        eyebrow="DAYCARE"
        title={
          <>
            Full-day care <span className="text-sun">until 6:30 pm.</span>
          </>
        }
        text="For working parents. Meals, nap time, fun activities and live updates — your child is safe and happy until you arrive."
        image="/images/playground.jpg"
      />

      <section className="bg-white py-14 md:py-24">
        <div className="container-x">
          <Eyebrow>WHAT IS INCLUDED</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Everything your child needs</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((i) => (
              <div key={i.title} className="rounded-xl bg-mist p-6">
                <p className="text-2xl">{i.icon}</p>
                <h3 className="mt-3 font-bold">{i.title}</h3>
                <p className="mt-1 text-sm text-navy/65">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-white md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow light>A DAYCARE AFTERNOON</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Calm, fun and planned</h2>
            <ol className="mt-6 space-y-3">
              {schedule.map((s) => (
                <li key={s.time} className="flex gap-4 border-b border-white/10 pb-3">
                  <span className="w-20 shrink-0 font-bold text-sun">{s.time}</span>
                  <span className="text-sm text-white/85">{s.what}</span>
                </li>
              ))}
            </ol>
          </div>
          <Photo src="/images/music.jpg" className="aspect-[4/3] rounded-2xl" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>PLANS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Pick what works for you</h2>
            <div className="mt-6 space-y-3">
              {[
                { name: "Half day", time: "12:30 pm – 3:30 pm" },
                { name: "Full day", time: "12:30 pm – 6:30 pm" },
                { name: "Daycare only", time: "8:30 am – 6:30 pm (ages 2–6)" },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between rounded-xl bg-mist p-5">
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm text-navy/70">{p.time}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-navy/60">Ask us for fees. Siblings get a discount.</p>
          </div>
          <div className="rounded-2xl bg-sun p-6 md:p-8">
            <h3 className="text-2xl font-extrabold">Ask about daycare</h3>
            <p className="mb-5 mt-1 text-sm text-navy/80">We&apos;ll call you back within one working day.</p>
            <EnquiryForm
              type="daycare"
              submitLabel="Call Me Back"
              fields={[
                { name: "parent_name", label: "Parent's name", required: true },
                { name: "phone", label: "Mobile number", type: "tel", required: true },
                { name: "child_age", label: "Child's age", type: "select", options: ["2 years", "3 years", "4 years", "5 years", "6 years"] },
                { name: "program", label: "Plan", type: "select", options: ["Half day", "Full day", "Daycare only"] },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
