import React, { useState } from "react";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import BrandChips from "./BrandChips";
import ProductsFilterPanel from "./ProductsFilterPanel";
import ProductsGrid from "./ProductsGrid";
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
} from "../../features/catalog/catalogApi";

export default function ProductsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const { data: brandsResponse } = useGetBrandsQuery();
  const { data: categoriesResponse, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();

  const brands = brandsResponse?.data || [];
  const categories = categoriesResponse?.data || [];

  const appliedFilters = {
    search,
    brand,
    category: filters.category,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      {/* ── 1. Hero / Intro Banner ── */}
      <HeroSection />

      {/* ── 2. Search Banner ── */}
      <SearchSection
        value={searchInput}
        onChange={setSearchInput}
        onSubmit={() => setSearch(searchInput.trim())}
      />

      {/* ── 3. Brand Filter Chips ── */}
      <BrandChips
        onBrandChange={setBrand}
        brands={brands}
      />

      {/* ── 4. Filter + Products Area ── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 flex pb-16">
        <ProductsFilterPanel
          categories={categories}
          isLoadingCategories={isLoadingCategories}
          initialFilters={filters}
          onApply={setFilters}
          onReset={() =>
            setFilters({
              category: "",
              minPrice: "",
              maxPrice: "",
            })
          }
        />
        <ProductsGrid queryFilters={appliedFilters} />
      </section>
    </div>
  );
}
