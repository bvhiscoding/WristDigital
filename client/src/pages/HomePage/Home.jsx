import React from "react";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import BestSellerSection from "./BestSellerSection.jsx";
import SaleSection from "./SaleSection.jsx";
import AccessoriesSection from "./AccessoriesSection.jsx";
import BlogSection from "./BlogSection.jsx";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* ── 1. Top Section: Hero Banner with main promotional content ── */}
      <HeroSection />

      {/* ── 2. Information Section: About the brand/company ── */}
      <AboutSection />

      {/* ── 3. Product List: Best Selling Items ── */}
      <BestSellerSection />

      {/* ── 4. Promotional List: Items currently on Sale ── */}
      <SaleSection />

      {/* ── 5. Product Category: Accessories ── */}
      <AccessoriesSection />

      {/* ── 6. Content Section: Latest Blogs and Articles ── */}
      <BlogSection />
    </div>
  );
}
