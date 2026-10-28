import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { CallbackBox, Eyebrow, PageHero } from "@/components/Sections";
import { programs } from "@/lib/site";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        image="/images/creative-art.jpg"
        eyebrow="PROGRAMS"
        title={
          <>
            Four programs. <span className="text-sun">One clear path</span> to school.
          </>
        }
        text="From the first day of Playgroup to the last day of Upper KG, each year builds on the one before."
      />

      <section className="bg-white py-14 md:py-24">
        <div className="container-x space-y-14 md:space-y-20">
          {programs.map((p, i) => (
            <div key={p.slug} className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
              <Photo src={p.image} className={`aspect-[4/3] rounded-2xl ${i % 2 ? "md:order-2" : ""}`} />
              <div>
                <Eyebrow>
                  {p.age} · {p.level}
                </Eyebrow>
                <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/75 md:text-base">{p.intro}</p>
                <ul className="mt-5 space-y-2">
                  {p.learn.slice(0, 3).map((l) => (
                    <li key={l} className="flex gap-3 text-sm">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sun" />
                      {l}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 text-xs">
                  <span className="rounded-full bg-mist px-3 py-1.5 font-semibold">🕘 {p.timing}</span>
                  <span className="rounded-full bg-mist px-3 py-1.5 font-semibold">👩‍🏫 {p.ratio}</span>
                </div>
                <Link
                  href={`/programs/${p.slug}`}
                  className="mt-6 inline-block rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white hover:bg-navy-2"
                >
                  See full program
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14 md:py-20">
        <div className="container-x">
          <Eyebrow>QUICK GUIDE</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold">Which program fits my child?</h2>
          <div className="mt-6 overflow-x-auto rounded-xl bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="p-4">Program</th>
                  <th className="p-4">Age (as on 1 June)</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">Timing</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.slug} className="border-t border-navy/10">
                    <td className="p-4 font-bold">{p.name}</td>
                    <td className="p-4">{p.age.replace("YRS", "years")}</td>
                    <td className="p-4">{p.level}</td>
                    <td className="p-4">{p.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CallbackBox />
    </>
  );
}
