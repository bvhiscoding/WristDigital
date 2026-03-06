import React, { useState } from "react";
import ProductCard from "../ProductsPage/ProductCard";
import { allAccessories } from "./accessoriesData";

const ITEMS_PER_PAGE_OPTIONS = [9, 12, 24];

// Dropdown – mirrors the ProductsGrid Dropdown
const Dropdown = ({ label, value, options, onSelect }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[20px] font-['Lato'] focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="font-semibold text-black">{label}</span>
        <span className="text-[#675e5e]">{value}</span>
        <svg
          className="w-4 h-4 text-black rotate-90"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul
          className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-20 min-w-[180px] font-['Lato'] text-[16px]"
          role="listbox"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                opt === value ? "text-[#193495] font-semibold" : "text-black"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Pagination – mirrors the ProductsGrid Pagination
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages =
    totalPages <= 5
      ? pages
      : currentPage <= 3
        ? [...pages.slice(0, 4), "...", totalPages]
        : currentPage >= totalPages - 2
          ? [1, "...", ...pages.slice(totalPages - 4)]
          : [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];

  return (
    <nav className="flex items-center gap-4" aria-label="Pagination">
      <div className="flex items-center gap-4">
        {visiblePages.map((page, i) =>
          page === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="text-[24px] text-black font-['Lato'] select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`relative w-[45px] h-[45px] flex items-center justify-center text-[24px] font-['Lato'] rounded-full transition-colors focus:outline-none
                ${
                  page === currentPage
                    ? "text-[#193495] font-bold"
                    : "text-black hover:text-[#193495]"
                }`}
            >
              {page === currentPage && (
                <span className="absolute inset-0 rounded-full border-2 border-[#193495]" />
              )}
              {page}
            </button>
          ),
        )}
      </div>

      {/* Up/Down arrows */}
      <div className="flex flex-col ml-2">
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          aria-label="Next page"
          className="focus:outline-none hover:text-[#193495]"
        >
          <svg className="w-5 h-4" viewBox="0 0 24 16" fill="none">
            <path d="M12 3l9 9H3l9-9z" fill="currentColor" />
          </svg>
        </button>
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          aria-label="Previous page"
          className="focus:outline-none hover:text-[#193495]"
        >
          <svg className="w-5 h-4" viewBox="0 0 24 16" fill="none">
            <path d="M12 13l-9-9h18l-9 9z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

/**
 * Main accessories grid with sort, items-per-page, and pagination.
 * Reuses ProductCard from ProductsPage (brandLogo omitted for accessories).
 */
const AccessoriesGrid = () => {
  const [sortBy, setSortBy] = useState("Price: High to Low");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const sortOptions = [
    "Price: High to Low",
    "Price: Low to High",
    "Newest",
    "Best Rating",
  ];

  const sorted = [...allAccessories].sort((a, b) => {
    const pa = parseInt(a.price.replace(/\D/g, ""), 10);
    const pb = parseInt(b.price.replace(/\D/g, ""), 10);
    if (sortBy === "Price: High to Low") return pb - pa;
    if (sortBy === "Price: Low to High") return pa - pb;
    if (sortBy === "Best Rating") return parseFloat(b.rating) - parseFloat(a.rating);
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paged = sorted.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="flex flex-col gap-4 flex-grow min-w-0">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-1">
        <span className="text-[20px] font-semibold text-black font-['Lato']">
          Filter by
        </span>
        <div className="flex flex-wrap items-center gap-6 ml-auto">
          <Dropdown
            label="Sort by:"
            value={sortBy}
            options={sortOptions}
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {paged.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            image={item.image}
          />
        ))}
      </div>

      {/* Pagination */}
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

export default AccessoriesGrid;
