import React, { useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import {
  flashSaleMainImg,
  flashThumb1,
  flashThumb2,
  appleThumbLogo,
} from "./saleData";

// Define our 3 rotating products mapped to the 3 images
const FLASH_PRODUCTS = [
  {
    id: "fs-1",
    image: flashSaleMainImg,
    brandLogo: appleThumbLogo,
    nameWeight: ["WATCH", " SERIES 7"],
    description:
      "More screen. More power. More possibilities. Series 7 brings seamless performance, beautiful design, and advanced health features in the most refined Apple Watch, all of which is on a 20% sale off for Black Friday",
    originalPrice: "12.190.000",
    salePrice: "10.390.000",
  },
  {
    id: "fs-2",
    image: flashThumb1,
    brandLogo: "/ProductsPage/garmin-logo.png",
    nameWeight: ["GARMIN", " EPIX PRO"],
    description:
      "Built for the outdoors, made for performance. Garmin Epix Pro Gen 2 packs multi-band GPS, advanced training metrics, and a brilliant AMOLED lens into a rugged case — 15% off today only.",
    originalPrice: "19.990.000",
    salePrice: "16.990.000",
  },
  {
    id: "fs-3",
    image: flashThumb2,
    brandLogo: "/ProductsPage/samsung-logo.png",
    nameWeight: ["GALAXY", " WATCH 6"],
    description:
      "Track your health like never before. Galaxy Watch 6 delivers advanced sleep tracking, body composition analysis, and a super-bright AMOLED display — now 25% off this flash sale.",
    originalPrice: "8.990.000",
    salePrice: "6.740.000",
  },
];

// Right-arrow navigation circle placed perfectly at the right edge of the main image
const ArrowButton = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next watches"
    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 w-[60px] h-[60px] rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-[#193495] hover:text-white text-black transition-colors focus:outline-none"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const FlashSaleSection = () => {
  const countdown = useCountdown(1 * 3600 + 50 * 60 + 30);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FLASH_PRODUCTS.length);
  };

  const currentProduct = FLASH_PRODUCTS[currentIndex];
  // Calculate indices for thumbnails (rotated)
  const thumb1Product =
    FLASH_PRODUCTS[(currentIndex + 1) % FLASH_PRODUCTS.length];
  const thumb2Product =
    FLASH_PRODUCTS[(currentIndex + 2) % FLASH_PRODUCTS.length];

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-[5%] lg:px-[50px] pt-[70px] pb-[70px]"
      aria-label="Flash Sale"
    >
      <style>
        {`
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide {
            animation: slide-in-right 0.4s ease-out forwards;
          }
        `}
      </style>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] justify-between">
        {/* ════════════════════════════════════════
            LEFT COLUMN — large image + badge
            ════════════════════════════════════════ */}
        <div className="relative flex-shrink-0 w-full lg:w-[549px] aspect-[549/673]">
          <img
            key={`main-${currentProduct.id}`}
            src={currentProduct.image}
            alt="Flash sale featured watch"
            className="w-full h-full object-cover rounded-[10px] shadow-sm animate-slide"
          />

          {/* FLASH SALE Badge aligned right */}
          <div className="absolute top-[40px] right-0 bg-[#e3ebff] rounded-l-[30px] rounded-r-none shadow-[0px_4px_7.7px_0px_rgba(0,0,0,0.5)] w-[250px] sm:w-[324px] h-[60px] sm:h-[81px] flex items-center justify-center z-10 pointer-events-none">
            <span className="text-[#102270] text-[24px] sm:text-[32px] font-bold font-['Lato'] tracking-wide">
              FLASH SALE
            </span>
          </div>

          <ArrowButton onClick={handleNext} />
        </div>

        {/* ════════════════════════════════════════
            RIGHT COLUMN — product info + thumbnails
            ════════════════════════════════════════ */}
        <div className="flex-grow flex flex-col justify-between min-w-0 pl-0 lg:pl-[24px]">
          {/* Top section: Info */}
          <div className="flex flex-col gap-5 mt-6 lg:mt-2">
            {/* Logo + Heading */}
            <div
              className="flex items-center gap-4 animate-slide"
              key={`brand-${currentProduct.id}`}
            >
              <img
                src={currentProduct.brandLogo}
                alt="Brand Logo"
                className="w-[60px] lg:w-[74px] h-[60px] lg:h-[74px] object-contain flex-shrink-0"
              />
              <p className="text-[28px] lg:text-[32px] font-['Lato'] leading-tight text-black">
                <span className="font-bold">
                  {currentProduct.nameWeight[0]}
                </span>
                <span className="font-light">
                  {currentProduct.nameWeight[1]}
                </span>
              </p>
            </div>

            {/* Description */}
            <div className="h-[120px] sm:h-[100px] lg:h-[75px]">
              <p
                key={`desc-${currentProduct.id}`}
                className="text-black text-[16px] font-['Lato'] leading-[1.6] max-w-[683px] tracking-wide animate-slide line-clamp-3"
              >
                {currentProduct.description}
              </p>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-3">
              <img
                src="/sale/lightning.svg"
                alt="Timer"
                className="w-[32px] h-[32px] object-contain"
              />
              <span className="text-black text-[20px] font-['Lato'] font-medium tabular-nums">
                {countdown}
              </span>
            </div>

            {/* Pricing */}
            <div
              className="flex items-center gap-12 mt-1 animate-slide"
              key={`price-${currentProduct.id}`}
            >
              <p className="text-[#b4b4b4] text-[16px] font-semibold font-['Lato'] relative top-[2px]">
                <span className="line-through line-through-color">
                  {currentProduct.originalPrice}
                </span>
                <span className="underline decoration-solid ml-0.5">đ</span>
              </p>
              <p className="text-[#ee2c2c] text-[24px] font-semibold font-['Lato'] leading-none">
                {currentProduct.salePrice}
                <span className="underline decoration-solid ml-0.5 text-xl">
                  đ
                </span>
              </p>
            </div>

            {/* Action Buttons with extra margin-bottom */}
            <div className="flex items-center gap-5 mt-4 mb-8 lg:mb-12">
              <button
                className="w-[155px] h-[48px] border-2 border-[#193495] text-[#193495] text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#193495] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#193495]"
                aria-label={`Add ${currentProduct.nameWeight.join("")} to cart`}
              >
                Add to Cart
              </button>
              <button
                className="w-[155px] h-[48px] bg-[#193495] text-white text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#0e2275] transition-colors focus:outline-none focus:ring-2 focus:ring-[#193495]"
                aria-label={`Buy ${currentProduct.nameWeight.join("")} now`}
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Bottom section: Thumbnails */}
          <div className="grid grid-cols-2 gap-4 lg:gap-[23px] mt-auto lg:max-w-[767px]">
            <div
              className="rounded-[7px] overflow-hidden aspect-[372/316] w-full cursor-pointer shadow-sm group"
              onClick={handleNext}
            >
              <img
                key={`thumb1-${thumb1Product.id}`}
                src={thumb1Product.image}
                alt={`${thumb1Product.nameWeight.join("")} view`}
                className="w-full h-full object-cover animate-slide group-hover:scale-105 transition-transform duration-[400ms]"
              />
            </div>
            <div
              className="rounded-[7px] overflow-hidden aspect-[372/316] w-full cursor-pointer shadow-sm group"
              onClick={() => {
                handleNext();
                handleNext();
              }}
            >
              <img
                key={`thumb2-${thumb2Product.id}`}
                src={thumb2Product.image}
                alt={`${thumb2Product.nameWeight.join("")} view`}
                className="w-full h-full object-cover animate-slide group-hover:scale-105 transition-transform duration-[400ms]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
