import React from "react";
import { heroBg } from "./saleData";

/**
 * SaleHeroBanner
 * Figma: top section (node 2032:5321)
 * Displays Black Friday promotional banner with perfectly matched visually layered text
 */
const SaleHeroBanner = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#dee4f4]"
      style={{ minHeight: "671px" }}
      aria-label="Black Friday Sale Banner"
    >
      {/* Background image full bleed */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
      />

      {/* Dark overlay for extra readability, subtle per Figma blend */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none z-0" />

      {/* Content wrapper centered, bounding absolute objects to desktop width */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-[671px] px-[5%] lg:px-[142px] pt-[107px]">
        
        {/* Date */}
        <p className="text-white text-[20px] font-bold font-['Lato'] mb-3 tracking-wide">
          NOV 25 - NOV 30
        </p>

        {/* BLACK FRIDAY heading */}
        <h1 className="font-['Alegreya_Sans'] font-black text-[#193495] flex flex-col select-none">
          <span style={{ fontSize: "clamp(80px, 8.3vw, 120px)", lineHeight: 0.85 }}>
            BLACK
          </span>
          <span style={{ fontSize: "clamp(80px, 8.3vw, 120px)", lineHeight: 0.85 }}>
            FRIDAY
          </span>
        </h1>

        {/* SPECIAL OFFER label */}
        <p className="text-white text-[24px] font-semibold font-['Lato'] mt-8 tracking-widest relative z-20">
          SPECIAL OFFER
        </p>

        {/* 20% OFF */}
        <div className="flex items-end font-['Alegreya_Sans'] font-black text-[#193495] select-none -mt-4 relative z-10 tracking-tighter">
          <span style={{ fontSize: "clamp(120px, 17.3vw, 250px)", lineHeight: 0.75 }}>
            20
          </span>
          <div className="flex flex-col mb-[2%] ml-1">
            <span style={{ fontSize: "clamp(60px, 8.9vw, 128px)", lineHeight: 0.8 }}>
              %
            </span>
            <span
              style={{ fontSize: "clamp(24px, 3.3vw, 48px)", lineHeight: 0.8 }}
              className="tracking-normal"
            >
              OFF
            </span>
          </div>
        </div>

        {/* SHOP NOW button - Centered absolutely at the bottom to match watch placement */}
        <button
          className="absolute bottom-[74px] left-1/2 -translate-x-1/2 w-[155px] h-[48px] bg-[#dee4f4] rounded-[5px] shadow-[0px_4px_12.2px_0px_rgba(0,0,0,0.19)] font-['Lato'] font-bold text-[#193495] text-[16px] hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#193495] z-30"
          aria-label="Shop Now"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default SaleHeroBanner;

