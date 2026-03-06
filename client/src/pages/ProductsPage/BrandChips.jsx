import React, { useState } from "react";

// Brand logo PNGs — correct mapping verified from Figma asset inspection
const brands = [
  {
    id: "apple",
    label: "Apple",
    logo: "/ProductsPage/d4983d2953d6bdffd4c1c4ddb83d0ca3c1e455ec.png",
    activeBorder: "#1a2530",
  },
  {
    id: "huawei",
    label: "Huawei",
    logo: "/ProductsPage/30055a8400e76b78f1aae6824866863ee3349c17.png",
    activeBorder: "#1a2530",
  },
  {
    id: "xiaomi",
    label: "Xiaomi",
    logo: "/ProductsPage/1dd51d0b47ff7d84f4f9b794b67433f0c3046516.png",
    activeBorder: "#000000",
  },
  {
    id: "redmi",
    label: "Redmi",
    logo: "/ProductsPage/4fdeaf90144217ec95d9b841b9a08bf98b8f8f2d.png",
    activeBorder: "#000000",
  },
  {
    id: "garmin",
    label: "Garmin",
    logo: "/ProductsPage/cf0315d0e3131e2d48e87f23d1962fc45f73dead.png",
    activeBorder: "#000000",
  },
  {
    id: "samsung",
    label: "Samsung",
    logo: "/ProductsPage/ad841972e26a2caecd87f6fb8c6f5a558f241ba9.png",
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

        {/* More button */}
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
