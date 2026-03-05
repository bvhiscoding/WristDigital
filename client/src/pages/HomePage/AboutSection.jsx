import React from "react";

// Assets
const imgRectangle13 =
  "http://localhost:3845/assets/fd48ca501831c03c249bf3d4898ff5fb095bed5c.png";
const imgRectangle11 =
  "http://localhost:3845/assets/6905d4bb3068ba0796745bb85e407a05b492b4dd.png";
const imgRectangle21 =
  "http://localhost:3845/assets/d4983d2953d6bdffd4c1c4ddb83d0ca3c1e455ec.png";
const imgRectangle24 =
  "http://localhost:3845/assets/30055a8400e76b78f1aae6824866863ee3349c17.png";
const imgRectangle26 =
  "http://localhost:3845/assets/1dd51d0b47ff7d84f4f9b794b67433f0c3046516.png";
const imgLine2 =
  "http://localhost:3845/assets/223c1cccf3a2e641bf546bc963646f39feec2b0e.svg";
const imgGroup5 =
  "http://localhost:3845/assets/f79dd85d1c026cd82f0dc3b53c01f97419caf554.svg";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden flex justify-center min-h-[980px] font-['Lato',sans-serif]">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[487px] bg-gradient-to-b from-[#dee4f4] to-white" />

      {/* Main Container */}
      <div className="relative w-full max-w-[1440px] h-[980px] mx-auto px-6 lg:px-[85px]">
        {/* Background Text */}
        <div className="absolute pointer-events-none select-none z-0 hidden lg:block">
          <p className="absolute font-bold text-[64px] text-[rgba(18,36,113,0.05)] whitespace-nowrap top-[64px] left-[502px]">
            WristDigital
          </p>
          <p className="absolute font-bold text-[100px] text-[rgba(18,36,113,0.05)] whitespace-nowrap top-[120px] left-[481px]">
            SMART WATCH
          </p>
          <p className="absolute font-bold text-[90px] text-[rgba(18,36,113,0.05)] whitespace-nowrap top-[241px] left-[703px]">
            SMART LIFE
          </p>

          <p className="absolute font-semibold text-[100px] text-[#193495] whitespace-nowrap top-[167px] left-[632px]">
            SMART WATCH
          </p>
          <p className="absolute font-extrabold text-[96px] text-[#193495] whitespace-nowrap top-[269px] left-[816px]">
            SMART LIFE
          </p>
        </div>

        {/* Decorative Line */}
        <div className="absolute top-[387px] left-[970px] w-[396px] h-[1px] hidden lg:block">
          <img alt="" className="w-full h-full" src={imgLine2} />
        </div>

        {/* Top/Left Images */}
        <div className="absolute top-[207px] left-[74px] w-[311px] h-[261px] z-0 hidden lg:block">
          <img
            alt="W Shape"
            className="w-full h-full object-cover"
            src={imgGroup5}
          />
        </div>

        <div className="absolute top-[86px] left-[213px] w-[501px] h-[381px] z-10 hidden lg:block">
          <img
            alt="Model"
            className="w-full h-full object-cover"
            src={imgRectangle11}
          />
        </div>

        {/* Content Box */}
        <div className="absolute top-[100px] lg:top-[506px] left-[24px] lg:left-[85px] w-full max-w-[824px] z-20 pr-6 lg:pr-0">
          <p className="text-[18px] lg:text-[27px] text-[#1a2530] leading-[1.3] mb-[60px] lg:mb-[99px] font-normal pr-4 lg:pr-0">
            Discover the next generation of smart wearables — where technology
            meets style.
            <br className="hidden lg:block" />
            Smart connectivity, refined design, and powerful performance.
            <br className="hidden lg:block" />
            WristDigital delivers a seamless experience in every moment: health
            tracking, multi-device connectivity, and everyday optimization.
            <br className="hidden lg:block" />
            Just wear it — and let the smartwatch do the rest.
          </p>

          <div className="flex flex-col gap-[20px] lg:gap-[27px] relative z-20">
            <p className="text-[20px] lg:text-[27px] text-[#1a2530] font-medium">
              Authorized by
            </p>
            <div className="flex flex-wrap items-center gap-[18px]">
              <div className="border-2 border-black rounded-[15px] h-[48px] lg:h-[57px] w-[130px] lg:w-[152px] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <img
                  alt="Apple"
                  className="h-[26px] lg:h-[31px] object-contain"
                  src={imgRectangle21}
                />
              </div>
              <div className="border-2 border-black rounded-[15px] h-[48px] lg:h-[57px] w-[130px] lg:w-[152px] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <img
                  alt="Huawei"
                  className="h-[34px] lg:h-[40px] object-contain"
                  src={imgRectangle24}
                />
              </div>
              <div className="border-2 border-black rounded-[15px] h-[48px] lg:h-[57px] w-[130px] lg:w-[152px] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <img
                  alt="Xiaomi"
                  className="h-[34px] lg:h-[40px] object-contain"
                  src={imgRectangle26}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Model Image */}
        <div className="absolute top-[600px] lg:top-[179px] right-[-100px] lg:right-auto lg:left-[804px] w-[450px] lg:w-[540px] h-[650px] lg:h-[789px] overflow-hidden pointer-events-none z-10 opacity-40 lg:opacity-100">
          <img
            alt="Model wearing watch"
            className="absolute h-[118.35%] left-[-28.29%] max-w-none top-[-18.16%] w-[131.13%]"
            src={imgRectangle13}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
