import React from "react";

// Assets
const imgRectangle13 = "/HomePage/AboutSection/right-model.png";
const imgRectangle11 = "/HomePage/AboutSection/left-model.png";
const imgRectangle21 = "/HomePage/AboutSection/apple-logo.png";
const imgRectangle24 = "/HomePage/AboutSection/huawei-logo.png";
const imgRectangle26 = "/HomePage/AboutSection/xiaomi-logo.png";
const imgLine2 =
  "http://localhost:3845/assets/223c1cccf3a2e641bf546bc963646f39feec2b0e.svg";
const imgGroup5 = "/HomePage/AboutSection/about-logo.svg";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden flex justify-center py-[4rem] lg:py-0 lg:min-h-[63rem] font-['Lato',sans-serif]">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[30.4375rem] bg-gradient-to-b from-[#dee4f4] to-white" />

      {/* Main Container */}
      <div className="relative w-full max-w-[90rem] lg:h-[63rem] mx-auto px-6 lg:px-[5.3125rem] flex flex-col lg:block z-10">
        {/* Background Transparent Text */}
        <div className="absolute pointer-events-none select-none z-0 hidden lg:block">
          <p className="absolute font-bold text-[4rem] text-[rgba(18,36,113,0.05)] whitespace-nowrap top-[4rem] left-[31.375rem]">
            WristDigital
          </p>
          <p className="absolute font-bold text-[6.25rem] text-[rgba(18,36,113,0.05)] whitespace-nowrap top-[7.5rem] left-[30.0625rem]">
            SMART WATCH
          </p>
          <p className="absolute font-bold text-[5.625rem] text-[rgba(18,36,113,0.05)] whitespace-nowrap top-[15.0625rem] left-[43.9375rem]">
            SMART LIFE
          </p>
        </div>

        {/* Foreground Solid Text */}
        <div className="absolute pointer-events-none select-none z-20 hidden lg:block">
          <p className="absolute font-semibold text-[6.25rem] text-[#193495] whitespace-nowrap top-[10.4375rem] left-[39.5rem]">
            SMART WATCH
          </p>
          <div className="absolute top-[16.8125rem] left-[48rem]">
            <p className="font-extrabold text-[6rem] text-[#193495] whitespace-nowrap relative inline-block">
              SMART LIFE
              {/* Decorative Line Under SMART LIFE */}
              <span className="absolute left-[3rem] right-[-2rem] bottom-[1.2rem] h-[3px] bg-[#193495]"></span>
            </p>
          </div>
        </div>

        {/* Top/Left Images - Mobile displays in an aesthetic way via flex */}
        <div className="flex flex-col-reverse lg:block items-center relative z-10 mt-[2rem] lg:mt-0">
          <div className="hidden lg:block absolute top-[12.9375rem] left-[4.625rem] w-[19.4375rem] h-[16.3125rem] z-0">
            <img
              alt="W Shape"
              className="w-full h-full object-cover"
              src={imgGroup5}
            />
          </div>

          <div className="relative lg:absolute lg:top-[5.375rem] lg:left-[13.3125rem] w-full max-w-[22rem] lg:max-w-[31.3125rem] lg:h-[23.8125rem] z-10 flex justify-center mt-[-2rem] lg:mt-0">
            <img
              alt="Model"
              className="w-full h-auto max-h-[18rem] lg:max-h-none lg:h-full object-cover rounded-[1rem] lg:rounded-none drop-shadow-xl lg:drop-shadow-none"
              src={imgRectangle11}
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="relative lg:absolute lg:top-[31.625rem] lg:left-[5.3125rem] w-full lg:max-w-[51.5rem] mt-[3rem] lg:mt-0 z-20 text-center lg:text-left">
          <p className="text-[1rem] md:text-[1.25rem] lg:text-[1.6875rem] text-[#1a2530] leading-[1.4] mb-[2rem] lg:mb-[6.1875rem] font-normal mx-auto lg:mx-0 max-w-[35rem] lg:max-w-none">
            Discover the next generation of smart wearables where technology
            meets style.
            <br className="hidden md:block lg:block" />
            Smart connectivity, refined design, and powerful performance.
            <br className="hidden md:block lg:block" />
            WristDigital delivers a seamless experience in every moment: health
            tracking, multi-device connectivity, and everyday optimization.
            <br className="hidden md:block lg:block" />
            Just wear it — and let the smartwatch do the rest.
          </p>

          <div className="flex flex-col gap-[1.25rem] lg:gap-[1.6875rem] items-center lg:items-start relative z-20">
            <p className="text-[1.125rem] lg:text-[1.6875rem] text-[#1a2530] font-medium">
              Authorized by
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[1rem] lg:gap-[1.125rem]">
              <div className="border border-black lg:border-2 rounded-[0.9375rem] h-[3rem] lg:h-[3.5625rem] w-[7rem] lg:w-[9.5rem] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <img
                  alt="Apple"
                  className="h-[1.25rem] lg:h-[1.9375rem] object-contain"
                  src={imgRectangle21}
                />
              </div>
              <div className="border border-black lg:border-2 rounded-[0.9375rem] h-[3rem] lg:h-[3.5625rem] w-[7rem] lg:w-[9.5rem] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <img
                  alt="Huawei"
                  className="h-[1.5rem] lg:h-[2.5rem] object-contain"
                  src={imgRectangle24}
                />
              </div>
              <div className="border border-black lg:border-2 rounded-[0.9375rem] h-[3rem] lg:h-[3.5625rem] w-[7rem] lg:w-[9.5rem] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <img
                  alt="Xiaomi"
                  className="h-[1.5rem] lg:h-[2.5rem] object-contain"
                  src={imgRectangle26}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Model Image */}
        <div className="relative mt-[2.5rem] mx-auto lg:mt-0 lg:absolute lg:bottom-0 lg:right-[2rem] lg:left-auto w-full max-w-[16rem] sm:max-w-[22rem] lg:max-w-[40rem] h-auto lg:h-[52rem] pointer-events-none z-10 flex justify-end items-end">
          <img
            alt="Model wearing watch"
            className="w-full h-auto max-h-[100%] object-contain object-bottom"
            src={imgRectangle13}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
