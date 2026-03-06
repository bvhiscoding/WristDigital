import React, { useState, useEffect } from "react";
import { bestDeals } from "./saleData";

/**
 * BestDealsSection
 * Figma: "BEST DEALS" heading + 6 product cards (nodes Group1-Group6)
 * Reuses the project's ProductCard visuals but reimplements inline to match
 * the Figma card design exactly (sale price, original price, remain, cart, buy).
 */

// Clock icon
const ClockIcon = () => (
  <svg
    className="w-7 h-7 flex-shrink-0"
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

// Heart wishlist icon
const HeartIcon = ({ filled }) => (
  <svg
    className={`w-[18px] h-[18px] transition-colors ${filled ? "text-red-500 fill-current" : "text-gray-400"}`}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

// Cart icon
const CartIcon = () => (
  <svg
    className="w-[18px] h-[18px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// Packed stock icon (fire/remain icon from Figma Frame12)
const PackIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#193495"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
  </svg>
);

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

/**
 * SaleDealCard — matches the Figma Group1-6 card layout exactly:
 * brand logo (top-left) | wishlist (top-right)
 * Product image (center, large)
 * Product name (bold, centered)
 * Prices: original (gray strikethrough) + sale (red)
 * Remain: N (with pack icon)
 * Buttons: [Cart icon outline] [Buy Now filled]
 */
const SaleDealCard = ({
  name,
  salePrice,
  originalPrice,
  remain,
  image,
  brandLogo,
}) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="relative bg-white flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-[4px]">
      {/* Top row: brand logo + wishlist */}
      <div className="flex items-start justify-between px-4 pt-4">
        {brandLogo && (
          <div style={{ width: 88, height: 28, overflow: "hidden" }}>
            <img
              src={brandLogo}
              alt="Brand"
              style={{
                width: 88,
                height: 28,
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </div>
        )}
        <button
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => setWishlisted(!wishlisted)}
          className="ml-auto w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
        >
          <HeartIcon filled={wishlisted} />
        </button>
      </div>

      {/* Product image */}
      <div
        className="flex items-center justify-center px-6 py-4"
        style={{ height: 237 }}
      >
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product name */}
      <h3 className="text-[22px] font-bold text-black text-center font-['Lato'] leading-tight px-4">
        {name}
      </h3>

      {/* Prices */}
      <div className="flex items-baseline justify-center gap-4 mt-2 px-4">
        {/* Original price with line-through */}
        <div className="relative">
          <p className="text-[#b4b4b4] text-[15px] font-semibold font-['Lato'] select-none">
            {originalPrice}
          </p>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#b4b4b4]" />
        </div>
        {/* Sale price */}
        <p className="text-[#ee2c2c] text-[20px] font-semibold font-['Lato']">
          {salePrice}
        </p>
      </div>

      {/* Remain */}
      <div className="flex items-center gap-1 px-4 mt-2">
        <PackIcon />
        <span className="text-[#675e5e] text-[15px] font-['Lato']">
          Remain: {remain}
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-4 mt-auto">
        {/* Add to Cart — outlined */}
        <button
          aria-label="Add to cart"
          className="w-[36px] h-[36px] flex-shrink-0 flex items-center justify-center rounded-[20px] border-2 border-[#193495] text-[#193495] hover:bg-[#193495] hover:text-white transition-colors focus:outline-none"
        >
          <CartIcon />
        </button>
        {/* Buy Now — filled */}
        <button
          className="flex-grow h-[36px] bg-[#193495] text-white text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#0e2275] transition-colors focus:outline-none"
          aria-label={`Buy ${name} now`}
        >
          Buy Now
        </button>
      </div>
    </article>
  );
};

const BestDealsSection = () => {
  const countdown = useCountdown(2 * 3600 + 30 * 60 + 10); // 02:30:10

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-6 lg:px-[49px] py-10"
      aria-label="Best Deals"
    >
      {/* Heading row */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[#193495] text-[40px] lg:text-[48px] font-extrabold font-['Lato'] tracking-wide">
          BEST DEALS
        </h2>
        {/* Countdown badge */}
        <div className="flex items-center gap-2 bg-[#eaf0ff] rounded-[10px] px-5 py-3">
          <ClockIcon />
          <span className="text-[#193495] text-[22px] font-semibold font-['Lato'] tabular-nums">
            {countdown}
          </span>
        </div>
      </div>

      {/* Cards grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestDeals.map((deal) => (
          <SaleDealCard key={deal.id} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default BestDealsSection;
