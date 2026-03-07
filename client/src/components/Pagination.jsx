import React from "react";

/**
 * Pagination control.
 * Props:
 *   currentPage  {number}   - Currently active page (1-based)
 *   totalPages   {number}   - Total number of pages
 *   onPageChange {function} - Called with new page number when user clicks
 */
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

export default Pagination;
