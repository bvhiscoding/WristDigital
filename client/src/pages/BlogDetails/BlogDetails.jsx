import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { heroBgImage, heroPost } from "../BlogsPage/blogsData";
import BlogFloatingWidgets from "./BlogFloatingWidgets";

export default function BlogDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {/* ── Floating Widgets (portal → body) ──────────────────── */}
      <BlogFloatingWidgets />

      {/* ── Page ──────────────────────────────────────────────── */}
      <div className="w-full flex flex-col bg-white min-h-screen pt-[120px] pb-24 font-['Lato:Regular',sans-serif]">
        <div className="max-w-[860px] mx-auto w-full px-6 md:px-12">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[14px] text-gray-500 mb-8 font-['Lato:Regular',sans-serif]">
            <Link to="/" className="hover:text-[#193495] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blogs" className="hover:text-[#193495] transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-[#0c1950] font-['Lato:SemiBold',sans-serif] truncate max-w-[300px] md:max-w-[500px]">
              {heroPost.title}
            </span>
          </nav>

          {/* ── Header ────────────────────────────────────────── */}
          <header className="mb-10">
            <span className="text-[#193495] font-['Lato:Bold',sans-serif] uppercase tracking-wider text-[13px] mb-4 block">
              {heroPost.category}
            </span>
            <h1 className="text-[32px] md:text-[46px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950] leading-[1.2] mb-6">
              {heroPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-[14px] text-gray-500">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#193495] to-[#0c1950] flex items-center justify-center text-white font-['Lato:Bold',sans-serif] text-[15px]">
                  W
                </div>
                <div>
                  <p className="font-['Lato:Bold',sans-serif] text-[#0c1950] leading-none">WristDigital</p>
                  <p className="text-[13px] text-gray-400 mt-0.5">{heroPost.date} &middot; 5 min read</p>
                </div>
              </div>

              {/* Share buttons */}
              <div className="ml-auto flex items-center gap-2">
                {[
                  {
                    label: "Share on Facebook",
                    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
                    hover: "hover:text-[#193495] hover:border-[#193495]",
                  },
                  {
                    label: "Share on X",
                    icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
                    hover: "hover:text-[#1A8CD8] hover:border-[#1A8CD8]",
                  },
                  {
                    label: "Copy link",
                    icon: (
                      <>
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </>
                    ),
                    hover: "hover:text-[#193495] hover:border-[#193495]",
                  },
                ].map(({ label, icon, hover }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 ${hover} transition-colors`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* ── Hero Image ────────────────────────────────────── */}
          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.10)] mb-14">
            <img src={heroBgImage} alt={heroPost.title} className="w-full h-full object-cover" />
          </div>

          {/* ── Article Body ──────────────────────────────────── */}
          <article className="flex flex-col gap-0">
            {/* Lead */}
            <p className="text-[20px] font-['Lato:SemiBold',sans-serif] text-[#0c1950] leading-[1.7] mb-8">
              {heroPost.excerpt}
            </p>

            {/* Section 1 */}
            <h2 className="text-[28px] md:text-[32px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950] mt-12 mb-5">
              1. What is ATM and Why Does it Matter?
            </h2>
            <p className="text-[18px] text-[#475569] leading-[1.8] font-['Lato:Regular',sans-serif] mb-6">
              The ATM (atmospheres) rating on your smartwatch indicates how much static atmospheric pressure it can withstand in a laboratory test. Historically used for traditional watches, it's a common measure in the smartwatch industry today. When a watch claims an ATM resistance, it means it was tested to a certain pressure without leaking.
            </p>

            {/* Blockquote */}
            <blockquote className="my-10 border-l-4 border-[#193495] bg-[#F4F7FE] p-6 rounded-r-2xl">
              <p className="text-[#193495] font-['Lato:Bold',sans-serif] text-[18px] leading-[1.7] m-0">
                "Remember: Water resistance is not a permanent condition and may decrease over time due to wear and tear. Inspect your strap and watch seals periodically."
              </p>
            </blockquote>

            {/* Section 2 */}
            <h2 className="text-[28px] md:text-[32px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950] mt-12 mb-5">
              2. Decoding IP68: Dust and Water Defenses
            </h2>
            <p className="text-[18px] text-[#475569] leading-[1.8] font-['Lato:Regular',sans-serif] mb-4">
              Unlike ATM, which was born from traditional horology, the IP (Ingress Protection) standard is the brainchild of the International Electrotechnical Commission (IEC). It evaluates electronic devices' defense mechanisms against solids and liquids.
            </p>
            <ul className="list-disc pl-7 my-4 space-y-3 text-[18px] text-[#475569] font-['Lato:Regular',sans-serif] mb-6">
              <li><strong className="font-['Lato:Bold',sans-serif] text-[#0c1950]">The first digit (6):</strong> Dust tight — no ingress of dust; complete protection against contact.</li>
              <li><strong className="font-['Lato:Bold',sans-serif] text-[#0c1950]">The second digit (8):</strong> Protected against continuous submersion in water under conditions specified by the manufacturer.</li>
            </ul>

            {/* Inline Image */}
            <figure className="my-10 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/blogs/foryou-1.png"
                alt="Watch Maintenance"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <figcaption className="text-center text-[14px] text-gray-400 mt-4 italic font-['Lato:Regular',sans-serif]">
                Properly cleaning your watch strap can extend its aesthetic longevity.
              </figcaption>
            </figure>

            {/* Section 3 */}
            <h2 className="text-[28px] md:text-[32px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950] mt-12 mb-5">
              3. Real World Scenarios
            </h2>
            <p className="text-[18px] text-[#475569] leading-[1.8] font-['Lato:Regular',sans-serif] mb-6">
              To avoid accidental water damage, the best rule of thumb is to look at the manufacturer's specific guidelines for your particular device. For instance, Apple advises against wearing the Apple Watch in a sauna or steam room, during high-velocity water activities like water skiing, or when scuba diving.
            </p>
            <p className="text-[18px] text-[#475569] leading-[1.8] font-['Lato:Regular',sans-serif] mb-6">
              When hitting the pool with a 5 ATM-rated smartwatch, enjoy your lap swimming — but leave the diving to a watch with a higher rating.
            </p>
          </article>

          {/* ── Tags ──────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-100">
            {["Smartwatch", "Guides", "Action", "Waterproof", "IP68"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-[#0c1950] text-[14px] font-['Lato:Bold',sans-serif] rounded-full hover:bg-[#193495]/10 hover:text-[#193495] transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ── Related Articles ──────────────────────────────── */}
          <div className="mt-20 pt-10 border-t border-gray-100">
            <h3 className="text-[22px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950] mb-8">Related Articles</h3>
            <div className="flex flex-col gap-4">
              {[
                { to: "/blogs/strap-marathon", img: "/blogs/trend-1.png", category: "Sports Performance", title: "Which Strap is Best for Marathon Running and Long-Distance Cycling?", date: "Nov 15, 2025", readTime: "4 min" },
                { to: "/blogs/bike-computer", img: "/blogs/trend-2.png", category: "Sports Performance", title: "Transform Your Smartwatch into a Bike Computer: Handlebar Mount Guide", date: "Nov 15, 2025", readTime: "3 min" },
                { to: "/blogs/strap-change", img: "/blogs/foryou-1.png", category: "Tips & Tricks", title: "4 Simple Steps to Change Your Smartwatch Band at Home in 30 Seconds", date: "Nov 15, 2026", readTime: "2 min" },
              ].map((post) => (
                <Link
                  key={post.to}
                  to={post.to}
                  className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-gray-50 transition-colors -mx-4"
                >
                  <div className="w-[88px] h-[68px] rounded-xl overflow-hidden flex-shrink-0">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[12px] font-['Lato:Bold',sans-serif] text-[#193495] uppercase tracking-wider">{post.category}</span>
                    <p className="text-[15px] font-['Lato:SemiBold',sans-serif] text-[#0c1950] leading-snug group-hover:text-[#193495] transition-colors line-clamp-2">{post.title}</p>
                    <span className="text-[13px] text-gray-400">{post.date} &middot; {post.readTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
