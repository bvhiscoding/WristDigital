import React from "react";

// Assets
const imgRectangle34 =
  "http://localhost:3845/assets/fe69b5c64e2bda03d1e88b1019d1a74c9209ed3b.png"; // Left Smartwatches
const img301 =
  "http://localhost:3845/assets/71b4fe6680eed0ecf878d3f7b57cdeaaec596d4b.png"; // Right charging dock watch
const imgFrame =
  "http://localhost:3845/assets/1589698eb35ca7628b08d264b61d52de202e4ee4.svg"; // Right arrow icon
const imgFrame1 =
  "http://localhost:3845/assets/b6df627226db273cf7dfdda8d822ff6038a58a6b.svg"; // Right arrow icon (blue)
const imgGroup348 =
  "http://localhost:3845/assets/3d80980edc85df0c6545c4fb338ad44b4030c595.svg"; // WD Black Logo
const imgGroup350 =
  "http://localhost:3845/assets/031a983540e18278b63cd9d94cb6641fab5fde20.svg"; // WD White Logo

const SaleSection = () => {
  return (
    <section className="relative w-full bg-white flex justify-center py-[4rem] lg:py-[5rem] overflow-hidden font-['Lato',sans-serif]">
      <div className="w-full max-w-[90rem] px-4 lg:px-[3.6875rem] flex flex-col lg:flex-row gap-6 lg:justify-between items-center lg:items-stretch">
        {/* Left Banners: Smartwatch Sale */}
        <div
          className="relative w-full lg:w-1/2 h-[28rem] lg:h-[24.875rem] rounded-[1.375rem] overflow-visible flex-shrink-0 mt-[4rem] lg:mt-0 max-w-[35rem] lg:max-w-none"
          style={{
            backgroundImage:
              "linear-gradient(236.644deg, rgb(227, 235, 255) 3.4049%, #b4cfff 98.624%)",
          }}
        >
          {/* Logo */}
          <div className="absolute left-[1.5rem] lg:left-[3.125rem] top-[2rem] lg:top-[2.8125rem] w-[2.5rem] h-[1.625rem] z-10">
            <img
              alt="WristDigital Logo"
              className="w-full h-full object-contain"
              src={imgGroup348}
            />
          </div>

          {/* Texts */}
          <div className="absolute left-[1.5rem] lg:left-[3.125rem] top-[5.5rem] lg:top-[5.9375rem] flex flex-col z-10">
            <h2 className="font-extrabold text-[1.25rem] sm:text-[1.5rem] text-black mb-2">
              SHOP SMARTWATCH
            </h2>
            <p className="font-semibold text-[1.25rem] sm:text-[1.5rem] text-black">
              & SAVE UP TO
            </p>
            <p className="font-extrabold text-[3.5rem] sm:text-[4rem] text-black leading-tight mt-2">
              20%
            </p>
          </div>

          {/* CTA Button */}
          <button className="absolute left-[1.5rem] lg:left-[3.125rem] bottom-[2rem] lg:bottom-[2.5rem] bg-[#193495] w-[12rem] lg:w-[14.8125rem] h-[3.5rem] lg:h-[4.0625rem] rounded-[1.875rem] flex items-center justify-center gap-4 hover:bg-[#0c1950] transition-colors focus:outline-none z-10">
            <span className="font-semibold text-[1.125rem] lg:text-[1.25rem] text-white">
              SHOP NOW
            </span>
            <img alt="" className="w-[1.25rem] h-[1.25rem]" src={imgFrame} />
          </button>

          {/* Overlapping Image */}
          <div className="absolute right-[0] lg:right-[-3.75rem] top-[-5rem] lg:top-[-7.5rem] w-[18rem] sm:w-[21.875rem] lg:w-[24.5rem] h-[22rem] lg:h-[29.1875rem] pointer-events-none drop-shadow-2xl z-0 overflow-hidden lg:overflow-visible">
            <img
              alt="Apple Watches"
              className="w-full lg:w-[161%] h-full lg:max-w-none object-contain lg:ml-[-30%]"
              src={imgRectangle34}
            />
          </div>
        </div>

        {/* Right Banner: Charging Dock Sale */}
        <div
          className="relative w-full lg:w-1/2 h-[28rem] lg:h-[24.875rem] rounded-[1.375rem] overflow-visible flex-shrink-0 mt-[2rem] lg:mt-0 max-w-[35rem] lg:max-w-none"
          style={{
            backgroundImage:
              "linear-gradient(-57.4109deg, rgb(25, 52, 149) 0%, rgb(68, 102, 224) 98.047%)",
          }}
        >
          {/* Logo */}
          <div className="absolute left-[1.5rem] lg:left-[2.8125rem] top-[2rem] lg:top-[2.8125rem] w-[2.5rem] h-[1.625rem] z-10">
            <img
              alt="WristDigital Logo"
              className="w-full h-full object-contain"
              src={imgGroup350}
            />
          </div>

          {/* Texts */}
          <div className="absolute left-[1.5rem] lg:left-[2.8125rem] top-[5.5rem] lg:top-[5.625rem] flex flex-col z-10 w-[70%]">
            <p className="font-extrabold text-[0.75rem] lg:text-[0.9375rem] text-white tracking-wide uppercase mb-2">
              W2 STAND SMARTWATCH CHARGING DOCK
            </p>
            <h2 className="font-medium text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] text-white leading-tight mt-1 mb-1">
              DECLUTTER YOUR DESK <br /> & SAVE UP TO
            </h2>
            <p className="font-extrabold text-[3rem] sm:text-[3.125rem] lg:text-[4rem] text-white leading-none mt-2">
              30%
            </p>
          </div>

          {/* CTA Button */}
          <button className="absolute left-[1.5rem] lg:left-[2.8125rem] bottom-[2rem] lg:bottom-[2.5rem] bg-[#e3ebff] w-[12rem] lg:w-[14.8125rem] h-[3.5rem] lg:h-[4.0625rem] rounded-[1.875rem] flex items-center justify-center gap-4 hover:bg-white transition-colors focus:outline-none z-10">
            <span className="font-semibold text-[1.125rem] lg:text-[1.25rem] text-[#0c1950]">
              SHOP NOW
            </span>
            <img alt="" className="w-[1.25rem] h-[1.25rem]" src={imgFrame1} />
          </button>

          {/* Overlapping Image */}
          <div className="absolute right-[0] lg:right-[-5.625rem] top-[5rem] lg:top-[3.75rem] w-[14rem] sm:w-[18.75rem] lg:w-[22.3125rem] h-[14rem] lg:h-[23.5rem] pointer-events-none drop-shadow-xl z-0 overflow-hidden lg:overflow-visible">
            <img
              alt="Charging Dock"
              className="w-full lg:w-[179%] h-full lg:h-[212%] lg:max-w-none object-contain lg:ml-[-40%] lg:mt-[-55%]"
              src={img301}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
