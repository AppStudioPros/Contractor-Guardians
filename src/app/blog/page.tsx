import type { Metadata } from 'next';
import Link from 'next/link';
import { getGAPBlogPosts, slugify, estimateReadTime, extractExcerpt } from '@/lib/gap';

const GAP_CLIENT_ID = "8bc25862-3d57-49ab-aaa8-a6dd43fcfa2a";
export const metadata: Metadata = { title: 'Blog — Contractor Guardians', description: 'Construction industry insights from Contractor Guardians.' };
export const revalidate = 60;

const FALLBACK_POSTS = [
  { slug: "protecting-homeowners", category: "Homeowners", categoryColor: "hsl(39, 91%, 55%)", date: "March 27, 2026", readTime: "6 min read", title: "Protecting Homeowners from Contractor Fraud", excerpt: "Every year, thousands of homeowners are victims of contractor fraud. Contractor Guardians is building a vetted, values-driven network." },
  { slug: "building-homes-for-veterans", category: "Veterans", categoryColor: "hsl(221, 83%, 53%)", date: "March 19, 2026", readTime: "5 min read", title: "Building Homes for Those Who Built Our Freedom", excerpt: "Our mission to facilitate 2,000+ home projects each year starts with the people who served." },
];

export default async function BlogPage() {
  const gapPosts = await getGAPBlogPosts(GAP_CLIENT_ID);
  const posts = gapPosts.length > 0
    ? gapPosts.map((p) => ({ slug: slugify(p.blog_title), category: "Blog", categoryColor: "hsl(39, 91%, 55%)", date: new Date(p.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }), readTime: estimateReadTime(p.blog_content), title: p.blog_title, excerpt: extractExcerpt(p.blog_content) }))
    : FALLBACK_POSTS;

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg" />
        <div className="container-lg relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-gold mb-4">Blog</h1>
            <p className="text-xl text-slate leading-relaxed">Construction insights and community impact.</p>
          </div>
        </div>
      </section>
      <section className="section section-steel">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group card card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border" style={{ color: post.categoryColor, borderColor: `${post.categoryColor}40` }}>{post.category}</span>
                  <span className="text-xs text-slate">{post.date}</span><span className="text-xs text-slate">·</span><span className="text-xs text-slate">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-headline text-gold group-hover:text-gold-hover transition-colors mb-2">{post.title}</h2>
                <p className="text-slate text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
