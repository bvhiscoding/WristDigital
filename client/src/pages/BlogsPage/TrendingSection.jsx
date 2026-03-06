import React from "react";
import { trendingPosts } from "./blogsData";

const ReadMoreLink = ({ href = "#", label = "Read More" }) => (
  <a
    href={href}
    aria-label={label}
    className="flex items-center gap-1 font-['Lato'] text-[#193495] text-[11px] hover:underline transition-all"
  >
    Read More
    <img
      src="/blogs/arrow-right.svg"
      alt=""
      aria-hidden="true"
      className="w-[12px] h-[13px] object-contain"
    />
  </a>
);

/**
 * TrendingSection
 * Figma nodes 371:1037 – 371:1074 + navigation arrow 388:1912
 *
 * Layout:
 *  - "TRENDING" heading on left, "All Trending" underline link on right
 *  - Two cards side-by-side:
 *    Left card (~63% width): large image + blue text block below (rounded-tl-[30px])
 *    Right card (~37% width): smaller image + blue text block below (rounded-tl-[30px])
 *  - Circular arrow navigation button overlapping the right edge of left card / left edge of right card
 */
const TrendingSection = () => {
  const [large, small] = trendingPosts;

  return (
    <section className="w-full bg-white py-10" aria-label="Trending blog posts">
      <div className="max-w-[1440px] mx-auto px-[84px]">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-['Alegreya_Sans'] font-extrabold text-[#193495] text-[36px] leading-normal">
            TRENDING
          </h2>
          <a
            href="#"
            className="font-['Lato'] font-medium text-[#193495] text-[20px] underline decoration-solid hover:opacity-80 transition-opacity"
          >
            All Trending
          </a>
        </div>

        {/* Cards row — positioned relatively so arrow button can be absolutely placed between them */}
        <div className="relative flex gap-[23px] items-start">
          {/* ── Left card (large) ── */}
          <div
            className="flex flex-col flex-1 min-w-0 bg-white drop-shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            style={{ borderRadius: "40px 10px 10px 40px" }}
          >
            {/* Image */}
            <div
              className="relative w-full h-[320px]"
              style={{ borderRadius: "40px 10px 0 0" }}
            >
              <img
                src={large.image}
                alt={large.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: "40px 10px 0 0" }}
              />
            </div>

            {/* Text panel below image */}
            <div
              className="bg-[#eaf0ff] px-10 pt-6 pb-8 flex-1 flex flex-col justify-center"
              style={{ borderRadius: "0 0 10px 40px" }}
            >
              <p className="font-['Lato'] font-bold text-[#193495] text-[15px] leading-normal mb-1">
                {large.category}
              </p>
              <div className="w-[141px] border-t border-[#193495] mb-3" />
              <h3 className="font-['Lato'] font-bold text-[#0c1950] text-[20px] leading-normal mb-2">
                {large.title}
              </h3>
              <p className="font-['Lato'] font-normal text-[#0c1950] text-[14px] leading-normal mb-6">
                {large.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-['Lato'] font-medium text-[#193495] text-[13px]">
                  {large.date}
                </span>
                <ReadMoreLink label={`Read more about ${large.title}`} />
              </div>
            </div>
          </div>

          {/* ── Circular arrow navigation button — overlapping between cards ── */}
          <div
            className="absolute z-20 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-105 transition-transform"
            style={{
              /* Centered perfectly in the 23px gap between Left Card and 37% Right Card */
              right: "calc(37% + 11.5px)",
              top: "50%",
              transform: "translate(50%, -50%)",
              width: "56px",
              height: "56px",
              boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
            }}
          >
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00003 22L12 12L2 2"
                stroke="#193495"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ── Right card (small) ── */}
          <div
            className="flex flex-col flex-shrink-0 drop-shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
            style={{ width: "37%", borderRadius: "10px 40px 40px 10px" }}
          >
            {/* Image */}
            <div
              className="relative w-full h-[240px]"
              style={{ borderRadius: "10px 40px 0 0" }}
            >
              <img
                src={small.image}
                alt={small.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: "10px 40px 0 0" }}
              />
            </div>

            {/* Text panel below image */}
            <div
              className="bg-[#eaf0ff] px-8 pt-6 pb-8 flex-1 flex flex-col justify-center"
              style={{ borderRadius: "0 0 40px 10px" }}
            >
              <p className="font-['Lato'] font-bold text-[#193495] text-[13px] leading-normal mb-1">
                {small.category}
              </p>
              <div className="w-[124px] border-t border-[#193495] mb-3" />
              <h3 className="font-['Lato'] font-bold text-[#0c1950] text-[18px] leading-normal mb-6">
                {small.title}
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-['Lato'] font-medium text-[#193495] text-[13px]">
                  {small.date}
                </span>
                <ReadMoreLink label={`Read more about ${small.title}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
