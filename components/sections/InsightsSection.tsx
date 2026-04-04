import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "Cold Chain",
    title: "Top 5 Cold Chain Challenges in India's Pharma Supply Chains",
    excerpt:
      "From last-mile breakdowns to power outages in Tier 3 cities, India's pharma cold chain has unique challenges. Here's how leading companies are solving them.",
    readTime: "6 min read",
    date: "January 2025",
  },
  {
    tag: "Packaging",
    title: "PVC vs PET vs HIPS: Choosing the Right Thermoformed Tray for Your Product",
    excerpt:
      "Each material has different barrier properties, regulatory acceptance, and cost implications. This guide helps you make the right pharma packaging material decision.",
    readTime: "8 min read",
    date: "December 2024",
  },
  {
    tag: "Regulatory",
    title: "GMP Compliance Checklist for Pharma Companies in India (Schedule M Updated)",
    excerpt:
      "With India's revised Schedule M requirements now in effect, here's a practical GMP compliance checklist for small and mid-sized pharma manufacturers.",
    readTime: "10 min read",
    date: "November 2024",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4 block">
              Knowledge Hub
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900">
              Pharma Insights &amp; Perspectives
            </h2>
          </div>
          <a
            href="#"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 group"
          >
            View All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map(({ tag, title, excerpt, readTime, date }) => (
            <article
              key={title}
              className="group bg-slate-50 border border-slate-200 hover:border-gold-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Top colour bar */}
              <div className="h-1 w-full bg-gradient-to-r from-gold-400 to-gold-600" />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-gold-50 text-gold-700 rounded-full border border-gold-200">
                    {tag}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock size={12} />
                    {readTime}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-slate-900 leading-snug mb-3 group-hover:text-gold-700 transition-colors">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">{excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-400">{date}</span>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700 group/link"
                  >
                    Read Article
                    <ArrowRight
                      size={12}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
