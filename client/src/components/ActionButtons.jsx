import React from "react";

const CartIcon = () => (
  <svg
    className="w-4 h-4"
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

/**
 * Shared Add-to-Cart icon button + Buy Now button pair.
 * Used in ProductCard and SaleDealCard.
 */
const ActionButtons = () => (
  <div className="flex items-center gap-2 mt-auto pt-3">
    <button
      aria-label="Add to cart"
      className="w-[36px] h-[36px] flex-shrink-0 flex items-center justify-center rounded-[20px] border-2 border-[#193495] text-[#193495] hover:bg-[#193495] hover:text-white transition-colors focus:outline-none"
    >
      <CartIcon />
    </button>
    <button className="flex-grow h-[36px] bg-[#193495] text-white text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#1030b0] transition-colors focus:outline-none">
      Buy Now
    </button>
  </div>
);

export default ActionButtons;
