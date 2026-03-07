import React from "react";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import BrandChips from "./BrandChips";
import FilterPanel from "../../components/FilterPanel";
import ProductsGrid from "./ProductsGrid";

const FILTER_GROUPS = [
  { title: "Size", labels: ["Men's", "Women's", "Kids'"] },
  { title: "Bezel Material", labels: ["Aluminum", "Stainless Steel", "Titanium"] },
  { title: "Shape", labels: ["Round", "Square", "Rectangular"] },
  { title: "Water Resistance", labels: ["5 ATM", "10 ATM", "IP67", "IP68", "ISO 22810"] },
];

export default function ProductsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      {/* ── 1. Hero / Intro Banner ── */}
      <HeroSection />

      {/* ── 2. Search Banner ── */}
      <SearchSection />

      {/* ── 3. Brand Filter Chips ── */}
      <BrandChips />

      {/* ── 4. Filter + Products Area ── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 flex pb-16">
        <FilterPanel groups={FILTER_GROUPS} />
        <ProductsGrid />
      </section>
    </div>
  );
}
