import React from "react";
import BlogHeroSection from "./BlogHeroSection";
import TrendingSection from "./TrendingSection";
import ForYouSection from "./ForYouSection";
import LatestBlogsSection from "./LatestBlogsSection";

/**
 * BlogsPage
 * Implements the Figma design for node 154:309 (blogs page).
 * Header + Footer are excluded — handled by Layout.jsx.
 *
 * Sections (top → bottom):
 *  1. BlogHeroSection   — Featured post hero banner
 *  2. TrendingSection   — TRENDING two-column layout
 *  3. ForYouSection     — FOR YOU three articles
 *  4. LatestBlogsSection — LATEST BLOGS grid
 */
export default function BlogsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-['Lato',sans-serif]">
      {/* 1. Hero */}
      <BlogHeroSection />

      {/* 2. Trending */}
      <TrendingSection />

      {/* 3. For You */}
      <ForYouSection />

      {/* 4. Latest Blogs */}
      <LatestBlogsSection />
    </div>
  );
}
