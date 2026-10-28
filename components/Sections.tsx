import Link from "next/link";
import { Photo } from "./Photo";
import { EnquiryForm } from "./EnquiryForm";
import { programs, whyUs } from "@/lib/site";

/* ---------- Inner page top banner ---------- */
export function PageHero({
  eyebrow,
  title,
  text,
  image = "/images/school-group.jpg",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Photo src={image} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/60" />
      <div className="container-x relative pb-16 pt-32 md:pb-24 md:pt-40">
        <p className="text-xs font-bold tracking-[0.18em] text-sun">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">{text}</p>}
      </div>
    </section>
  );
}

/* ---------- Small section label ---------- */
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold tracking-[0.18em] ${light ? "text-sun" : "text-olive"}`}>{children}</p>
  );
}

/* ---------- Four program cards ---------- */
export function ProgramCards() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {programs.map((p) => (
        <Link
          key={p.slug}
          href={`/programs/${p.slug}`}
          className="group relative block overflow-hidden rounded-xl"
        >
          <Photo
            src={p.image}
            className="aspect-[16/9] transition duration-500 group-hover:scale-105 md:aspect-[3/4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[10px] font-bold tracking-wider text-sun">
              {p.age} · {p.level}
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-white">{p.name}</h3>
            <p className="mt-1 hidden text-xs text-white/80 md:block">{p.short}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ---------- Why us (4 boxes) ---------- */
export function WhyUsGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {whyUs.map((w) => (
        <div
          key={w.n}
          className="flex items-center gap-4 rounded-xl bg-mist p-4 sm:block sm:p-5"
        >
          <p className="text-xl font-extrabold text-rust sm:text-2xl">{w.n}</p>
          <div>
            <h3 className="font-bold text-navy sm:mt-3">{w.title}</h3>
            <p className="mt-1 text-xs text-navy/60 sm:hidden">{w.mobile}</p>
            <p className="mt-1 hidden text-xs text-navy/60 sm:block">{w.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Yellow "Book your free school visit" box ---------- */
export function CallbackBox() {
  return (
    <section className="bg-navy px-4 py-10 md:px-5 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl bg-sun p-6 md:grid-cols-[1fr_1.2fr] md:items-center md:p-10">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight text-navy md:text-3xl">
            Book your free school visit
          </h2>
          <p className="mt-2 hidden text-sm text-navy/80 md:block">We&apos;ll call you back within one working day.</p>
        </div>
        <EnquiryForm
          type="callback"
          inline
          submitLabel="Call Me Back"
          fields={[
            { name: "parent_name", label: "Parent's name", required: true },
            { name: "phone", label: "Mobile number", type: "tel", required: true },
          ]}
        />
      </div>
    </section>
  );
}
