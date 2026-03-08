import React, { useEffect, useState } from "react";

const ProductsFilterPanel = ({
  categories = [],
  initialFilters,
  onApply,
  onReset,
  isLoadingCategories,
}) => {
  const [category, setCategory] = useState(initialFilters?.category || "");
  const [minPrice, setMinPrice] = useState(initialFilters?.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(initialFilters?.maxPrice || "");

  useEffect(() => {
    setCategory(initialFilters?.category || "");
    setMinPrice(initialFilters?.minPrice || "");
    setMaxPrice(initialFilters?.maxPrice || "");
  }, [initialFilters]);

  const handleApply = () => {
    onApply?.({
      category,
      minPrice: minPrice === "" ? "" : Number(minPrice),
      maxPrice: maxPrice === "" ? "" : Number(maxPrice),
    });
  };

  const handleReset = () => {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    onReset?.();
  };

  return (
    <aside className="w-[284px] flex-shrink-0 bg-white flex flex-col gap-6 py-6 pr-6">
      <div className="flex flex-col gap-3 pb-5">
        <p className="text-[22px] font-semibold text-black font-['Lato']">Category</p>
        <div className="flex flex-col gap-3 pl-1">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={category === ""}
              onChange={() => setCategory("")}
              className="w-4 h-4"
            />
            <span className="text-black text-lg font-['Lato'] select-none">All</span>
          </label>

          {isLoadingCategories && (
            <span className="text-[#675e5e] text-base font-['Lato']">Loading categories...</span>
          )}

          {!isLoadingCategories &&
            categories.map((item) => (
              <label key={item._id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  checked={category === item.slug}
                  onChange={() => setCategory(item.slug)}
                  className="w-4 h-4"
                />
                <span className="text-black text-lg font-['Lato'] select-none">{item.name}</span>
              </label>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-5">
        <p className="text-[22px] font-semibold text-black font-['Lato']">Price Range</p>
        <div className="flex flex-col gap-3 pl-1">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min price"
            min="0"
            className="w-full h-[42px] px-3 rounded-[8px] border border-gray-300 outline-none focus:border-[#193495] font-['Lato']"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price"
            min="0"
            className="w-full h-[42px] px-3 rounded-[8px] border border-gray-300 outline-none focus:border-[#193495] font-['Lato']"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <button
          onClick={handleReset}
          className="text-[#193495] text-base font-['Lato'] hover:underline focus:outline-none"
        >
          Reset
        </button>
        <button
          onClick={handleApply}
          className="bg-[#193495] text-white text-sm font-['Lato'] font-medium px-5 py-1.5 rounded-[5px] hover:bg-[#1030b0] transition-colors focus:outline-none"
        >
          Apply
        </button>
      </div>
    </aside>
  );
};

export default ProductsFilterPanel;
