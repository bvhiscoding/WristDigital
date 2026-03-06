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
      <HeroSection />
      <AboutSection />
      <BestSellerSection />
      <SaleSection />
      <AccessoriesSection />
      <BlogSection />
    </div>
  );
}
