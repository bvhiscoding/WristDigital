import React, { useState } from "react";

// Star icon
const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Cart icon
const CartIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// Heart / Wishlist icon
const HeartIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 transition-colors ${filled ? "text-red-500 fill-current" : "text-gray-400"}`}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const ProductCard = ({
  name,
  price,
  priceUnit = "đ",
  rating = "5.0",
  reviews = "100",
  image,
  brandLogo,
}) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="relative bg-white flex flex-col h-full group overflow-hidden rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
      {/* Wishlist toggle */}
      <button
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition-transform focus:outline-none"
      >
        <HeartIcon filled={wishlisted} />
      </button>

      {/* Brand badge — fixed-size container, PNG logo */}
      {brandLogo && (
        <div
          className="absolute top-3 left-3 z-10"
          style={{ width: 90, height: 30, overflow: "hidden" }}
        >
          <img
            src={brandLogo}
            alt="Brand"
            style={{
              width: 90,
              height: 30,
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
        </div>
      )}

      {/* Product image */}
      <div className="w-full aspect-square flex items-center justify-center p-6 overflow-hidden bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 px-4 pt-2 pb-4 flex-grow">
        {/* Name */}
        <h3 className="text-[22px] font-bold text-black text-center font-['Lato'] leading-tight">
          {name}
        </h3>

        {/* Price */}
        <p className="text-[20px] font-semibold text-black text-center font-['Lato']">
          {price}
          <span className="underline decoration-solid ml-0.5">{priceUnit}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 justify-start">
          <StarIcon />
          <span className="text-[#675e5e] text-[15px] font-['Lato']">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto pt-3">
          {/* Add to Cart */}
          <button
            aria-label="Add to cart"
            className="w-[36px] h-[36px] flex-shrink-0 flex items-center justify-center rounded-[20px] border-2 border-[#193495] text-[#193495] hover:bg-[#193495] hover:text-white transition-colors focus:outline-none"
          >
            <CartIcon />
          </button>

          {/* Buy Now */}
          <button className="flex-grow h-[36px] bg-[#193495] text-white text-[16px] font-semibold font-['Lato'] rounded-[10px] hover:bg-[#1030b0] transition-colors focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
