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
    <section className="relative w-full h-[924px] bg-[#0c1950] overflow-hidden flex justify-center">
      {/* Background Glows (Ellipses) */}
      <div className="absolute pointer-events-none -top-[200px] left-[200px] md:left-[461px] w-[530px] h-[534px] mix-blend-screen opacity-50">
        <img alt="" className="w-full h-full object-cover scale-[2.1]" src={imgEllipse8} />
      </div>
      <div className="absolute pointer-events-none top-[389px] left-[100px] md:left-[360px] w-[473px] h-[493px] mix-blend-screen opacity-50">
        <img alt="" className="w-full h-full object-cover scale-[2.2]" src={imgEllipse2} />
      </div>
      <div className="absolute pointer-events-none top-[74px] right-[-100px] lg:left-[879px] w-[791px] h-[771px] mix-blend-screen opacity-50">
        <img alt="" className="w-full h-full object-cover scale-[1.7]" src={imgEllipse4} />
      </div>

      {/* Background Large Texts - Absolutely positioned like Figma */}
      <div className="absolute inset-0 pointer-events-none select-none max-w-[1440px] mx-auto w-full" aria-hidden="true" style={{ fontFamily: "'League Gothic', sans-serif" }}>
        <p className="absolute text-[150px] lg:text-[250px] leading-none text-[rgba(255,255,255,0.07)] left-[20px] lg:left-[81px] top-[40px] lg:top-[-12px]" style={{ fontVariationSettings: "'wdth' 100" }}>APPLE</p>
        <p className="absolute text-[150px] lg:text-[250px] leading-none text-[rgba(255,255,255,0.07)] left-[20px] lg:left-[533px] top-[180px] lg:top-[-12px]" style={{ fontVariationSettings: "'wdth' 100" }}>WATCH</p>
        <p className="absolute text-[250px] lg:text-[450px] leading-[0.85] text-[rgba(255,255,255,0.07)] right-[20px] lg:left-[1049px] top-[150px] lg:top-[-70px]" style={{ fontVariationSettings: "'wdth' 100" }}>SE</p>
        <p className="absolute text-[300px] lg:text-[500px] leading-[0.85] text-[rgba(255,255,255,0.07)] right-[60px] lg:left-[1212px] top-[400px] lg:top-[311px]" style={{ fontVariationSettings: "'wdth' 100" }}>3</p>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1440px] h-full flex flex-col justify-center px-6 lg:px-[96px] z-10">
        {/* Left Column Text Content */}
        <div className="absolute left-[76px] top-[167px] flex flex-col max-w-full lg:w-[551px] z-10">
          
          <div className="flex items-center gap-[14px] mb-[18px]">
            <img src={imgRectangle} alt="Apple Logo" className="w-[49px] lg:w-[66px] h-[66px] object-contain" />
            <h2 className="text-white text-[20px] lg:text-[27px]" style={{ fontFamily: "'Lato', sans-serif" }}>
              <span className="font-bold">WATCH</span> <span className="font-light">SE3</span>
            </h2>
          </div>

          <h1 className="text-white text-[48px] lg:text-[70px] font-extrabold leading-[1.0] mb-[15px] lg:w-[502px]" style={{ fontFamily: "'Lato', sans-serif" }}>
            ALL FROM YOUR WRIST
          </h1>

          <div className="text-white text-[16px] lg:text-[20px] leading-[normal] mb-[38px] lg:w-[551px] whitespace-pre-wrap" style={{ fontFamily: "'Lato', sans-serif" }}>
            <p className="font-extrabold mb-0">{`The perfect health and fitness companion.`}</p>
            <p className="font-normal text-[15px] lg:text-[20px]">
              Track activity, monitor heart rate, and stay connected with calls, texts, and music — all from your wrist. Featuring essential safety features like Crash Detection and Fall Detection.
            </p>
          </div>

          <div className="flex items-center gap-[18px]">
            <button className="bg-[#dee4f4] hover:bg-white transition-colors text-[#193495] font-bold text-[14px] lg:text-[16px] w-[140px] lg:w-[155px] h-[48px] rounded-[5px] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              SHOP NOW
            </button>
            <a href="#details" className="ml-[20px] flex items-center gap-2 text-white text-[14px] lg:text-[16px] font-normal hover:opacity-80 transition-opacity focus:outline-none group" style={{ fontFamily: "'Lato', sans-serif" }}>
              View Detail 
              <img src={imgFrame3} alt="" className="w-[15px] h-[15px] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Product Image */}
      <div className="absolute pointer-events-none lg:left-[482px] lg:top-[-269px] w-[500px] lg:w-[1058px] flex items-center justify-center lg:h-[1240px]">
        <div className="rotate-[10.02deg]">
          <img alt="Apple Watch SE3" className="w-[879.5px] h-[1104.7px] object-cover mix-blend-normal pointer-events-none" src={img1} />
        </div>
      </div>

      {/* Color Dots Navigation */}
      <div className="absolute right-[20px] lg:right-[37px] top-[131px] flex flex-col items-center gap-[10px] z-20">
        <button aria-label="Black Color" className="w-[30px] h-[30px] rounded-full focus:outline-none hover:scale-110 transition-transform">
          <img src={imgEllipse6} alt="" className="w-full h-full object-contain" />
        </button>
        <button aria-label="Beige Color (Selected)" className="relative w-[30px] h-[30px] rounded-full focus:outline-none group">
          <img src={imgEllipse9} alt="" className="absolute -left-[3px] -top-[3px] w-[36px] h-[36px] max-w-none group-hover:rotate-45 transition-transform duration-500" />
          <img src={imgEllipse7} alt="" className="relative w-full h-full object-contain z-10" />
        </button>
      </div>

    </section>
  );
};

export default HeroSection;
