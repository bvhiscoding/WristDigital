import React from "react";
import SaleHeroBanner from "./SaleHeroBanner";
import FlashSaleSection from "./FlashSaleSection";
import BestDealsSection from "./BestDealsSection";

/**
 * SalePage
 * Implements the Figma design for node 154:146 (sale page).
 * Header + Footer are excluded — handled by Layout.jsx.
 *
 * Sections (top → bottom):
 *  1. SaleHeroBanner  — Black Friday 20% OFF hero
 *  2. FlashSaleSection — Apple Watch Series 7 flash sale feature
 *  3. BestDealsSection — 6 product cards grid with countdown
 */
export default function SalePage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      {/* 1. Hero / Black Friday banner */}
      <SaleHeroBanner />

      {/* 2. Flash Sale spotlight */}
      <FlashSaleSection />

      {/* 3. Best Deals grid */}
      <BestDealsSection />
    </div>
  );
}
