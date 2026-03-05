import React, { useState } from 'react';

// Assets
const imgRectangle43 = "http://localhost:3845/assets/4e4a16678a6fc279e5f41080668eaa3b62306c86.png"; // background image
const imgRectangle45 = "http://localhost:3845/assets/0db496073fd56002f672f5835bcc2a4f646ad085.png"; // main watch
const imgRectangle46 = "http://localhost:3845/assets/528c0b079d65cc48aa793cd0517123165a07dea8.png"; // right watch
const imgRectangle47 = "http://localhost:3845/assets/ed05bbef5ba9f94620f92a5d36ea64ca7b65810a.png"; // left watch
const imgRectangle = "http://localhost:3845/assets/dd76937ca11dcdf238d0009f08cf3ee04603f3de.png"; // apple logo
const imgEllipse22 = "http://localhost:3845/assets/263c960a0159a1c0120c8bcf038c8fdad94c8a9c.svg"; // background glow behind main watch
const imgRectangle214 = "http://localhost:3845/assets/705a0ca32745d621b21161166891b6ed0463c996.svg"; // best seller ribbon
const imgFrame = "http://localhost:3845/assets/2d795e7096d6cfd9ac0b664a9c77f022bfd10836.svg"; // right arrow
const imgFrame1 = "http://localhost:3845/assets/659da1d5d2562f906922b7e4628e23a08a5b1933.svg"; // left arrow
const imgFrame2 = "http://localhost:3845/assets/5fe717e0b8553948f59b109762b003708c0704f7.svg"; // view detail arrow
const imgFrame3 = "http://localhost:3845/assets/b14e44f85378782edfc8b09ffb242ee3c7f6a454.svg"; // star icon

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
  }
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
  const leftProduct = products[(currentIndex - 1 + products.length) % products.length];
  const rightProduct = products[(currentIndex + 1) % products.length];

  return (
    <section className="relative w-full h-[924px] overflow-hidden flex justify-center font-['Lato',sans-serif]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-[924px]">
        <img alt="Snow Background" className="w-full h-full object-cover" src={imgRectangle43} />
      </div>
      <div className="absolute inset-0 bg-[#050D2B] bg-opacity-[0.71] w-full h-[924px]" />

      {/* Main Container */}
      <div className="relative w-full max-w-[1440px] h-[924px]">
        
        {/* Left/Right Gradients */}
        <div className="absolute left-0 top-0 w-[531px] h-[924px] bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(18,36,113,0.01)] pointer-events-none hidden lg:block" />
        <div className="absolute right-0 top-0 w-[531px] h-[924px] bg-gradient-to-l from-[rgba(0,0,0,0.5)] to-[rgba(18,36,113,0.01)] pointer-events-none hidden lg:block" />

        {/* BEST SELLER Ribbon */}
        <div className="absolute left-[20px] lg:left-[83px] top-0 w-[140px] lg:w-[183px] h-[180px] lg:h-[238px] z-20 flex justify-center pt-[45px] lg:pt-[63px]">
          <img alt="Ribbon" className="absolute inset-0 w-full h-full object-fill pointer-events-none" src={imgRectangle214} />
          <div className="relative z-10 text-center text-[#0c1950] font-extrabold text-[30px] lg:text-[40px] leading-tight">
            BEST <br/>SELLER
          </div>
        </div>

        {/* Product Title Center Top */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[92px] flex items-center gap-[15px] z-10 transition-all duration-300">
          <img alt="Apple Logo" className="w-[50px] lg:w-[74px] h-[50px] lg:h-[74px] object-contain" src={imgRectangle} />
          <h2 className="text-white text-[24px] lg:text-[32px] tracking-[0.05em] whitespace-nowrap">
            <span className="font-bold">WATCH</span> <span className="font-light">{mainProduct.name}</span>
          </h2>
        </div>

        {/* Center Glow */}
        <div className="absolute top-[168px] left-[50%] -translate-x-1/2 w-[620px] h-[500px] pointer-events-none mix-blend-screen z-0 hidden lg:block">
           <img alt="" className="w-[200%] h-[200%] -ml-[50%] -mt-[30%] max-w-none" src={imgEllipse22} />
        </div>

        {/* Product Images */}
        <div className="absolute inset-0 flex items-center justify-center top-[-50px] lg:top-[-80px] z-10 pointer-events-none">
          <img 
            key={`left-${leftProduct.id}`}
            alt="Left Watch" 
            className="hidden lg:block absolute left-[124px] top-[247px] w-[307px] h-[344px] object-contain transition-all duration-500 ease-in-out opacity-80" 
            src={leftProduct.image} 
          />
          <img 
            key={`main-${mainProduct.id}`}
            alt="Main Watch" 
            className="relative w-[340px] lg:w-[492px] h-[320px] lg:h-[469px] object-contain transition-all duration-500 ease-in-out scale-100" 
            src={mainProduct.image} 
          />
          <img 
            key={`right-${rightProduct.id}`}
            alt="Right Watch" 
            className="hidden lg:block absolute right-[106px] top-[257px] w-[304px] h-[348px] object-contain transition-all duration-500 ease-in-out opacity-80" 
            src={rightProduct.image} 
          />
        </div>

        {/* Arrow Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-[30px] lg:left-[401px] top-[401px] lg:top-[371px] w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] z-20 hover:scale-110 transition-transform focus:outline-none"
        >
          <img alt="Previous" className="w-full h-full object-contain rotate-180" src={imgFrame1} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-[30px] lg:right-[413px] top-[401px] lg:top-[371px] w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] z-20 hover:scale-110 transition-transform focus:outline-none"
        >
          <img alt="Next" className="w-full h-full object-contain" src={imgFrame} />
        </button>

        {/* Price & Rating */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[580px] lg:top-[668px] flex flex-col items-center gap-2 z-20 transition-all duration-300">
          <p className="text-white text-[28px] lg:text-[36px] font-semibold flex items-start">
            {mainProduct.price}<span className="underline decoration-solid underline-offset-4">đ</span>
          </p>
          <div className="flex items-center gap-2 mt-[5px]">
            <img src={imgFrame3} alt="Star" className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]" />
            <p className="text-[#f7f7f7] text-[16px] lg:text-[20px]">{mainProduct.rating} ({mainProduct.reviews} reviews)</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[680px] lg:top-[783px] flex flex-col sm:flex-row items-center gap-4 lg:gap-6 z-20">
          <button className="w-[160px] lg:w-[188px] h-[50px] lg:h-[58px] border-2 border-[#dee4f4] rounded-[30px] text-[#dee4f4] text-[18px] lg:text-[20px] font-semibold hover:bg-white/10 transition-colors focus:outline-none">
            Add to Cart
          </button>
          <button className="w-[160px] lg:w-[188px] h-[50px] lg:h-[58px] bg-[#dee4f4] rounded-[30px] text-[#193495] text-[18px] lg:text-[20px] font-bold hover:bg-white transition-colors focus:outline-none">
            Buy Now
          </button>
        </div>

        {/* View Detail Link */}
        <a href="#view-detail" className="absolute bottom-[40px] lg:bottom-auto right-[30px] lg:right-[135px] lg:top-[812px] flex items-center gap-3 text-white text-[16px] lg:text-[20px] hover:opacity-80 transition-opacity z-20 group">
          View Detail
          <img alt="" className="w-[14px] lg:w-[18px] h-[14px] lg:h-[18px] group-hover:translate-x-1 transition-transform" src={imgFrame2} />
        </a>

      </div>
    </section>
  );
};

export default BestSellerSection;
