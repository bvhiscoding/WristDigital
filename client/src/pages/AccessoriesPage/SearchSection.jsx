import React from "react";

const SearchSection = () => {
  return (
    <section 
      className="relative w-full h-[776px] flex flex-col items-center justify-center bg-gradient-to-tr from-[#E3EBFF] to-[#B4C9FF] overflow-hidden"
      style={{
        background: "linear-gradient(250.657deg, rgb(227, 235, 255) 0%, rgb(180, 201, 255) 60.654%)"
      }}
    >
      {/* Background large W-shape abstract SVG */}
      <img 
        src="/accessories/bg-layer.svg" 
        alt="" 
        className="absolute w-[1077px] h-[712px] top-[32px] left-[338px] mix-blend-overlay pointer-events-none opacity-40" 
      />

      {/* Main image */}
      <img
        src="/accessories/bg.png"
        alt="Woman with smart watch"
        className="absolute top-0 left-0 w-[1026px] h-full object-cover pointer-events-none mix-blend-normal"
      />

      {/* Dark gradient overlay covering the entire section */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 18.75%, rgba(0, 0, 0, 0.6) 99.8%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[945px] mt-[400px] mx-auto text-center flex flex-col items-center">
        {/* Title/Description */}
        <h1 className="font-['Lato'] text-[24px] text-white leading-normal max-w-[686px] mx-auto mb-[70px]">
          Upgrade your devices with your style through our wide range of accessories covering everything that would be need to make your smart watch unique in your way
        </h1>

        {/* Search Bar matching Figma's glassmorphism style */}
        <div className="relative w-full h-[82px] bg-white/75 rounded-[100px] flex items-center px-10 border border-white/20 backdrop-blur-sm shadow-sm transition-transform hover:scale-[1.02]">
          <svg 
            width="40" height="40" viewBox="0 0 24 24" fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#193495]/86 mr-[15px]"
          >
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#193495" strokeOpacity="0.86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.9999 21L16.6499 16.65" stroke="#193495" strokeOpacity="0.86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-none text-[#193495]/86 font-['Lato'] text-[24px] placeholder:text-[#193495]/86"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
