import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { CallbackBox } from "@/components/Sections";
import { formatDate, posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return { title: p?.title ?? "Blog", description: p?.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((x) => x.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-32 md:pt-40">
          <Link href="/blog" className="text-sm font-semibold text-sun">
            ← All posts
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-3 text-sm text-white/60">{formatDate(post.date)}</p>
        </div>
      </section>
      <article className="bg-white pb-16">
        <div className="mx-auto max-w-3xl px-5">
          <Photo src={post.image} className="-mt-2 aspect-[16/9] rounded-2xl" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/80">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>
      <CallbackBox />
    </>
  );
}
