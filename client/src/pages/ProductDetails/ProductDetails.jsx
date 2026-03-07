import React from "react";
import ProductInforSection from "./ProductInforSection";
import ProductReviewSection from "./ProductReviewSection";
import ProductRelatedSection from "./ProductRelatedSection";

export default function ProductDetails() {
  return (
    <div className="flex w-full flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      <ProductInforSection />
      <ProductReviewSection />
      <ProductRelatedSection />
    </div>
  );
}