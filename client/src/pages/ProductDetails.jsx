import React from "react";
import ProductInforSection from "./ProductDetails/ProductInforSection";
import ProductReviewSection from "./ProductDetails/ProductReviewSection";
import ProductRelatedSection from "./ProductDetails/ProductRelatedSection";

export default function ProductDetails() {
  return (
    <div className="flex w-full flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      <ProductInforSection />
      <ProductReviewSection />
      <ProductRelatedSection />
    </div>
  );
}
