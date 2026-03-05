import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import BestSellerSection from "./BestSellerSection";
import SaleSection from "./SaleSection";
import AccessoriesSection from "./AccessoriesSection";
import BlogSection from "./BlogSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <BestSellerSection />
      <SaleSection />
      <AccessoriesSection />
      <BlogSection />
    </div>
  );
}
