import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

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
  id,
  name,
  price,
  priceUnit = "đ",
  rating = "5.0",
  reviews = "100",
  image,
  brandLogo,
  brandName,
  detailUrl,
  initialWishlist = false,
}) => {
  const [wishlisted, setWishlisted] = useState(initialWishlist);

  const resolvedDetailUrl = detailUrl || (id === 1 ? "/product-details" : "#");

  const displayPrice =
    typeof price === "number" ? price.toLocaleString("vi-VN") : String(price || "");

  const displayRating = Number(rating || 0).toFixed(1);

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

      {/* Brand badge */}
      {(brandLogo || brandName) && (
        <div
          className="absolute top-3 left-3 z-10"
          style={{ width: 90, height: 30, overflow: "hidden" }}
        >
          {brandLogo ? (
            <img
              src={brandLogo}
              alt={brandName || "Brand"}
              style={{ width: 90, height: 30, objectFit: "contain", objectPosition: "left center" }}
            />
          ) : (
            <span className="inline-flex h-[30px] px-3 items-center rounded-full bg-[#f4f6ff] text-[#193495] text-[12px] font-semibold">
              {brandName}
            </span>
          )}
        </div>
      )}

      {/* Product image */}
      <Link
        to={resolvedDetailUrl}
        className="w-full aspect-square flex items-center justify-center p-6 overflow-hidden bg-white group-hover:opacity-90 transition-opacity"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-2 px-4 pt-2 pb-4 flex-grow">
        <Link to={resolvedDetailUrl} className="hover:text-[#193495] transition-colors">
          <h3 className="text-[22px] font-bold text-black text-center font-['Lato'] leading-tight">
            {name}
          </h3>
        </Link>

        <p className="text-[20px] font-semibold text-black text-center font-['Lato']">
          {displayPrice}
          <span className="underline decoration-solid ml-0.5">{priceUnit}</span>
        </p>

        <div className="flex items-center gap-1 justify-start">
          <StarIcon />
          <span className="text-[#675e5e] text-[15px] font-['Lato']">
            {displayRating} ({reviews} reviews)
          </span>
        </div>

        <ActionButtons />
      </div>
    </article>
  );
};

export default ProductCard;
