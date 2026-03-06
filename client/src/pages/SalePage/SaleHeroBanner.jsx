import React from "react";
import { heroBg } from "./saleData";

/**
 * SaleHeroBanner
 * Figma: top section (node 347:615 + text elements)
 * Black Friday promotional banner with background image and discount info
 */
const SaleHeroBanner = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#dee4f4]"
      style={{ minHeight: "671px" }}
      aria-label="Black Friday Sale Banner"
    >
      {/* Background image (Rectangle242) */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full px-[142px] pt-[107px] pb-[90px] flex flex-col">
        {/* Date */}
        <p className="text-white text-[20px] font-bold font-['Lato'] mb-2 tracking-wide">
          NOV 25 - NOV 30
        </p>

        {/* BLACK FRIDAY heading */}
        <div className="relative">
          <h1
            className="font-['Alegreya_Sans'] font-black text-[#193495] leading-none select-none"
            style={{ fontSize: "clamp(60px, 8.3vw, 120px)" }}
          >
            BLACK
          </h1>
          <h1
            className="font-['Alegreya_Sans'] font-black text-[#193495] leading-none select-none"
            style={{ fontSize: "clamp(60px, 8.3vw, 120px)" }}
          >
            FRIDAY
          </h1>
        </div>

        {/* SPECIAL OFFER label */}
        <p className="text-white text-[24px] font-semibold font-['Lato'] mt-3 tracking-widest">
          SPECIAL OFFER
        </p>

        {/* 20% OFF */}
        <div className="flex items-end leading-none mt-1 select-none">
          <span
            className="font-['Alegreya_Sans'] font-black text-[#193495]"
            style={{ fontSize: "clamp(100px, 17.3vw, 250px)", lineHeight: 1 }}
          >
            20
          </span>
          <div className="flex flex-col mb-2 ml-1">
            <span
              className="font-['Alegreya_Sans'] font-black text-[#193495] leading-none"
              style={{ fontSize: "clamp(50px, 8.9vw, 128px)" }}
            >
              %
            </span>
            <span
              className="font-['Alegreya_Sans'] font-black text-[#193495] leading-none"
              style={{ fontSize: "clamp(20px, 3.3vw, 48px)" }}
            >
              OFF
            </span>
          </div>
        </div>

        {/* SHOP NOW button */}
        <div className="flex justify-center w-full mt-8 max-w-[550px]">
          <button
            className="bg-[#dee4f4] text-[#193495] text-[16px] font-bold font-['Lato'] px-12 py-3 rounded-[5px] shadow-lg hover:bg-[#193495] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#193495]"
            aria-label="Shop Now"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaleHeroBanner;
