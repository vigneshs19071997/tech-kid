import Link from "next/link";
import { Logo } from "./Logo";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-x grid gap-6 py-10 md:grid-cols-[1fr_auto_1fr] md:items-center md:py-8">
        <div>
          <Link href="/" aria-label="Tech Kidz home">
            <Logo />
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-white/60">
            {site.addressLine1},<br />
            {site.addressLine2}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs text-white/80 underline-offset-4 hover:text-sun underline">
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-white/60 md:text-right">
          © {site.year} {site.fullName} · [{site.phone}]
        </p>
      </div>
    </footer>
  );
}
