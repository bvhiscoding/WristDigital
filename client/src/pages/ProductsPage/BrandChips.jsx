import React, { useMemo, useState } from "react";
import { getBrandLogo } from "./brandLogoMap";

const fallbackBrands = [
  { id: "apple", slug: "apple", label: "Apple", logo: "/ProductsPage/apple-logo.png" },
  { id: "huawei", slug: "huawei", label: "Huawei", logo: "/ProductsPage/huawei-logo.png" },
  { id: "xiaomi", slug: "xiaomi", label: "Xiaomi", logo: "/ProductsPage/xiaomi-logo.png" },
  { id: "redmi", slug: "redmi", label: "Redmi", logo: "/ProductsPage/redmi-logo.png" },
  { id: "garmin", slug: "garmin", label: "Garmin", logo: "/ProductsPage/garmin-logo.png" },
  { id: "samsung", slug: "samsung", label: "Samsung", logo: "/ProductsPage/samsung-logo.png" },
];

const MAX_VISIBLE = 6;

const BrandChips = ({ onBrandChange, brands = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState("apple");

  const items = useMemo(() => {
    if (!brands.length) return fallbackBrands;

    return brands.map((brand) => ({
      id: brand._id,
      slug: brand.slug,
      label: brand.name,
      logo: getBrandLogo(brand),
    }));
  }, [brands]);

  const visibleItems = expanded ? items : items.slice(0, MAX_VISIBLE);
  const hasMore = items.length > MAX_VISIBLE;

  const handleSelect = (slug) => {
    setSelected(slug);
    onBrandChange?.(slug);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 my-4">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {visibleItems.map((brand) => {
          const isActive = selected === brand.slug;
          return (
            <button
              key={brand.id}
              onClick={() => handleSelect(brand.slug)}
              aria-pressed={isActive}
              aria-label={brand.label}
              className={`flex items-center justify-center h-[57px] px-5 rounded-[15px] border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#193495] ${
                isActive
                  ? "border-[#1a2530] bg-white shadow-md"
                  : "border-black bg-white hover:border-[#193495] hover:shadow-sm"
              }`}
            >
              <span className="flex items-center justify-center" style={{ width: 100, height: 36 }}>
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.label}
                    style={{ maxWidth: 100, maxHeight: 36, objectFit: "contain", display: "block" }}
                  />
                ) : (
                  <span className="font-['Lato'] text-[14px] font-semibold text-[#193495]">
                    {brand.label}
                  </span>
                )}
              </span>
            </button>
          );
        })}

        {hasMore && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="flex items-center justify-center h-[57px] w-[57px] rounded-[15px] border-2 border-black bg-white text-[22px] text-black hover:border-[#193495] transition-colors focus:outline-none"
            aria-label="Show all brands"
          >
            ...
          </button>
        )}

        {hasMore && expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="flex items-center justify-center h-[57px] w-[57px] rounded-[15px] border-2 border-black bg-white text-[22px] text-black hover:border-[#193495] transition-colors focus:outline-none"
            aria-label="Collapse brands"
          >
            ...
          </button>
        )}
      </div>
    </div>
  );
};

export default BrandChips;
