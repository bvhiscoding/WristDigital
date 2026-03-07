import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Dropdown from "../../components/Dropdown";
import Pagination from "../../components/Pagination";
import { allProducts } from "./productsData";

const ITEMS_PER_PAGE_OPTIONS = [9, 12, 24];

const SORT_OPTIONS = [
  "Price: High to Low",
  "Price: Low to High",
  "Newest",
  "Best Rating",
];

const ProductsGrid = () => {
  const [sortBy, setSortBy] = useState("Price: High to Low");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const sorted = [...allProducts].sort((a, b) => {
    const pa = parseInt(a.price.replace(/\D/g, ""), 10);
    const pb = parseInt(b.price.replace(/\D/g, ""), 10);
    if (sortBy === "Price: High to Low") return pb - pa;
    if (sortBy === "Price: Low to High") return pa - pb;
    if (sortBy === "Best Rating")
      return parseFloat(b.rating) - parseFloat(a.rating);
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paged = sorted.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="flex flex-col gap-4 flex-grow min-w-0">
      {/* Filter and Sorting Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-1">
        <span className="text-[20px] font-semibold text-black font-['Lato']">
          Filter by
        </span>
        <div className="flex flex-wrap items-center gap-6 ml-auto">
          <Dropdown
            label="Sort by:"
            value={sortBy}
            options={SORT_OPTIONS}
            onSelect={(v) => {
              setSortBy(v);
              setCurrentPage(1);
            }}
          />
          <Dropdown
            label="Items per page:"
            value={String(itemsPerPage)}
            options={ITEMS_PER_PAGE_OPTIONS.map(String)}
            onSelect={(v) => {
              setItemsPerPage(Number(v));
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Product List Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {paged.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Controls at bottom */}
      <div className="flex justify-end pt-6 pb-2">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductsGrid;
