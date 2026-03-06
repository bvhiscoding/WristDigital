import React, { useState, useEffect } from "react";

// Assets
const imgEllipse8 = "/HomePage/HeroSection/imgEllipse8.svg";
const imgEllipse2 = "/HomePage/HeroSection/imgEllipse2.svg";
const imgEllipse4 = "/HomePage/HeroSection/imgEllipse4.svg";
const imgViewDetailArrow = "/HomePage/HeroSection/arrow-icon.svg";
const imgAppleLogo = "\\HomePage\\HeroSection\\apple-log.svg";
const imgProduct = "/HomePage/HeroSection/hero-product-1.png";
const imgProduct2 = "/HomePage/HeroSection/hero-product-2.png";

const BackgroundGlows = () => (
  <>
    {/* <div className="absolute pointer-events-none -top-[12.5rem] left-[-5rem] lg:left-[28.8125rem] w-[20rem] lg:w-[33.125rem] h-[20rem] lg:h-[33.375rem] mix-blend-screen opacity-50">
      <img
        alt=""
        className="w-full h-full object-cover scale-[2.1]"
        src={imgEllipse8}
      />
    </div>
    <div className="absolute pointer-events-none top-[15rem] lg:top-[24.3125rem] left-[-2rem] lg:left-[22.5rem] w-[15rem] lg:w-[29.5625rem] h-[15rem] lg:h-[30.8125rem] mix-blend-screen opacity-50">
      <img
        alt=""
        className="w-full h-full object-cover scale-[2.2]"
        src={imgEllipse2}
      />
    </div>
    <div className="absolute pointer-events-none top-[20rem] lg:top-[4.625rem] right-[-10rem] lg:right-[-6.25rem] w-[25rem] lg:w-[49.4375rem] h-[25rem] lg:h-[48.1875rem] mix-blend-screen opacity-50">
      <img
        alt=""
        className="w-full h-full object-cover scale-[1.7]"
        src={imgEllipse4}
      />
    </div> */}
  </>
);

const BackgroundLargeTexts = () => (
  <div
    className="absolute inset-0 pointer-events-none select-none w-full h-full overflow-hidden flex items-center justify-center lg:items-start"
    aria-hidden="true"
    style={{ fontFamily: "'League Gothic', sans-serif" }}
  >
    <p
      className="text-[14.5vw] leading-none text-[rgba(255,255,255,0.06)] whitespace-nowrap lg:mt-[10rem]"
      style={{ fontVariationSettings: "'wdth' 100", letterSpacing: "0.02em" }}
    >
      APPLE WATCH SE 3
    </p>
  </div>
);

const ProductInfo = () => (
  <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-[35rem] z-10 mt-[8rem] lg:mt-[2rem] relative px-4 lg:px-0">
    <div className="flex items-center gap-0 mb-[1rem] mt-[-3rem] lg:mt-[5rem]">
      <img
        src={imgAppleLogo}
        alt="Apple Logo"
        className="w-[2.8rem] md:w-[3.2rem] lg:w-[3.8rem] h-[2.8rem] md:h-[3.2rem] lg:h-[3.8rem] object-contain mb-[0.2rem]"
      />
      <h2
        className="text-white text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] tracking-wide"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <span className="font-bold">WATCH</span>{" "}
        <span className="font-light">SE3</span>
      </h2>
    </div>

    <h1
      className="text-white text-[3.5rem] sm:text-[4rem] lg:text-[5.25rem] font-bold leading-[1.0] mb-[2rem] w-full"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      ALL FROM
      <br />
      YOUR WRIST
    </h1>

    <div
      className="text-white text-[1rem] lg:text-[1.05rem] leading-[1.6] mb-[3.5rem] w-full lg:w-[32rem] whitespace-pre-wrap"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <p className="font-bold mb-[0.3rem] text-[1.05rem] lg:text-[1.1rem]">{`The perfect health and fitness companion.`}</p>
      <p className="font-normal text-[0.9rem] lg:text-[0.95rem] opacity-90">
        Track activity, monitor heart rate, and stay connected with calls,
        texts, and music all from your wrist. Featuring essential safety
        features like Crash Detection and Fall Detection.
      </p>
    </div>

    <div className="flex items-center gap-[2.5rem] lg:gap-[3.5rem]">
      <button
        className="bg-[#dee4f4] hover:bg-white transition-colors text-[#193495] font-bold text-[1rem] lg:text-[1.1rem] w-[9rem] lg:w-[11rem] h-[3.5rem] lg:h-[4rem] rounded-[0.4rem] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        SHOP NOW
      </button>
      <a
        href="#details"
        className="flex items-center gap-[0.6rem] text-white text-[1rem] lg:text-[1.1rem] font-medium hover:opacity-80 transition-opacity focus:outline-none group"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        View Detail
        <img
          src={imgViewDetailArrow}
          alt=""
          className="w-[0.5rem] lg:w-[0.7rem] h-[0.7rem] lg:h-[1rem] mt-[0.1rem] ml-[0.2rem] group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  </div>
);

const ProductImage = ({ currentColor }) => (
  <div className="relative mt-[2rem] lg:mt-0 lg:absolute lg:right-[6rem] lg:top-[50%] lg:-translate-y-[50%] w-full lg:w-[45rem] flex items-center justify-center pointer-events-none z-10">
    <div className="w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[100%] lg:scale-100">
      <img
        alt="Apple Watch SE3"
        className={`w-full h-auto object-contain drop-shadow-2xl mix-blend-normal transition-all duration-500 origin-center ${
          currentColor === "black"
            ? "scale-[0.85] -rotate-[8deg]"
            : "scale-100 rotate-0"
        }`}
        src={currentColor === "black" ? imgProduct2 : imgProduct}
      />
    </div>
  </div>
);

const ColorPicker = ({ currentColor, setCurrentColor }) => (
  <div className="hidden lg:flex absolute right-[2.5rem] lg:right-[4rem] top-1/2 -translate-y-1/2 flex-col items-center gap-[2rem] z-20">
    <button
      onClick={() => setCurrentColor("black")}
      aria-label="Black Color"
      className={`w-[1.2rem] h-[1.2rem] rounded-full focus:outline-none transition-all bg-[#1A2530] ${currentColor === "black" ? "ring-[2px] ring-white ring-offset-[6px] ring-offset-[#0c1950]" : "hover:scale-125"}`}
    ></button>
    <button
      onClick={() => setCurrentColor("beige")}
      aria-label="Beige Color"
      className={`w-[1.2rem] h-[1.2rem] rounded-full focus:outline-none bg-[#DFD6D0] transition-all ${currentColor === "beige" ? "ring-[2px] ring-white ring-offset-[6px] ring-offset-[#0c1950]" : "hover:scale-125"}`}
    ></button>
  </div>
);

const HeroSection = () => {
  const [currentColor, setCurrentColor] = useState("beige");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev === "beige" ? "black" : "beige"));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentColor]);

  return (
    <section className="relative w-full min-h-[100vh] lg:h-[100vh] bg-[#0c1950] overflow-hidden flex justify-center py-[2rem] lg:py-0">
      {/* <BackgroundGlows /> */}
      <BackgroundLargeTexts />

      {/* Main Container */}
      <div className="relative w-full max-w-[90rem] h-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-[6rem] z-10">
        <ProductInfo />
        <ProductImage currentColor={currentColor} />
      </div>

      <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
    </section>
  );
};

export default HeroSection;
