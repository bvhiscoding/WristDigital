import React from "react";
import SearchSection from "./SearchSection";
import CategoryChips from "./CategoryChips";
import FilterPanel from "./FilterPanel";
import AccessoriesGrid from "./AccessoriesGrid";

/**
 * Accessories Page
 * Implements the Figma design for node 146-591
 * (header + footer are excluded — handled by Layout.jsx)
 */
export default function AccessoriesPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-['Lato',sans-serif]">

      {/* ── 2. Search Banner ── */}
      <SearchSection />

      {/* ── 3. Category Filter Chips ── */}
      <CategoryChips />

      {/* ── 4. Filter + Accessories Area ── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 flex pb-16">
        {/* Left: Filter sidebar */}
        <FilterPanel />

        {/* Right: Accessories grid */}
        <AccessoriesGrid />
      </section>
    </div>
  );
}
