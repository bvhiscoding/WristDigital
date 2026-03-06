import React, { useState, useEffect } from "react";
import {
  flashSaleMainImg,
  flashThumb1,
  flashThumb2,
  appleThumbLogo,
} from "./saleData";

/**
 * FlashSaleSection
 * Figma nodes 363:1107–363:1139
 *
 * Correct layout (matches reference image and Figma positions):
 * ┌──────────────────────┬──────────────────────────────────┐
 * │                      │  🍎 WATCH SERIES 7               │
 * │  Main image (tall)   │  description text                │
 * │  [FLASH SALE label   │  ⏰ 01:50:30                     │
 * │   overlaid on image] │  ~~12.190.000đ~~  10.390.000đ   │
 * │                      │  [Add to Cart]  [Buy Now]        │
 * │                      ├────────────────┬─────────────────┤
 * │                      │   thumb 1      │   thumb 2  ►    │
 * └──────────────────────┴────────────────┴─────────────────┘
 */

// Countdown timer hook
const useCountdown = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

// Clock icon (yellow outline)
const ClockIcon = () => (
  <svg
    className="w-6 h-6 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f5b800"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Right-arrow navigation circle (at the far-right of thumbnail row)
const ArrowButton = () => (
  <button
    aria-label="Next watches"
    className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#193495] hover:text-white text-[#193495] transition-colors focus:outline-none"
  >
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const FlashSaleSection = () => {
  const countdown = useCountdown(1 * 3600 + 50 * 60 + 30); // 01:50:30

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-6 lg:px-[49px] pt-6 pb-10"
      aria-label="Flash Sale"
    >
      {/* ─── Two-column layout ─── */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* ════════════════════════════════════════
            LEFT COLUMN — tall main image only
            Figma: Rectangle243, h=673px, w=549px
            ════════════════════════════════════════ */}
        <div className="flex-shrink-0 lg:w-[549px]">
          <div className="relative rounded-[10px] overflow-hidden h-[357px] lg:h-[530px]">
            <img
              src={flashSaleMainImg}
              alt="Flash sale featured watch"
              className="w-full h-full object-cover"
            />

            {/* FLASH SALE overlay label
                Figma: bg-[#e3ebff], rounded-bl-[30px] rounded-tl-[30px]
                (left side rounded, right side flat — sits on image mid-height)
            */}
            <div
              className="absolute top-[35%] left-0"
              style={{
                background: "#e3ebff",
                borderRadius: "0 30px 30px 0",
                boxShadow: "0px 4px 7.7px 0px rgba(0,0,0,0.5)",
                padding: "14px 32px 14px 24px",
              }}
            >
              <span className="text-[#102270] text-[28px] lg:text-[30px] font-bold font-['Lato'] tracking-wide whitespace-nowrap">
                FLASH SALE
              </span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            RIGHT COLUMN — product info (top) + thumbnails (bottom)
            ════════════════════════════════════════ */}
        <div className="flex-grow flex flex-col justify-between min-w-0">

          {/* ── TOP: product info ── */}
          <div className="flex flex-col gap-4">

            {/* Apple logo + product name */}
            <div className="flex items-center gap-3">
              <img
                src={appleThumbLogo}
                alt="Apple"
                className="w-[62px] h-[62px] object-contain flex-shrink-0"
              />
              <p className="text-[28px] lg:text-[32px] font-['Lato'] leading-tight">
                <strong>WATCH</strong>
                <span className="font-light"> SERIES 7</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-black text-[15px] lg:text-[16px] font-['Lato'] leading-relaxed">
              More screen. More power. More possibilities. Series 7 brings seamless
              performance, beautiful design, and advanced health features in the most
              refined Apple Watch, all of which is on a 20% sale off for Black Friday
            </p>

            {/* Countdown timer */}
            <div className="flex items-center gap-2">
              <ClockIcon />
              <span className="text-black text-[20px] font-['Lato'] tabular-nums">
                {countdown}
              </span>
            </div>

            {/* Prices stacked: original (gray + strikethrough) above sale (red) */}
            <div className="flex flex-col gap-1">
              <div className="relative inline-block w-fit">
                <p className="text-[#b4b4b4] text-[16px] font-semibold font-['Lato'] select-none">
                  12.190.000<span className="underline decoration-solid ml-0.5">đ</span>
                </p>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[#b4b4b4]" />
              </div>
              <p className="text-[#ee2c2c] text-[24px] font-semibold font-['Lato']">
                10.390.000<span className="underline decoration-solid ml-0.5">đ</span>
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                className="px-6 py-2.5 border-2 border-[#193495] text-[#193495] text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#193495] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#193495]"
                aria-label="Add Watch Series 7 to cart"
              >
                Add to Cart
              </button>
              <button
                className="px-8 py-2.5 bg-[#193495] text-white text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#0e2275] transition-colors focus:outline-none focus:ring-2 focus:ring-[#193495]"
                aria-label="Buy Watch Series 7 now"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* ── BOTTOM: two thumbnail images side-by-side with right arrow
              Figma: Rectangle244 (w=372 h=316) + Rectangle245 (w=372 h=316)
              positioned at the bottom of the right column
          ── */}
          <div className="relative flex gap-3 mt-6">
            <div
              className="rounded-[7px] overflow-hidden flex-1 cursor-pointer"
              style={{ height: 200 }}
            >
              <img
                src={flashThumb1}
                alt="Watch view 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div
              className="rounded-[7px] overflow-hidden flex-1 cursor-pointer"
              style={{ height: 200 }}
            >
              <img
                src={flashThumb2}
                alt="Watch view 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Navigation arrow at right edge */}
            <ArrowButton />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FlashSaleSection;
