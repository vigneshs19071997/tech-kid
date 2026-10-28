import { EnquiryForm } from "./EnquiryForm";
import { Photo } from "./Photo";
import { mapLinkUrl, programs, site } from "@/lib/site";

function Icon({ d }: { d: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sun">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </span>
  );
}

const icons = {
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
};

// Big contact section used only on the home page.
export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-navy px-4 py-16 md:px-5 md:py-24">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: yellow info panel */}
        <div className="relative bg-sun p-7 md:p-10">
          <p className="text-xs font-bold tracking-[0.18em] text-rust">GET IN TOUCH</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy md:text-4xl">
            Book your free school visit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/80">
            Come and see our classrooms, meet the teachers and ask us anything. We&apos;ll call you back within one
            working day.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <Icon d={icons.pin} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-navy/60">Visit us</p>
                <a href={mapLinkUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-navy hover:underline">
                  {site.addressLine1},<br />
                  {site.addressLine2}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Icon d={icons.phone} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-navy/60">Call us</p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm font-bold text-navy hover:underline">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Icon d={icons.mail} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-navy/60">Email</p>
                <a href={`mailto:${site.email}`} className="text-sm font-bold text-navy hover:underline">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Icon d={icons.clock} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-navy/60">Open</p>
                <p className="text-sm font-bold text-navy">{site.hours}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-2">
            {["/images/storytime.jpg", "/images/playground.jpg", "/images/music.jpg"].map((src) => (
              <Photo key={src} src={src} className="aspect-square rounded-xl ring-2 ring-white/70" />
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="p-7 md:p-10">
          <h3 className="text-2xl font-extrabold text-navy">Tell us about your child</h3>
          <p className="mb-6 mt-1 text-sm text-navy/60">It takes less than a minute.</p>
          <EnquiryForm
            type="visit"
            submitLabel="Book My Free Visit"
            successText="Thank you! Our team will call you within one working day to fix your visit."
            fields={[
              { name: "parent_name", label: "Parent's name *", required: true },
              { name: "phone", label: "Mobile number *", type: "tel", required: true },
              { name: "email", label: "Email", type: "email" },
              { name: "child_name", label: "Child's name" },
              {
                name: "child_age",
                label: "Child's age",
                type: "select",
                options: ["2 years", "3 years", "4 years", "5 years", "6 years"],
              },
              {
                name: "program",
                label: "Interested in",
                type: "select",
                options: [...programs.map((p) => `${p.name} (${p.level})`), "Daycare"],
              },
              { name: "message", label: "Anything you'd like to ask?", type: "textarea" },
            ]}
          />
          <p className="mt-4 flex items-center gap-2 text-xs text-navy/50">
            <span>🔒</span> Your details are safe with us. We never share them.
          </p>
        </div>
      </div>
    </section>
  );
}
