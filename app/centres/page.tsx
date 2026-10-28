import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { CallbackBox, Eyebrow, PageHero } from "@/components/Sections";
import { mapEmbedUrl, mapLinkUrl, site } from "@/lib/site";

export const metadata: Metadata = { title: "Centres" };

export default function CentresPage() {
  return (
    <>
      <PageHero
        image="/images/nature-garden.jpg"
        eyebrow="OUR CENTRES"
        title={
          <>
            Find a Tech Kidz <span className="text-sun">near you.</span>
          </>
        }
        text="Visit our campus, meet the teachers and see the classrooms for yourself."
      />

      <section className="bg-white py-14 md:py-24">
        <div className="container-x">
          <div className="grid overflow-hidden rounded-2xl bg-mist md:grid-cols-2">
            <Photo src="/images/playground.jpg" className="min-h-[240px]" />
            <div className="p-6 md:p-10">
              <Eyebrow>MAIN CAMPUS</Eyebrow>
              <h2 className="mt-2 text-3xl font-extrabold">West Tambaram</h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/80">
                📍 {site.addressLine1},<br />
                <span className="pl-6">{site.addressLine2}</span>
              </p>
              <p className="mt-3 text-sm text-navy/80">🕘 {site.hours}</p>
              <p className="mt-3 text-sm text-navy/80">📞 {site.phone}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {["Playgroup", "Nursery", "LKG", "UKG", "Daycare"].map((t) => (
                  <span key={t} className="rounded-full bg-white px-3 py-1.5 font-semibold">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={mapLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white"
                >
                  Get directions
                </a>
                <Link href="/admissions#visit" className="rounded-lg bg-sun px-5 py-3 text-sm font-bold text-navy">
                  Book a visit
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <iframe
              src={mapEmbedUrl}
              title="Tech Kidz West Tambaram on map"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-10 rounded-2xl border-2 border-dashed border-navy/15 p-8 text-center">
            <p className="text-lg font-bold">More centres coming soon</p>
            <p className="mt-1 text-sm text-navy/65">Want to open one in your area?</p>
            <Link href="/franchise" className="mt-4 inline-block font-bold text-rust underline">
              Learn about our franchise →
            </Link>
          </div>
        </div>
      </section>

      <CallbackBox />
    </>
  );
}
