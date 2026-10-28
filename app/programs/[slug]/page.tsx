import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallbackBox, Eyebrow, PageHero } from "@/components/Sections";
import { programs } from "@/lib/site";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  return { title: p ? `${p.name} (${p.level})` : "Program" };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();

  const others = programs.filter((x) => x.slug !== p.slug);

  return (
    <>
      <PageHero eyebrow={`${p.age} · ${p.level}`} title={p.name} text={p.intro} image={p.image} />

      <section className="bg-white py-14 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>WHAT YOUR CHILD LEARNS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Learning through play</h2>
            <ul className="mt-6 grid gap-3">
              {p.learn.map((l, i) => (
                <li key={l} className="flex items-center gap-4 rounded-xl bg-mist p-4">
                  <span className="text-lg font-extrabold text-rust">0{i + 1}</span>
                  <span className="text-sm font-semibold">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-2xl bg-navy p-6 text-white">
              <Eyebrow light>A DAY IN {p.name.toUpperCase()}</Eyebrow>
              <ol className="mt-5 space-y-4">
                {p.day.map((d) => (
                  <li key={d.time} className="flex gap-4 border-b border-white/10 pb-3 last:border-0">
                    <span className="w-12 shrink-0 font-bold text-sun">{d.time}</span>
                    <span className="text-sm text-white/85">{d.what}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-mist p-4">
                <p className="text-xs text-navy/60">Timing</p>
                <p className="mt-1 font-bold">{p.timing}</p>
              </div>
              <div className="rounded-xl bg-mist p-4">
                <p className="text-xs text-navy/60">Class size</p>
                <p className="mt-1 font-bold">{p.ratio}</p>
              </div>
            </div>
            <Link
              href="/admissions#visit"
              className="mt-4 block rounded-lg bg-sun px-5 py-3 text-center text-sm font-bold text-navy"
            >
              Apply for {p.name}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="container-x">
          <h2 className="text-xl font-extrabold">Other programs</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/programs/${o.slug}`} className="rounded-xl bg-white p-5 hover:shadow-md">
                <p className="text-[10px] font-bold tracking-wider text-rust">
                  {o.age} · {o.level}
                </p>
                <p className="mt-1 text-lg font-extrabold">{o.name} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallbackBox />
    </>
  );
}
