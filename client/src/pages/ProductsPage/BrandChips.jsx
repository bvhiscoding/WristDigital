import React, { useState } from "react";

// Brand logo PNGs — correct mapping verified from Figma asset inspection
const brands = [
  {
    id: "apple",
    label: "Apple",
    logo: "/ProductsPage/apple-logo.png",
    activeBorder: "#1a2530",
  },
  {
    id: "huawei",
    label: "Huawei",
    logo: "/ProductsPage/huawei-logo.png",
    activeBorder: "#1a2530",
  },
  {
    id: "xiaomi",
    label: "Xiaomi",
    logo: "/ProductsPage/xiaomi-logo.png",
    activeBorder: "#000000",
  },
  {
    id: "redmi",
    label: "Redmi",
    logo: "/ProductsPage/redmi-logo.png",
    activeBorder: "#000000",
  },
  {
    id: "garmin",
    label: "Garmin",
    logo: "/ProductsPage/garmin-logo.png",
    activeBorder: "#000000",
  },
  {
    id: "samsung",
    label: "Samsung",
    logo: "/ProductsPage/samsung-logo.png",
    activeBorder: "#000000",
  },
];

const BrandChips = ({ onBrandChange }) => {
  const [selected, setSelected] = useState("apple");

  const handleSelect = (id) => {
    setSelected(id);
    onBrandChange?.(id);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 my-4">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {brands.map((brand) => {
          const isActive = selected === brand.id;
          return (
            <button
              key={brand.id}
              onClick={() => handleSelect(brand.id)}
              aria-pressed={isActive}
              aria-label={brand.label}
              // Active vs Inactive state according to UI
              className={`flex items-center justify-center h-[57px] px-5 rounded-[15px] border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#193495]
                ${
                  isActive
                    ? "border-[#1a2530] bg-white shadow-md"
                    : "border-black bg-white hover:border-[#193495] hover:shadow-sm"
                }`}
            >
              {/* Fixed-size container prevents image from distorting */}
              <span
                className="flex items-center justify-center"
                style={{ width: 100, height: 36 }}
              >
                <img
                  src={brand.logo}
                  alt={brand.label}
                  style={{
                    maxWidth: 100,
                    maxHeight: 36,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </span>
            </button>
          );
        })}

        {/* More button (...) according to UI */}
        <button
          className="flex items-center justify-center h-[57px] w-[57px] rounded-[15px] border-2 border-black bg-white text-[22px] text-black hover:border-[#193495] transition-colors focus:outline-none"
          aria-label="More brands"
        >
          ...
        </button>
      </div>
    </div>
  );
};

export default BrandChips;
