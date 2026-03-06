import React from "react";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import BrandChips from "./BrandChips";
import FilterPanel from "./FilterPanel";
import ProductsGrid from "./ProductsGrid";

/**
 * Products Page
 * Implements the Figma design for node 144:48
 * (header + footer are excluded — handled by Layout.jsx)
 */
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
        {/* Left: Filter sidebar */}
        <FilterPanel />

        {/* Right: Products grid */}
        <ProductsGrid />
      </section>
    </div>
  );
}
