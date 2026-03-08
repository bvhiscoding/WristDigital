import React from "react";
import SearchSection from "./SearchSection";
import CategoryChips from "./CategoryChips";
import FilterPanel from "../../components/FilterPanel";
import AccessoriesGrid from "./AccessoriesGrid";
import { useGetCategoriesQuery } from "../../features/catalog/catalogApi";

const FILTER_GROUPS = [
  { title: "Type", labels: ["Watch Straps", "Charging Docks", "Screen Guards", "Storage Pouches", "Bundles", "Cables"] },
  { title: "Material", labels: ["Silicone", "Leather", "Stainless Steel", "Nylon", "Tempered Glass"] },
  { title: "Compatibility", labels: ["Apple Watch", "Samsung Galaxy", "Garmin", "Huawei", "Universal"] },
  { title: "Price Range", labels: ["Under 200,000đ", "200,000đ – 500,000đ", "500,000đ – 1,000,000đ", "Over 1,000,000đ"] },
];

export default function AccessoriesPage() {
  const { data: categoriesResponse } = useGetCategoriesQuery();
  const categories = categoriesResponse?.data || [];
  const accessoryCategory = categories.find((item) => {
    const slug = String(item.slug || "").toLowerCase();
    const name = String(item.name || "").toLowerCase();
    return slug.includes("accessor") || name.includes("accessor");
  });

  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      {/* ── 1. Search Banner ── */}
      <SearchSection />

      {/* ── 2. Category Grid + Brand Chips ── */}
      <CategoryChips />

      {/* ── 3. Filter + Accessories Area ── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 flex pb-16">
        <FilterPanel groups={FILTER_GROUPS} />
        <AccessoriesGrid accessoryCategorySlug={accessoryCategory?.slug} />
      </section>
    </div>
  );
}
