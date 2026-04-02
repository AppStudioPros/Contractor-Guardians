import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Contractor Guardians',
  description: 'Construction industry insights, veteran housing updates, and faith-driven building from Contractor Guardians.',
};

const posts = [
  {
    slug: "protecting-homeowners-from-contractor-fraud",
    category: "Homeowners",
    categoryColor: "hsl(39, 91%, 55%)",
    date: "March 27, 2026",
    readTime: "6 min read",
    title: "Protecting Homeowners from Contractor Fraud — A Faith-Based Approach",
    excerpt: "Every year, thousands of homeowners are victims of contractor fraud. Contractor Guardians is building a vetted, values-driven network that puts accountability and transparency first.",
  },
  {
    slug: "building-homes-for-veterans",
    category: "Veterans",
    categoryColor: "hsl(221, 83%, 53%)",
    date: "March 19, 2026",
    readTime: "5 min read",
    title: "Building Homes for Those Who Built Our Freedom",
    excerpt: "Our mission to facilitate 2,000+ home projects each year starts with the people who served. Here's how Contractor Guardians is partnering with organizations to house veterans and their families.",
  },
  {
    slug: "trade-schools-building-the-next-generation",
    category: "Education",
    categoryColor: "hsl(142, 71%, 45%)",
    date: "March 10, 2026",
    readTime: "7 min read",
    title: "Trade Schools — Building the Next Generation of Skilled Builders",
    excerpt: "College isn't for everyone, but a meaningful career should be. We're developing trade school programs across America to give young men and women access to skilled-trades education and mentorship.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg" />
        <div className="container-lg relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-gold mb-4">Blog</h1>
            <p className="text-xl text-slate leading-relaxed">
              Construction insights, community impact, and the mission behind Contractor Guardians.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-steel">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group card card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{ color: post.categoryColor, borderColor: `${post.categoryColor}40` }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-slate">{post.date}</span>
                  <span className="text-xs text-slate">·</span>
                  <span className="text-xs text-slate">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-headline text-gold group-hover:text-gold-hover transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-slate text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
