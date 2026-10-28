import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy text-white">
      <div className="container-x pt-20 text-center">
        <p className="text-6xl font-extrabold text-sun">404</p>
        <h1 className="mt-3 text-2xl font-extrabold">Oops! This page is playing hide and seek.</h1>
        <Link href="/" className="mt-6 inline-block rounded-lg bg-sun px-6 py-3 text-sm font-bold text-navy">
          Go to home
        </Link>
      </div>
    </section>
  );
}
