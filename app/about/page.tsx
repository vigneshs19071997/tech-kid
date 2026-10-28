import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { CallbackBox, Eyebrow, PageHero, WhyUsGrid } from "@/components/Sections";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { title: "Play first", text: "Children learn best when they are having fun. Every lesson starts with play." },
  { title: "Care always", text: "Warm, patient teachers who know every child by name and need." },
  { title: "Think like makers", text: "Simple tech, puzzles and building games grow curious problem solvers." },
  { title: "Parents as partners", text: "Daily updates and regular meetings keep you close to your child's day." },
];

// const team = [
//   { name: "[Name]", role: "Founder & Director" },
//   { name: "[Name]", role: "Head of Curriculum" },
//   { name: "[Name]", role: "Centre Head, West Tambaram" },
// ];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT TECH KIDZ"
        title={
          <>
            A happy first school for <span className="text-sun">curious kids.</span>
          </>
        }
        text="We help children aged 2 to 6 grow in confidence, learning and kindness — with a little bit of tech magic along the way."
        image="/images/classroom-play.jpg"
      />

      <section className="bg-white py-14 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <Photo src="/images/school-group.jpg" className="aspect-[4/3] rounded-2xl" />
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Why we started Tech Kidz</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-navy/75 md:text-base">
              <p>
                We wanted a preschool in West Tambaram where children feel at home, learn through play and get a
                gentle start with the skills they will need for the future.
              </p>
              <p>
                Tech Kidz mixes a proven early-years curriculum with screen-free coding games, science corners and lots
                of stories, music and outdoor time.
              </p>
              <p>Small classes and trained teachers mean every child gets real attention, every single day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-white md:py-20">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow light>OUR MISSION</Eyebrow>
              <p className="mt-3 text-2xl font-bold leading-snug">
                To give every child a safe, joyful start and make them fully ready for big school.
              </p>
            </div>
            <div>
              <Eyebrow light>OUR VISION</Eyebrow>
              <p className="mt-3 text-2xl font-bold leading-snug">
                Confident, kind and curious children who love to learn and are not afraid to try.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-24">
        <div className="container-x">
          <Eyebrow>WHAT WE BELIEVE</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Our values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-xl bg-mist p-6">
                <p className="text-2xl font-extrabold text-rust">0{i + 1}</p>
                <h3 className="mt-3 font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-navy/65">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>WHY PARENTS CHOOSE US</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Everything a parent looks for.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/70">
              From trained teachers to a secure campus and a parent app — we take care of the details so you can relax.
            </p>
          </div>
          <div className="[&_div.bg-mist]:bg-white">
            <WhyUsGrid />
          </div>
        </div>
      </section>

      <section id="tour" className="scroll-mt-20 bg-white py-14 md:py-24">
        <div className="container-x">
          <Eyebrow>CAMPUS TOUR</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Take a look inside</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { label: "Story corner", src: "/images/storytime.jpg" },
              { label: "Play area", src: "/images/playground.jpg" },
              { label: "Nature garden", src: "/images/nature-garden.jpg" },
            ].map(({ label, src }) => (
              <div key={label} className="relative overflow-hidden rounded-xl">
                <Photo src={src} className="aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <p className="absolute bottom-4 left-4 font-bold text-white">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy/70">
            The best tour is a real one.{" "}
            <Link href="/admissions#visit" className="font-bold text-rust underline">
              Book a free visit →
            </Link>
          </p>
        </div>
      </section>

      {/*
      <section className="bg-mist py-14 md:py-24">
        <div className="container-x">
          <Eyebrow>OUR TEAM</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">The people who care</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {team.map((t, i) => (
              <div key={i} className="rounded-xl bg-white p-5">
                <div
                  className={`flex aspect-square items-center justify-center rounded-lg text-5xl font-extrabold ${
                    ["bg-sun text-navy", "bg-navy text-sun", "bg-rust text-white"][i % 3]
                  }`}
                >
                  TK
                </div>
                <p className="mt-4 font-bold">{t.name}</p>
                <p className="text-sm text-navy/60">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <CallbackBox />
    </>
  );
}
