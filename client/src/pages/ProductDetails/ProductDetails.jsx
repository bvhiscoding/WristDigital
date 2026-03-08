import React from "react";
import ProductInforSection from "./ProductInforSection";
import ProductReviewSection from "./ProductReviewSection";
import ProductRelatedSection from "./ProductRelatedSection";

export default function ProductDetails() {
  return (
    <div className="flex w-full flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      {/* ── 1. Top Section: Product Name, Price, Images, Add to Cart (Figma: Product Info) ── */}
      <ProductInforSection />

      {/* ── 2. Middle Section: Customer Reviews & Ratings (Figma: Product Reviews) ── */}
      <ProductReviewSection />

      {/* ── 3. Bottom Section: Related/Suggested Products (Figma: Related Products) ── */}
      <ProductRelatedSection />
    </div>
  );
}
