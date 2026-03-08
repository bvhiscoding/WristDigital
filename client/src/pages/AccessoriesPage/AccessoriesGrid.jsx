import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Dropdown from "../../components/Dropdown";
import Pagination from "../../components/Pagination";
import { useGetProductsQuery } from "../../features/catalog/catalogApi";
import { getBrandLogo } from "../ProductsPage/brandLogoMap";

const ITEMS_PER_PAGE_OPTIONS = [9, 12, 24];

const SORT_OPTIONS = [
  "Price: High to Low",
  "Price: Low to High",
  "Newest",
  "Best Rating",
];

const SORT_TO_API = {
  "Price: High to Low": "price_desc",
  "Price: Low to High": "price_asc",
  Newest: "newest",
  "Best Rating": "rating_desc",
};

const AccessoriesGrid = ({ accessoryCategorySlug }) => {
  const [sortBy, setSortBy] = useState("Price: High to Low");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isFetching, isError } = useGetProductsQuery(
    {
      category: accessoryCategorySlug,
      page: currentPage,
      limit: itemsPerPage,
      sort: SORT_TO_API[sortBy],
    },
    {
      skip: !accessoryCategorySlug,
    },
  );

  const items = data?.data?.items ?? [];
  const pagination = data?.data?.pagination;
  const totalPages = pagination?.totalPages ?? 1;

  const mappedAccessories = items.map((item) => ({
    id: item._id,
    slug: item.slug,
    name: item.name,
    price: item.displayPrice ?? item.discountPrice ?? item.price,
    rating: Number(item.averageRating || 0).toFixed(1),
    reviews: item.numReviews ?? 0,
    image: item.images?.[0] || "/HomePage/AccessoriesSection/watch-straps.png",
    brandName: item.brand?.name,
    brandLogo: getBrandLogo(item.brand),
    detailUrl: "/product-details",
  }));

  return (
    <div className="flex flex-col gap-4 flex-grow min-w-0">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-1">
        <span className="text-[20px] font-semibold text-black font-['Lato']">Filter by</span>
        <div className="flex flex-wrap items-center gap-6 ml-auto">
          <Dropdown
            label="Sort by:"
            value={sortBy}
            options={SORT_OPTIONS}
            onSelect={(v) => { setSortBy(v); setCurrentPage(1); }}
          />
          <Dropdown
            label="Items per page:"
            value={String(itemsPerPage)}
            options={ITEMS_PER_PAGE_OPTIONS.map(String)}
            onSelect={(v) => { setItemsPerPage(Number(v)); setCurrentPage(1); }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {(isLoading || isFetching) && (
          <p className="col-span-full text-center text-[#675e5e] font-['Lato'] text-[18px] py-8">
            Loading accessories...
          </p>
        )}

        {!isLoading && !isFetching && isError && (
          <p className="col-span-full text-center text-red-500 font-['Lato'] text-[18px] py-8">
            Failed to load accessories. Please try again.
          </p>
        )}

        {!accessoryCategorySlug && (
          <p className="col-span-full text-center text-[#675e5e] font-['Lato'] text-[18px] py-8">
            Accessories category is not available. Please seed data first.
          </p>
        )}

        {accessoryCategorySlug && !isLoading && !isFetching && !isError && mappedAccessories.length === 0 && (
          <p className="col-span-full text-center text-[#675e5e] font-['Lato'] text-[18px] py-8">
            No accessories found.
          </p>
        )}

        {accessoryCategorySlug && !isLoading && !isFetching && !isError && mappedAccessories.map((item) => (
          <ProductCard key={item.id} {...item} />
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
