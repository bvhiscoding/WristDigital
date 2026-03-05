import React, { useState } from "react";

// Assets
const imgRectangle43 =
  "http://localhost:3845/assets/4e4a16678a6fc279e5f41080668eaa3b62306c86.png"; // background image
const imgRectangle45 =
  "http://localhost:3845/assets/0db496073fd56002f672f5835bcc2a4f646ad085.png"; // main watch
const imgRectangle46 =
  "http://localhost:3845/assets/528c0b079d65cc48aa793cd0517123165a07dea8.png"; // right watch
const imgRectangle47 =
  "http://localhost:3845/assets/ed05bbef5ba9f94620f92a5d36ea64ca7b65810a.png"; // left watch
const imgRectangle =
  "http://localhost:3845/assets/dd76937ca11dcdf238d0009f08cf3ee04603f3de.png"; // apple logo
const imgEllipse22 =
  "http://localhost:3845/assets/263c960a0159a1c0120c8bcf038c8fdad94c8a9c.svg"; // background glow behind main watch
const imgRectangle214 =
  "http://localhost:3845/assets/705a0ca32745d621b21161166891b6ed0463c996.svg"; // best seller ribbon
const imgFrame =
  "http://localhost:3845/assets/2d795e7096d6cfd9ac0b664a9c77f022bfd10836.svg"; // right arrow
const imgFrame1 =
  "http://localhost:3845/assets/659da1d5d2562f906922b7e4628e23a08a5b1933.svg"; // left arrow
const imgFrame2 =
  "http://localhost:3845/assets/5fe717e0b8553948f59b109762b003708c0704f7.svg"; // view detail arrow
const imgFrame3 =
  "http://localhost:3845/assets/b14e44f85378782edfc8b09ffb242ee3c7f6a454.svg"; // star icon

const products = [
  {
    id: 1,
    name: "ULTRA 3",
    price: "26,500,000",
    rating: "5.0",
    reviews: "520",
    image: imgRectangle45,
  },
  {
    id: 2,
    name: "SERIES 9",
    price: "16,990,000",
    rating: "4.9",
    reviews: "1,200",
    image: imgRectangle46,
  },
  {
    id: 3,
    name: "SE (2ND GEN)",
    price: "6,990,000",
    rating: "4.8",
    reviews: "890",
    image: imgRectangle47,
  },
];

const BestSellerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const mainProduct = products[currentIndex];
  const leftProduct =
    products[(currentIndex - 1 + products.length) % products.length];
  const rightProduct = products[(currentIndex + 1) % products.length];

  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[57.75rem] overflow-hidden flex justify-center py-[6rem] lg:py-[5rem] font-['Lato',sans-serif]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Snow Background"
          className="w-full h-full object-cover"
          src={imgRectangle43}
        />
      </div>
      <div className="absolute inset-0 bg-[#050D2B] bg-opacity-[0.71] w-full h-full" />

      {/* Main Container */}
      <div className="relative w-full max-w-[90rem] flex flex-col items-center justify-center z-10">
        {/* Left/Right Gradients */}
        <div className="absolute left-0 top-0 w-[33.1875rem] h-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(18,36,113,0.01)] pointer-events-none hidden lg:block" />
        <div className="absolute right-0 top-0 w-[33.1875rem] h-full bg-gradient-to-l from-[rgba(0,0,0,0.5)] to-[rgba(18,36,113,0.01)] pointer-events-none hidden lg:block" />

        {/* BEST SELLER Ribbon */}
        <div className="absolute left-[1.25rem] lg:left-[5.1875rem] top-[-6rem] lg:top-[-5rem] w-[7rem] lg:w-[11.4375rem] h-[9rem] lg:h-[14.875rem] z-20 flex justify-center pt-[2rem] lg:pt-[3.9375rem]">
          <img
            alt="Ribbon"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            src={imgRectangle214}
          />
          <div className="relative z-10 text-center text-[#0c1950] font-extrabold text-[1.2rem] lg:text-[2.5rem] leading-tight">
            BEST <br />
            SELLER
          </div>
        </div>

        {/* Center Glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[38.75rem] h-[31.25rem] pointer-events-none mix-blend-screen z-0 hidden lg:block">
          <img
            alt=""
            className="w-[200%] h-[200%] -ml-[50%] -mt-[30%] max-w-none"
            src={imgEllipse22}
          />
        </div>

        {/* Product Title Center Top */}
        <div className="flex items-center gap-[0.9375rem] z-10 transition-all duration-300 mb-[2rem] lg:mb-[4rem]">
          <img
            alt="Apple Logo"
            className="w-[3.125rem] lg:w-[4.625rem] h-[3.125rem] lg:h-[4.625rem] object-contain"
            src={imgRectangle}
          />
          <h2 className="text-white text-[1.5rem] lg:text-[2rem] tracking-[0.05em] whitespace-nowrap">
            <span className="font-bold">WATCH</span>{" "}
            <span className="font-light">{mainProduct.name}</span>
          </h2>
        </div>

        {/* Product Images & Arrows Container */}
        <div className="relative flex items-center justify-center w-full max-w-[60rem] h-[18rem] lg:h-[26rem] mb-[2rem] lg:mb-[4rem] z-10">
          <img
            key={`left-${leftProduct.id}`}
            alt="Left Watch"
            className="hidden lg:block absolute left-0 w-[15rem] lg:w-[19.1875rem] h-auto object-contain transition-all duration-500 ease-in-out opacity-80"
            src={leftProduct.image}
          />
          <img
            key={`main-${mainProduct.id}`}
            alt="Main Watch"
            className="relative w-full max-w-[18rem] lg:w-[30.75rem] lg:max-w-none h-auto object-contain transition-all duration-500 ease-in-out scale-100 z-10"
            src={mainProduct.image}
          />
          <img
            key={`right-${rightProduct.id}`}
            alt="Right Watch"
            className="hidden lg:block absolute right-0 w-[15rem] lg:w-[19rem] h-auto object-contain transition-all duration-500 ease-in-out opacity-80"
            src={rightProduct.image}
          />

          {/* Arrow Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[1rem] lg:left-[5rem] xl:-left-[4rem] z-20 w-[2.5rem] lg:w-[3.75rem] h-[2.5rem] lg:h-[3.75rem] hover:scale-110 transition-transform focus:outline-none"
          >
            <img
              alt="Previous"
              className="w-full h-full object-contain rotate-180"
              src={imgFrame1}
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[1rem] lg:right-[5rem] xl:-right-[4rem] z-20 w-[2.5rem] lg:w-[3.75rem] h-[2.5rem] lg:h-[3.75rem] hover:scale-110 transition-transform focus:outline-none"
          >
            <img
              alt="Next"
              className="w-full h-full object-contain"
              src={imgFrame}
            />
          </button>
        </div>

        {/* Price & Rating */}
        <div className="flex flex-col items-center gap-2 z-20 transition-all duration-300 mb-[1.5rem] lg:mb-[2.5rem]">
          <p className="text-white text-[1.75rem] lg:text-[2.25rem] font-semibold flex items-start leading-none">
            {mainProduct.price}
            <span className="underline decoration-solid underline-offset-4">
              đ
            </span>
          </p>
          <div className="flex items-center gap-2 mt-[0.3125rem]">
            <img
              src={imgFrame3}
              alt="Star"
              className="w-[1.25rem] lg:w-[1.875rem] h-[1.25rem] lg:h-[1.875rem]"
            />
            <p className="text-[#f7f7f7] text-[1rem] lg:text-[1.25rem]">
              {mainProduct.rating} ({mainProduct.reviews} reviews)
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 z-20">
          <button className="w-[12rem] lg:w-[11.75rem] h-[3.125rem] lg:h-[3.625rem] border-2 border-[#dee4f4] rounded-[1.875rem] text-[#dee4f4] text-[1.125rem] lg:text-[1.25rem] font-semibold hover:bg-white/10 transition-colors focus:outline-none">
            Add to Cart
          </button>
          <button className="w-[12rem] lg:w-[11.75rem] h-[3.125rem] lg:h-[3.625rem] bg-[#dee4f4] rounded-[1.875rem] text-[#193495] text-[1.125rem] lg:text-[1.25rem] font-bold hover:bg-white transition-colors focus:outline-none">
            Buy Now
          </button>
        </div>

        {/* View Detail Link */}
        <a
          href="#view-detail"
          className="mt-[2.5rem] lg:mt-0 lg:absolute lg:bottom-[2.5rem] right-[1.875rem] lg:right-[8.4375rem] flex items-center gap-3 text-white text-[1rem] lg:text-[1.25rem] hover:opacity-80 transition-opacity z-20 group"
        >
          View Detail
          <img
            alt=""
            className="w-[0.875rem] lg:w-[1.125rem] h-[0.875rem] lg:h-[1.125rem] group-hover:translate-x-1 transition-transform"
            src={imgFrame2}
          />
        </a>
      </div>
    </section>
  );
};

export default BestSellerSection;
