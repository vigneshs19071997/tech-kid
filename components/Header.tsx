"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Tech Kidz home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-sun"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/admissions"
          className="hidden rounded-lg bg-sun px-5 py-2.5 text-sm font-bold text-navy transition hover:brightness-95 md:inline-block"
        >
          Enquire Now
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-sun md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M5 7h14M5 12h14M5 17h9" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-4 rounded-xl bg-navy p-4 shadow-2xl ring-1 ring-white/10 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/admissions"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-sun px-3 py-3 text-center font-bold text-navy"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
