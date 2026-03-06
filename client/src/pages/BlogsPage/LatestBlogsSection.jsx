import React from "react";

/**
 * LatestBlogsSection
 * Figma nodes 371:1119 – 371:1191
 *
 * Layout (3-column grid):
 *  Col 1: tall image (484px, rows 1+2) with gradient overlay + text over image
 *  Col 2: two stacked small cards (232px each) — plain images with text beside/below
 *  Col 3: two stacked small cards (232px each) with gradient overlay + text over image
 */

// Image assets from Figma
const images = {
  tall: "/blogs/blog-tall.png",
  mid1: "/blogs/blog-mid1.png",
  mid2: "/blogs/blog-mid2.png",
  right1: "/blogs/blog-right1.png",
  right2: "/blogs/blog-right2.png",
};

const CategoryLabel = ({
  text,
  color = "text-[#193495]",
  lineColor = "border-[#193495]",
  lineWidth = "w-[116px]",
}) => (
  <div>
    <p
      className={`font-['Lato'] font-bold ${color} text-[15px] leading-normal mb-1`}
    >
      {text}
    </p>
    <div className={`border-t ${lineColor} ${lineWidth}`} />
  </div>
);

const LatestBlogsSection = () => {
  return (
    <section className="w-full bg-white py-12" aria-label="Latest blog posts">
      <div className="max-w-[1440px] mx-auto px-[49px]">
        {/* Section heading */}
        <div className="mb-8">
          <h2 className="font-['Alegreya_Sans'] font-bold text-[#193495] text-[40px] underline decoration-solid text-center leading-normal">
            LATEST BLOGS
          </h2>
        </div>

        {/* Three-column grid */}
        <div className="flex gap-[21px] items-stretch">
          {/* ─── Column 1: Tall image with text overlay ─── */}
          <div
            className="relative rounded-[5px] overflow-hidden flex-shrink-0 flex flex-col justify-end"
            style={{ width: "353px", height: "484px" }}
          >
            <img
              src={images.tall}
              alt="Camping style blog post"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            {/* Text overlay */}
            <div className="relative z-10 p-5">
              <p className="font-['Lato'] font-bold text-white text-[15px] leading-normal mb-1">
                Lifestyle
              </p>
              <div className="w-[66px] border-t border-white mb-2" />
              <h3 className="font-['Lato'] font-bold text-white text-[18px] leading-normal mb-2">
                Camping Style: Turning Nylon Straps into Professional Outdoor
                Accessories
              </h3>
              <p className="font-['Lato'] font-medium text-white text-[12px]">
                Nov 15, 2026
              </p>
            </div>
          </div>

          {/* ─── Column 2: Two stacked image cards with text overlay ─── */}
          <div className="flex flex-col gap-[21px] flex-1 min-w-0">
            {/* Card 1 */}
            <div
              className="relative rounded-[5px] overflow-hidden flex flex-col justify-end"
              style={{ height: "232px" }}
            >
              <img
                src={images.mid1}
                alt="Battery life blog post"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="relative z-10 p-5">
                <p className="font-['Lato'] font-bold text-white text-[15px] leading-normal mb-1">
                  Product Review
                </p>
                <div className="w-[116px] border-t border-white mb-2" />
                <h3 className="font-['Lato'] font-bold text-white text-[18px] leading-normal mb-2">
                  The Secret to Extending Smartwatch Battery Life When
                  Tracking Your 10-Hour Route
                </h3>
                <p className="font-['Lato'] font-medium text-white text-[12px]">
                  Nov 15, 2026
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative rounded-[5px] overflow-hidden flex flex-col justify-end"
              style={{ height: "232px" }}
            >
              <img
                src={images.mid2}
                alt="Strap color trends blog post"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="relative z-10 p-5">
                <p className="font-['Lato'] font-bold text-white text-[15px] leading-normal mb-1">
                  Lifestyle
                </p>
                <div className="w-[66px] border-t border-white mb-2" />
                <h3 className="font-['Lato'] font-bold text-white text-[18px] leading-normal mb-2">
                  Smartwatch Color Palette 2025: The Strap Color Trends You
                  Can't Miss
                </h3>
                <p className="font-['Lato'] font-medium text-white text-[12px]">
                  Nov 15, 2026
                </p>
              </div>
            </div>
          </div>

          {/* ─── Column 3: Two stacked image cards with text overlay ─── */}
          <div
            className="flex flex-col gap-[21px] flex-shrink-0"
            style={{ width: "394px" }}
          >
            {/* Card top — image with bottom gradient + text overlay */}
            <div
              className="relative rounded-[5px] overflow-hidden flex flex-col justify-end"
              style={{ height: "232px" }}
            >
              <img
                src={images.right1}
                alt="Golfer smartwatch blog post"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
              <div className="relative z-10 p-5">
                <p className="font-['Lato'] font-bold text-white text-[15px] leading-normal mb-1">
                  Product Review
                </p>
                <div className="w-[113px] border-t border-white mb-2" />
                <h3 className="font-['Lato'] font-bold text-white text-[18px] leading-normal mb-2">
                  Apple Watch vs. Garmin Approach: Which Watch is Best for
                  Golfers?
                </h3>
                <p className="font-['Lato'] font-medium text-white text-[12px]">
                  Nov 15, 2026
                </p>
              </div>
            </div>

            {/* Card bottom — image with bottom gradient + text overlay */}
            <div
              className="relative rounded-[5px] overflow-hidden flex flex-col justify-end"
              style={{ height: "232px" }}
            >
              <img
                src={images.right2}
                alt="Camping nylon straps blog post"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
              <div className="relative z-10 p-5">
                <p className="font-['Lato'] font-bold text-white text-[15px] leading-normal mb-1">
                  Lifestyle
                </p>
                <div className="w-[66px] border-t border-white mb-2" />
                <h3 className="font-['Lato'] font-bold text-white text-[18px] leading-normal mb-2">
                  Camping Style: Turning Nylon Straps into Professional Outdoor
                  Accessories
                </h3>
                <p className="font-['Lato'] font-medium text-white text-[12px]">
                  Nov 15, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsSection;
