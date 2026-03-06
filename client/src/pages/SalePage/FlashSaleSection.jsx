import React, { useState, useEffect } from "react";
import {
  flashSaleMainImg,
  flashThumb1,
  flashThumb2,
  appleThumbLogo,
} from "./saleData";

/**
 * FlashSaleSection
 * Figma nodes perfectly implemented (matches reference layout)
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

// Right-arrow navigation circle placed perfectly at the right edge of the main image
const ArrowButton = () => (
  <button
    aria-label="Next watches"
    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 w-[60px] h-[60px] rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-[#193495] hover:text-white text-black transition-colors focus:outline-none"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const FlashSaleSection = () => {
  const countdown = useCountdown(1 * 3600 + 50 * 60 + 30); // 01:50:30

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-[5%] lg:px-[50px] pt-[70px] pb-[70px]"
      aria-label="Flash Sale"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] justify-between">
        
        {/* ════════════════════════════════════════
            LEFT COLUMN — large image + badge
            ════════════════════════════════════════ */}
        <div className="relative flex-shrink-0 w-full lg:w-[549px] h-auto lg:h-[673px]">
          <img
            src={flashSaleMainImg}
            alt="Flash sale featured watch"
            className="w-full h-full object-cover rounded-[10px]"
          />

          {/* FLASH SALE Badge aligned right */}
          <div className="absolute top-[40px] right-0 bg-[#e3ebff] rounded-l-[30px] rounded-r-none shadow-[0px_4px_7.7px_0px_rgba(0,0,0,0.5)] w-[250px] sm:w-[324px] h-[60px] sm:h-[81px] flex items-center justify-center z-10 pointer-events-none">
            <span className="text-[#102270] text-[24px] sm:text-[32px] font-bold font-['Lato'] tracking-wide">
              FLASH SALE
            </span>
          </div>

          <ArrowButton />
        </div>

        {/* ════════════════════════════════════════
            RIGHT COLUMN — product info + thumbnails
            ════════════════════════════════════════ */}
        <div className="flex-grow flex flex-col justify-between min-w-0 pl-0 lg:pl-[24px]">
          
          {/* Top section: Info */}
          <div className="flex flex-col gap-5 mt-6 lg:mt-2">
            
            {/* Apple Logo + Heading */}
            <div className="flex items-center gap-4">
              <img
                src={appleThumbLogo}
                alt="Apple"
                className="w-[60px] lg:w-[74px] h-[60px] lg:h-[74px] object-contain flex-shrink-0"
              />
              <p className="text-[28px] lg:text-[32px] font-['Lato'] leading-tight text-black">
                <span className="font-bold">WATCH</span>
                <span className="font-light"> SERIES 7</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-black text-[16px] font-['Lato'] leading-[1.6] max-w-[683px] tracking-wide">
              More screen. More power. More possibilities. Series 7 brings seamless performance, beautiful design, and advanced health features in the most refined Apple Watch, all of which is on a 20% sale off for Black Friday
            </p>

            {/* Timer */}
            <div className="flex items-center gap-3">
              <img src="/sale/lightning.svg" alt="Timer" className="w-[32px] h-[32px] object-contain" />
              <span className="text-black text-[20px] font-['Lato'] font-medium tabular-nums">
                {countdown}
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-12 mt-1">
              <p className="text-[#b4b4b4] text-[16px] font-semibold font-['Lato'] relative top-[2px]">
                <span className="line-through line-through-color">12.190.000</span><span className="underline decoration-solid ml-0.5">đ</span>
              </p>
              <p className="text-[#ee2c2c] text-[24px] font-semibold font-['Lato'] leading-none">
                10.390.000<span className="underline decoration-solid ml-0.5 text-xl">đ</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 mt-4">
              <button
                className="w-[155px] h-[48px] border-2 border-[#193495] text-[#193495] text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#193495] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#193495]"
                aria-label="Add Watch Series 7 to cart"
              >
                Add to Cart
              </button>
              <button
                className="w-[155px] h-[48px] bg-[#193495] text-white text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#0e2275] transition-colors focus:outline-none focus:ring-2 focus:ring-[#193495]"
                aria-label="Buy Watch Series 7 now"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Bottom section: Thumbnails */}
          <div className="grid grid-cols-2 gap-4 lg:gap-[23px] mt-10 lg:mt-0 lg:max-w-[767px]">
            <div className="rounded-[7px] overflow-hidden aspect-[372/316] w-full cursor-pointer shadow-sm group">
              <img
                src={flashThumb1}
                alt="Watch view 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[400ms]"
              />
            </div>
            <div className="rounded-[7px] overflow-hidden aspect-[372/316] w-full cursor-pointer shadow-sm group">
              <img
                src={flashThumb2}
                alt="Watch view 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[400ms]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
