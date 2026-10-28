import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Eyebrow, PageHero } from "@/components/Sections";
import { mapEmbedUrl, mapLinkUrl, site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/parent-family.jpg"
        eyebrow="CONTACT"
        title={
          <>
            We&apos;d love to <span className="text-sun">hear from you.</span>
          </>
        }
        text="Call, write or just drop in. Our team is happy to answer any question."
      />

      <section className="bg-white py-14 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-xl bg-mist p-6">
              <Eyebrow>ADDRESS</Eyebrow>
              <p className="mt-2 font-bold leading-relaxed">
                {site.fullName}
                <br />
                {site.addressLine1},
                <br />
                {site.addressLine2}
              </p>
              <a href={mapLinkUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-bold text-rust underline">
                Get directions →
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-mist p-6">
                <Eyebrow>CALL</Eyebrow>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 block font-bold">
                  {site.phone}
                </a>
              </div>
              <div className="rounded-xl bg-mist p-6">
                <Eyebrow>EMAIL</Eyebrow>
                <a href={`mailto:${site.email}`} className="mt-2 block break-all font-bold">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-mist p-6">
              <Eyebrow>OPEN</Eyebrow>
              <p className="mt-2 font-bold">{site.hours}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-sun p-6 md:p-8">
            <h2 className="text-2xl font-extrabold">Send us a message</h2>
            <p className="mb-5 mt-1 text-sm text-navy/80">We reply within one working day.</p>
            <EnquiryForm
              type="contact"
              submitLabel="Send Message"
              successText="Thank you! We'll get back to you soon."
              fields={[
                { name: "parent_name", label: "Your name", required: true },
                { name: "phone", label: "Mobile number", type: "tel", required: true },
                { name: "email", label: "Email", type: "email", full: true },
                { name: "message", label: "Message", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>

        <div className="container-x mt-10">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src={mapEmbedUrl}
              title="Tech Kidz location"
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
