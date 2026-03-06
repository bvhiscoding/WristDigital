import React from "react";
import { forYouPosts } from "./blogsData";

/**
 * ForYouSection
 * Figma nodes 371:1078 – 371:1115
 *
 * Layout (matching Figma exactly):
 *  Top: horizontal divider + "FOR YOU" heading (left-aligned with partial line accent)
 *
 *  Content area — two columns:
 *   Left column (~40%):
 *     - Large square image of left post (524x268 in Figma)
 *     - Below image: category label + underline + title + excerpt + date
 *
 *   Right column (~60%):
 *     - Two rows stacked, each row = small thumbnail (left) + text block (right)
 *     - Each row article: thumbnail ~223x223, text beside it
 */
const ForYouSection = () => {
  const [leftPost, ...rightPosts] = forYouPosts;

  return (
    <section className="w-full bg-white" aria-label="Blog posts for you">
      {/* Top horizontal rule */}
      <div className="max-w-[1440px] mx-auto px-[49px]">
        <div className="border-t-[3px] border-[#193495]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-[49px] pb-6">
        {/* FOR YOU heading */}
        <div className="py-6">
          <h2 className="font-['Alegreya_Sans'] font-bold text-[#193495] text-[40px] leading-normal">
            FOR YOU
          </h2>
        </div>

        {/* Two-column content */}
        <div className="flex gap-8 items-start">
          {/* ── Left column: large image + text below ── */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{ width: "577px" }}
          >
            {/* Large image */}
            <div
              className="rounded-[5px] overflow-hidden w-full flex-shrink-0"
              style={{ height: "268px" }}
            >
              <img
                src={leftPost.image}
                alt={leftPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text below image */}
            <div className="pt-4">
              <p className="font-['Lato'] font-bold text-[#193495] text-[15px] leading-normal mb-1">
                {leftPost.category}
              </p>
              <div className="w-[92px] border-t border-[#193495] mb-3" />
              <h3 className="font-['Lato'] font-bold text-[#0c1950] text-[20px] leading-normal mb-2">
                {leftPost.title}
              </h3>
              <p className="font-['Lato'] font-normal text-[#0c1950] text-[16px] leading-normal mb-3">
                {leftPost.excerpt}
              </p>
              <p className="font-['Lato'] font-medium text-[#0c1950] text-[15px]">
                {leftPost.date}
              </p>
            </div>
          </div>

          {/* ── Right column: two stacked article rows ── */}
          <div className="flex flex-col flex-1 min-w-0 gap-6">
            {rightPosts.map((post) => (
              <article key={post.id} className="flex gap-5 items-start">
                {/* Thumbnail */}
                <div
                  className="relative rounded-[5px] overflow-hidden flex-shrink-0"
                  style={{ width: "223px", height: "223px" }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Text beside thumbnail */}
                <div className="flex flex-col flex-1 min-w-0 pt-1">
                  <p className="font-['Lato'] font-bold text-[#193495] text-[15px] leading-normal mb-1">
                    {post.category}
                  </p>
                  <div className="w-[66px] border-t border-[#193495] mb-3" />
                  <h3 className="font-['Lato'] font-bold text-black text-[20px] leading-normal mb-3">
                    {post.title}
                  </h3>
                  <p className="font-['Lato'] font-normal text-black text-[15px] leading-normal mb-3">
                    {post.excerpt}
                  </p>
                  <p className="font-['Lato'] font-medium text-[#0c1950] text-[15px]">
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
