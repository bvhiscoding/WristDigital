import React from "react";
import ProductCard from "../ProductsPage/ProductCard";
import { allProducts } from "../ProductsPage/productsData";

const WishlistPage = () => {
  // Let's pretend the first 3 products are in wishlist
  const wishlistedProducts = allProducts.slice(0, 3).map(p => ({ ...p, initialWishlist: true }));

  return (
    <div className="w-full min-h-screen bg-white pb-20 pt-[120px] lg:pt-[151px]">
      <div className="max-w-[1211px] mx-auto px-5 xl:px-0">
        {/* Header: Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 lg:mb-16">
          <h1 className="text-[28px] md:text-[36px] font-[900] text-[#193495] uppercase tracking-wide">
            MY WISHLIST
          </h1>
        </div>

        {wishlistedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[20px] font-['Lato'] text-[#0c1950]/60">
            Your wishlist is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
