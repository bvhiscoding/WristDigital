import React from 'react';

// Assets from Figma MCP
const img1 = "http://localhost:3845/assets/688c7774a9bc58d04b7b3ebb0d2e00c5cd809382.png";
const imgEllipse8 = "http://localhost:3845/assets/3a73752b8bfe344d1ae596225ff034af65a1ba68.svg";
const imgEllipse2 = "http://localhost:3845/assets/cd6c85025320e9b1ce274d14848c74084f685c78.svg";
const imgEllipse4 = "http://localhost:3845/assets/42809a59c8f87e2281ea888bcb24129aaa299eaf.svg";
const imgRectangle = "http://localhost:3845/assets/dd76937ca11dcdf238d0009f08cf3ee04603f3de.png"; // Apple logo
const imgEllipse6 = "http://localhost:3845/assets/67a96a9081fc1942d2173fc5f05c8ff453585c37.svg";
const imgEllipse7 = "http://localhost:3845/assets/52abc28ded96f4e309c38312222056e602195618.svg";
const imgEllipse9 = "http://localhost:3845/assets/a6096ce5c38ccbd0ae6f9d13b68768e8c507d9cb.svg";
const imgFrame3 = "http://localhost:3845/assets/d6e4a8b1c97c77ca848c324fa31062cdf3216853.svg"; // View Detail arrow

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[57.75rem] bg-[#0c1950] overflow-hidden flex justify-center py-[4rem] lg:py-0">
      {/* Background Glows (Ellipses) */}
      <div className="absolute pointer-events-none -top-[12.5rem] left-[-5rem] lg:left-[28.8125rem] w-[20rem] lg:w-[33.125rem] h-[20rem] lg:h-[33.375rem] mix-blend-screen opacity-50">
        <img alt="" className="w-full h-full object-cover scale-[2.1]" src={imgEllipse8} />
      </div>
      <div className="absolute pointer-events-none top-[15rem] lg:top-[24.3125rem] left-[-2rem] lg:left-[22.5rem] w-[15rem] lg:w-[29.5625rem] h-[15rem] lg:h-[30.8125rem] mix-blend-screen opacity-50">
        <img alt="" className="w-full h-full object-cover scale-[2.2]" src={imgEllipse2} />
      </div>
      <div className="absolute pointer-events-none top-[20rem] lg:top-[4.625rem] right-[-10rem] lg:right-[-6.25rem] w-[25rem] lg:w-[49.4375rem] h-[25rem] lg:h-[48.1875rem] mix-blend-screen opacity-50">
        <img alt="" className="w-full h-full object-cover scale-[1.7]" src={imgEllipse4} />
      </div>

      {/* Background Large Texts - Absolutely positioned but responsive */}
      <div className="absolute inset-0 pointer-events-none select-none max-w-[90rem] mx-auto w-full overflow-hidden" aria-hidden="true" style={{ fontFamily: "'League Gothic', sans-serif" }}>
        <p className="absolute text-[8rem] lg:text-[15.625rem] leading-none text-[rgba(255,255,255,0.05)] left-[1rem] lg:left-[5.0625rem] top-[2rem] lg:top-[-0.75rem]" style={{ fontVariationSettings: "'wdth' 100" }}>APPLE</p>
        <p className="absolute text-[8rem] lg:text-[15.625rem] leading-none text-[rgba(255,255,255,0.05)] left-[3rem] lg:left-[33.3125rem] top-[9rem] lg:top-[-0.75rem]" style={{ fontVariationSettings: "'wdth' 100" }}>WATCH</p>
        <p className="hidden md:block absolute text-[12rem] lg:text-[28.125rem] leading-[0.85] text-[rgba(255,255,255,0.05)] right-[2rem] lg:left-[65.5625rem] top-[15rem] lg:top-[-4.375rem]" style={{ fontVariationSettings: "'wdth' 100" }}>SE</p>
        <p className="hidden md:block absolute text-[15rem] lg:text-[31.25rem] leading-[0.85] text-[rgba(255,255,255,0.05)] right-[1rem] lg:left-[75.75rem] top-[26rem] lg:top-[19.4375rem]" style={{ fontVariationSettings: "'wdth' 100" }}>3</p>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[90rem] h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[6rem] z-10">
        
        {/* Left Column Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-[34.4375rem] z-10 mt-[2rem] lg:mt-0">
          
          <div className="flex items-center gap-[0.875rem] mb-[1.125rem]">
            <img src={imgRectangle} alt="Apple Logo" className="w-[2.5rem] lg:w-[4.125rem] h-[2.5rem] lg:h-[4.125rem] object-contain" />
            <h2 className="text-white text-[1.25rem] lg:text-[1.6875rem]" style={{ fontFamily: "'Lato', sans-serif" }}>
              <span className="font-bold">WATCH</span> <span className="font-light">SE3</span>
            </h2>
          </div>

          <h1 className="text-white text-[2.5rem] sm:text-[3.5rem] lg:text-[4.375rem] font-extrabold leading-[1.0] mb-[0.9375rem] w-full lg:w-[31.375rem]" style={{ fontFamily: "'Lato', sans-serif" }}>
            ALL FROM YOUR WRIST
          </h1>

          <div className="text-white text-[1rem] lg:text-[1.25rem] leading-[normal] mb-[2.375rem] w-full lg:w-[34.4375rem] whitespace-pre-wrap" style={{ fontFamily: "'Lato', sans-serif" }}>
            <p className="font-extrabold mb-2">{`The perfect health and fitness companion.`}</p>
            <p className="font-normal text-[0.9rem] sm:text-[1rem] lg:text-[1.25rem]">
              Track activity, monitor heart rate, and stay connected with calls, texts, and music — all from your wrist. Featuring essential safety features like Crash Detection and Fall Detection.
            </p>
          </div>

          <div className="flex items-center gap-[1.125rem]">
            <button className="bg-[#dee4f4] hover:bg-white transition-colors text-[#193495] font-bold text-[0.875rem] lg:text-[1rem] w-[8.75rem] lg:w-[9.6875rem] h-[3rem] rounded-[0.3125rem] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              SHOP NOW
            </button>
            <a href="#details" className="ml-[1.25rem] flex items-center gap-2 text-white text-[0.875rem] lg:text-[1rem] font-normal hover:opacity-80 transition-opacity focus:outline-none group" style={{ fontFamily: "'Lato', sans-serif" }}>
              View Detail 
              <img src={imgFrame3} alt="" className="w-[0.9375rem] h-[0.9375rem] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Product Image */}
        <div className="relative mt-[4rem] lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-[45%] w-full lg:w-[50rem] flex items-center justify-center pointer-events-none">
          <div className="rotate-[10.02deg] w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-none">
            <img alt="Apple Watch SE3" className="w-full lg:w-[54.9688rem] h-auto lg:h-[69.0438rem] object-contain mix-blend-normal" src={img1} />
          </div>
        </div>

      </div>

      {/* Color Dots Navigation */}
      <div className="absolute right-[1rem] lg:right-[2.3125rem] top-[4rem] lg:top-[8.1875rem] flex flex-col items-center gap-[0.625rem] z-20">
        <button aria-label="Black Color" className="w-[1.875rem] h-[1.875rem] rounded-full focus:outline-none hover:scale-110 transition-transform">
          <img src={imgEllipse6} alt="" className="w-full h-full object-contain" />
        </button>
        <button aria-label="Beige Color (Selected)" className="relative w-[1.875rem] h-[1.875rem] rounded-full focus:outline-none group">
          <img src={imgEllipse9} alt="" className="absolute -left-[0.1875rem] -top-[0.1875rem] w-[2.25rem] h-[2.25rem] max-w-none group-hover:rotate-45 transition-transform duration-500" />
          <img src={imgEllipse7} alt="" className="relative w-full h-full object-contain z-10" />
        </button>
      </div>

    </section>
  );
};

export default HeroSection;
