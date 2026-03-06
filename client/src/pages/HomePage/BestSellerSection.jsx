import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "ULTRA 3",
    price: "26,500,000",
    rating: "5.0",
    reviews: "520",
    image: "/HomePage/BestSellerSection/main-watch.png",
  },
  {
    id: 3,
    name: "CLASSIC ROUND",
    price: "12,990,000",
    rating: "4.8",
    reviews: "450",
    image: "/HomePage/BestSellerSection/right-watch.png",
  },
  {
    id: 2,
    name: "SERIES 9",
    price: "16,990,000",
    rating: "4.9",
    reviews: "1,200",
    image: "/HomePage/BestSellerSection/left-watch.png",
  },
];

const BestSellerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // "left" or "right"

  // Auto-switch products every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]); // Resets the timer whenever the slide changes (even manually)

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const mainProduct = products[currentIndex];
  // Calculate left and right products relative to the main one
  const leftProduct = products[(currentIndex - 1 + products.length) % products.length];
  const rightProduct = products[(currentIndex + 1) % products.length];

  const slideAnimation = direction === "right" ? "animate-slide-from-right" : "animate-slide-from-left";
  const sideSlideAnimation = direction === "right" ? "animate-side-from-right" : "animate-side-from-left";

  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[57.75rem] overflow-hidden flex justify-center py-[4rem] lg:py-[6rem] font-['Lato',sans-serif]">
      {/* Custom Keyframes for Animations */}
      <style>
        {`
          @keyframes slideFromRight {
            0% { opacity: 0; transform: translateX(80px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideFromLeft {
            0% { opacity: 0; transform: translateX(-80px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-from-right {
            animation: slideFromRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          .animate-slide-from-left {
            animation: slideFromLeft 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }

          @keyframes sideSlideFromRight {
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 0.8; transform: translateX(0); }
          }
          @keyframes sideSlideFromLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 0.8; transform: translateX(0); }
          }
          .animate-side-from-right {
            animation: sideSlideFromRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          .animate-side-from-left {
            animation: sideSlideFromLeft 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
        `}
      </style>

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Snow Background"
          className="w-full h-full object-cover"
          src="/HomePage/BestSellerSection/background-image.png"
        />
      </div>
      <div className="absolute inset-0 bg-[#08123A] bg-opacity-[0.75] w-full h-full mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent w-full h-full" />

      {/* Main Container */}
      <div className="relative w-full max-w-[90rem] flex flex-col items-center justify-center z-10 px-4">
        
        {/* BEST SELLER Ribbon */}
        <div 
          className="absolute left-[1rem] lg:left-[5rem] top-[-4rem] lg:top-[-6rem] w-[5rem] lg:w-[8rem] h-[8rem] lg:h-[12rem] z-20 bg-[#E8EDF6] flex justify-center pt-[2rem] lg:pt-[3rem] drop-shadow-md" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
        >
          <div className="text-center text-[#0A1640] font-extrabold text-[1rem] lg:text-[1.35rem] leading-[1.2]">
            BEST <br />
            SELLER
          </div>
        </div>

        {/* Product Title Center Top */}
        <div 
          key={`title-${mainProduct.id}`}
          className={`flex items-center justify-center gap-[0.75rem] lg:gap-[1rem] z-10 mb-[2rem] lg:mb-[3rem] ${slideAnimation}`}
        >
          <img
            alt="Apple Logo"
            className="w-[1.5rem] lg:w-[2.2rem] h-auto object-contain brightness-0 invert"
            src="/HomePage/HeroSection/apple-log.svg"
          />
          <h2 className="text-white text-[1.5rem] lg:text-[2rem] tracking-[0.05em] whitespace-nowrap mt-1">
            <span className="font-bold">WATCH</span>{" "}
            <span className="font-light">{mainProduct.name}</span>
          </h2>
        </div>

        {/* Product Images & Arrows Container */}
        <div className="relative flex items-center justify-center w-full max-w-[80rem] h-[20rem] lg:h-[28rem] mb-[2rem] lg:mb-[3rem] z-10">
          
          {/* Left Watch (Absolute) */}
          <div className="absolute left-0 lg:left-[2%] xl:left-[5%] hidden md:block">
            <img
              key={`left-${leftProduct.id}`}
              alt="Left Watch"
              className={`w-[12rem] lg:w-[15rem] h-auto object-contain opacity-80 drop-shadow-2xl ${sideSlideAnimation}`}
              src={leftProduct.image}
            />
          </div>

          {/* Core Slider: Arrow - Main Watch - Arrow */}
          <div className="flex items-center justify-center gap-[2rem] sm:gap-[3rem] lg:gap-[5rem] z-20 w-full md:w-auto">
            <button
              onClick={handlePrev}
              className="z-20 hover:scale-110 transition-transform focus:outline-none flex-shrink-0"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] lg:w-[2.5rem] h-auto">
                <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative">
              <img
                key={`main-${mainProduct.id}`}
                alt="Main Watch"
                className={`w-[16rem] md:w-[22rem] lg:w-[26rem] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] ${slideAnimation}`}
                src={mainProduct.image}
              />
            </div>
            <button
              onClick={handleNext}
              className="z-20 hover:scale-110 transition-transform focus:outline-none flex-shrink-0"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] lg:w-[2.5rem] h-auto">
                <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right Watch (Absolute) */}
          <div className="absolute right-0 lg:right-[2%] xl:right-[5%] hidden md:block">
            <img
              key={`right-${rightProduct.id}`}
              alt="Right Watch"
              className={`w-[12rem] lg:w-[15rem] h-auto object-contain opacity-80 drop-shadow-2xl ${sideSlideAnimation}`}
              src={rightProduct.image}
            />
          </div>

        </div>

        {/* Price & Rating */}
        <div 
          key={`price-${mainProduct.id}`}
          className={`flex flex-col items-center gap-[0.5rem] z-20 mb-[2rem] ${slideAnimation}`}
        >
          <p className="text-white text-[2rem] lg:text-[2.5rem] font-semibold flex items-center leading-none tracking-wide">
            {mainProduct.price}
            <span className="underline decoration-solid underline-offset-4 ml-1">đ</span>
          </p>
          <div className="flex items-center gap-2 mt-[0.5rem]">
            <img
              src="/HomePage/BestSellerSection/star-icon.svg"
              alt="Star"
              className="w-[1.25rem] lg:w-[1.5rem] h-[1.25rem] lg:h-[1.5rem]"
            />
            <p className="text-[#f1f1f1] text-[1rem] lg:text-[1.125rem]">
              {mainProduct.rating} ({mainProduct.reviews} reviews)
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[1rem] lg:gap-[1.5rem] z-20">
          <button className="w-[12rem] lg:w-[13rem] h-[3.2rem] lg:h-[3.5rem] border-[1.5px] border-white rounded-full text-white text-[1rem] lg:text-[1.125rem] font-medium hover:bg-white/10 transition-colors focus:outline-none">
            Add to Cart
          </button>
          <button className="w-[12rem] lg:w-[13rem] h-[3.2rem] lg:h-[3.5rem] bg-[#E8EDF6] rounded-full text-[#0A1640] text-[1rem] lg:text-[1.125rem] font-bold hover:bg-white transition-colors focus:outline-none shadow-lg">
            Buy Now
          </button>
        </div>

        {/* View Detail Link */}
        <a
          href="#view-detail"
          className="mt-[3rem] lg:mt-0 lg:absolute lg:bottom-0 right-0 lg:right-[5rem] flex items-center gap-[0.5rem] text-white text-[0.875rem] lg:text-[1rem] font-light hover:opacity-80 transition-opacity z-20 group"
        >
          View Detail
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default BestSellerSection;
