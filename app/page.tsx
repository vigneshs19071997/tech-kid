import Link from "next/link";
import { Photo } from "@/components/Photo";
import { HomeContact } from "@/components/HomeContact";
import { Eyebrow, ProgramCards, WhyUsGrid } from "@/components/Sections";
import { site } from "@/lib/site";

const activities = [
  { title: "Letters & phonics", text: "Sounds, words and early reading through play.", img: "/images/alphabet.jpg" },
  { title: "Art & creativity", text: "Painting, craft and colours every week.", img: "/images/creative-art.jpg" },
  { title: "Story time", text: "Daily stories that grow language and imagination.", img: "/images/storytime.jpg" },
  { title: "Numbers & shapes", text: "Counting, sorting and puzzles that build logic.", img: "/images/numbers-shapes.jpg" },
  { title: "Nature & discovery", text: "Our garden is a classroom for little scientists.", img: "/images/nature-garden.jpg" },
  { title: "Music & movement", text: "Songs, rhythm and dance for happy, active kids.", img: "/images/music.jpg" },
];

const parentPoints = [
  { title: "Daily photos", text: "See your child's day on the parent app." },
  { title: "Monthly reports", text: "Simple progress reports, every month." },
  { title: "Parent meetings", text: "Meet the teacher every term — or anytime." },
  { title: "Open door", text: "Visit any day. No appointment needed." },
];

const steps = [
  { title: "Enquire", text: "Fill the form or call us." },
  { title: "Visit", text: "Come and see the school with your child." },
  { title: "Meet", text: "A short, friendly chat with the teacher." },
  { title: "Join", text: "Submit the form and start the fun!" },
];

const faqs = [
  {
    q: "What age can my child join?",
    a: "From 2 years. Playgroup is for 2–3 years, Nursery 3–4, Lower KG 4–5 and Upper KG 5–6 (age as on 1 June).",
  },
  {
    q: "What are the school timings?",
    a: "Classes run in the morning, between 9:00 am and 1:15 pm depending on the program. Daycare runs until 6:30 pm.",
  },
  {
    q: "How many children are in one class?",
    a: "We keep classes small — about 8 to 12 children for every teacher, depending on age.",
  },
  {
    q: "Is the campus safe?",
    a: "Yes. We have CCTV, a secure single entry, ID-based pick-up and police-verified staff.",
  },
  {
    q: "Do you teach coding to small kids?",
    a: "Yes, but without screens. Children learn step-by-step thinking with floor robots, cards and games.",
  },
  {
    q: "Can I visit before I decide?",
    a: "Of course! Book a free visit and spend time in a class with your child.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy text-white">
        <Photo src="/images/joyful-preschool.png" position="center 30%" className="absolute inset-0 md:hidden" />
        <Photo
          src="/images/cheerful-preschool.png"
          position="center 30%"
          className="absolute inset-0 hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />
        <div className="container-x relative w-full pb-20 pt-40 md:pb-24">
          <span className="inline-block rounded-full border border-white/40 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em]">
            ADMISSIONS OPEN · {site.admissionsYear}
          </span>
          <h1 className="mt-4 max-w-2xl text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Big futures <br className="md:hidden" />
            start <span className="text-sun">small.</span>
          </h1>
          <p className="mt-4 max-w-md text-sm text-white/85 md:text-base">
            <span className="md:hidden">Playgroup to KG for ages 2 to 6 — expert teachers, small classes, safe campuses.</span>
            <span className="hidden md:inline">
              Playgroup, Nursery and Kindergarten for ages 2 to 6 — with expert teachers, small classes and safe,
              modern campuses.
            </span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-lg bg-sun px-6 py-3 text-center text-sm font-bold text-navy transition hover:brightness-95"
            >
              Book a Free Visit
            </Link>
            <Link
              href="/about#tour"
              className="rounded-lg border border-white/50 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Watch Campus Tour
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-navy pb-16 pt-14 text-white md:pb-24 md:pt-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="max-w-md text-3xl font-extrabold leading-tight md:text-4xl">
              Four programs. One clear <span className="hidden md:inline">path to school.</span>
              <span className="md:hidden">path.</span>
            </h2>
            <Link href="/programs" className="hidden shrink-0 text-sm font-bold underline underline-offset-4 hover:text-sun md:block">
              All programs →
            </Link>
          </div>
          <div className="mt-8">
            <ProgramCards />
          </div>
        </div>
      </section>

      {/* WHY TECH KIDZ */}
      <section className="bg-white py-12 md:py-24">
        <div className="container-x grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <Eyebrow>WHY TECH KIDZ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy md:text-4xl">
              Everything a parent looks for.<span className="hidden md:inline"> In one school.</span>
            </h2>
            <p className="mt-4 hidden max-w-md text-sm leading-relaxed text-navy/70 md:block">
              We combine a planned curriculum with real care, so your child learns, plays and feels safe every single
              day.
            </p>
            <Link
              href="/about"
              className="mt-6 hidden rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-2 md:inline-block"
            >
              Why parents choose us
            </Link>
          </div>
          <WhyUsGrid />
        </div>
      </section>

      {/* NEW: LEARNING EVERY DAY */}
      <section className="bg-mist py-14 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <Eyebrow>LEARNING EVERY DAY</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Little hands. Big ideas. <span className="text-rust">Lots of fun.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/70 md:text-base">
              Every week mixes reading, numbers, art, music and nature — so children grow in every way.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {activities.map((a) => (
              <div key={a.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="overflow-hidden">
                  <Photo src={a.img} className="aspect-[4/3] transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="text-sm font-extrabold sm:text-lg">{a.title}</h3>
                  <p className="mt-1 hidden text-sm text-navy/65 sm:block">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAYCARE + FRANCHISE */}
      <section className="grid md:grid-cols-2">
        <Link href="/daycare" className="group relative block min-h-[260px] overflow-hidden md:min-h-[340px]">
          <Photo src="/images/playground.jpg" className="absolute inset-0 transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
            <p className="text-[10px] font-bold tracking-[0.16em] text-sun">DAYCARE</p>
            <h3 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">Full-day care until 6:30 pm</h3>
            <p className="mt-1 hidden text-sm text-white/80 md:block">Meals, nap time and live updates →</p>
          </div>
        </Link>
        <Link href="/franchise" className="group flex min-h-[150px] flex-col justify-end bg-rust p-5 transition hover:brightness-110 md:min-h-[340px] md:p-8">
          <p className="text-[10px] font-bold tracking-[0.16em] text-sun">FRANCHISE</p>
          <h3 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">Open a Tech Kidz in your city</h3>
          <p className="mt-1 text-xl text-white md:hidden">→</p>
          <p className="mt-1 hidden text-sm text-white/80 md:block">Curriculum, training, setup and marketing →</p>
        </Link>
      </section>

      {/* NEW: PARENTS STAY CLOSE */}
      <section className="bg-white py-14 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <div className="relative">
            <Photo src="/images/parent-family.jpg" className="aspect-square rounded-3xl" />
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-sun px-5 py-4 shadow-xl md:-right-5">
              <p className="text-2xl font-extrabold text-navy">📸 Every day</p>
              <p className="text-xs font-semibold text-navy/75">photos & updates on the app</p>
            </div>
          </div>
          <div>
            <Eyebrow>FOR PARENTS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">You are always part of the day.</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/70 md:text-base">
              We keep you close to everything your child learns, eats and enjoys — with simple, regular updates.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {parentPoints.map((p) => (
                <div key={p.title} className="flex gap-3 rounded-xl bg-mist p-4">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-rust" />
                  <div>
                    <p className="font-bold">{p.title}</p>
                    <p className="text-xs text-navy/60">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-navy py-14 text-white md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <Photo src="/images/child-portrait.jpg" className="aspect-square rounded-3xl ring-4 ring-sun/80" />
          <div>
            <p className="text-6xl font-black leading-none text-sun">&ldquo;</p>
            <blockquote className="mt-4 text-xl font-semibold leading-snug md:text-3xl">
              [Add a real parent quote here — one or two strong lines about their child&apos;s growth.]
            </blockquote>
            <p className="mt-4 text-xs text-white/70">
              <span className="font-bold text-white">[Parent name]</span> · Parent, [City]
            </p>
          </div>
        </div>
      </section>

      {/* NEW: ADMISSION STEPS */}
      <section className="bg-white py-14 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
          <div>
            <Eyebrow>ADMISSIONS {site.admissionsYear}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Joining is easy. Just 4 steps.</h2>
            <ol className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-sun">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold">{s.title}</p>
                    <p className="text-sm text-navy/60">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/admissions" className="mt-8 inline-block rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white hover:bg-navy-2">
              See admission details
            </Link>
          </div>
          <Photo src="/images/parent-teacher.jpg" className="aspect-square rounded-3xl" />
        </div>
      </section>

      {/* NEW: FAQ */}
      <section className="bg-mist py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Eyebrow>QUESTIONS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Parents often ask</h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sun text-navy transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: BIG CONTACT FORM */}
      <HomeContact />
    </>
  );
}
