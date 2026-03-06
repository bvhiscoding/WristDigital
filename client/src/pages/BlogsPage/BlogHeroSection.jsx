import React from "react";
import { heroBgImage, heroPost } from "./blogsData";

/**
 * BlogHeroSection
 *
 * Layout:
 * Hero image spans top part of screen.
 * Blue info card sits over the hero image, aligned to the left side within a max-w constraint container.
 */
const BlogHeroSection = () => {
  return (
    <section
      className="relative w-full bg-white md:mb-20"
      aria-label="Featured blog post"
    >
      {/* Account for fixed 100px header */}
      <div className="h-[100px]" aria-hidden="true" />

      {/* Background image container and Info Card Wrapper */}
      <div className="relative w-full min-h-[500px] md:h-[720px] flex items-center bg-gray-100">
        <img
          src={heroBgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        {/* Info Card Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[86px] py-10 md:py-0">
          <div className="bg-[#eaf0ff] rounded-[5px] flex flex-col justify-center max-w-[729px] w-full p-6 sm:p-8 md:py-[48px] md:px-[52px]">
            {/* Category label */}
            <p className="text-[#193495] font-['Lato'] font-bold text-[15px] leading-normal mb-1">
              {heroPost.category}
            </p>

            {/* Underline separator */}
            <div className="w-[129px] border-t border-[#193495] mb-4" />

            {/* Title */}
            <h1 className="font-['Lato'] font-bold text-[#0c1950] text-[22px] sm:text-[24px] md:text-[27px] leading-normal mb-4 w-full md:max-w-[592px]">
              {heroPost.title}
            </h1>

            {/* Excerpt */}
            <p className="font-['Lato'] font-medium text-[#0c1950] text-[15px] md:text-[16px] leading-normal mb-8 md:mb-10 w-full md:max-w-[627px]">
              {heroPost.excerpt}
            </p>

            {/* Date + Read More row */}
            <div className="flex items-center justify-between mt-auto w-full md:max-w-[627px]">
              <span className="font-['Lato'] font-medium text-[#193495] text-[15px]">
                {heroPost.date}
              </span>
              <a
                href={heroPost.readMoreLink}
                aria-label="Read more about featured post"
                className="flex items-center gap-1 font-['Lato'] text-[#193495] text-[16px] hover:opacity-80 transition-opacity"
              >
                Read More
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M5.5 12.5L10.5 7.5L5.5 2.5"
                    stroke="#193495"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
