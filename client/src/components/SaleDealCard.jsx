import React, { useState } from "react";
import ActionButtons from "./ActionButtons";

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

/**
 * Sale deal card with strikethrough original price, red sale price, and remain count.
 * Props: name, salePrice, originalPrice, remain, image, brandLogo
 */
const SaleDealCard = ({ name, salePrice, originalPrice, remain, image, brandLogo }) => {
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
              style={{ width: 88, height: 28, objectFit: "contain", objectPosition: "left center" }}
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
      <div className="flex items-center justify-center px-6 py-4" style={{ height: 237 }}>
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain transition-transform duration-500"
        />
      </div>

      {/* Name */}
      <h3 className="text-[22px] font-bold text-black text-center font-['Lato'] leading-tight px-4">
        {name}
      </h3>

      {/* Prices */}
      <div className="flex items-baseline justify-center gap-4 mt-2 px-4">
        <div className="relative">
          <p className="text-[#b4b4b4] text-[15px] font-semibold font-['Lato'] select-none">
            {originalPrice}
          </p>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#b4b4b4]" />
        </div>
        <p className="text-[#ee2c2c] text-[20px] font-semibold font-['Lato']">{salePrice}</p>
      </div>

      {/* Remain */}
      <div className="flex items-center gap-1 px-4 mt-2">
        <PackIcon />
        <span className="text-[#675e5e] text-[15px] font-['Lato']">Remain: {remain}</span>
      </div>

      {/* Action buttons */}
      <div className="px-4 pb-4 mt-auto">
        <ActionButtons />
      </div>
    </article>
  );
};

export default SaleDealCard;
