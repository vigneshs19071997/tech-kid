import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { CallbackBox, PageHero } from "@/components/Sections";
import { formatDate, posts } from "@/lib/site";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHero
        image="/images/storytime.jpg"
        eyebrow="BLOG"
        title={
          <>
            Tips for <span className="text-sun">happy parenting.</span>
          </>
        }
        text="Simple ideas and news from our teachers."
      />
      <section className="bg-white py-14 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl bg-mist">
              <Photo src={p.image} className="aspect-[16/10] transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <p className="text-xs font-semibold text-navy/50">{formatDate(p.date)}</p>
                <h2 className="mt-2 text-lg font-extrabold leading-snug group-hover:text-rust">{p.title}</h2>
                <p className="mt-2 text-sm text-navy/65">{p.excerpt}</p>
                <p className="mt-4 text-sm font-bold text-rust">Read more →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CallbackBox />
    </>
  );
}
