import React from "react";

const SaleSection = () => {
  return (
    <section className="relative w-full bg-white flex justify-center py-[4rem] lg:py-[5rem] overflow-visible font-['Lato',sans-serif]">
      <div className="w-full max-w-[90rem] px-4 lg:px-[3.6875rem] flex flex-col lg:flex-row gap-6 lg:gap-10 lg:justify-between items-center lg:items-stretch">
        {/* Left Banner: Smartwatch Sale */}
        <div
          className="relative w-full lg:w-1/2 h-[28rem] rounded-[1.375rem] overflow-visible flex-shrink-0 mt-[4rem] lg:mt-0"
          style={{
            backgroundImage:
              "linear-gradient(236.644deg, rgb(227, 235, 255) 3.4049%, #b4cfff 98.624%)",
          }}
        >
          {/* Content Container to keep text on left */}
          <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full w-full lg:w-3/5">
            {/* Logo */}
            <div className="w-[3.5rem] h-[2.5rem] mb-6">
              <img
                alt="WristDigital Logo"
                className="w-full h-full object-contain object-left"
                src="/black-logo.png"
              />
            </div>

            {/* Texts */}
            <div className="flex flex-col flex-grow justify-center -mt-8">
              <h2 className="font-extrabold text-[1.5rem] lg:text-[1.75rem] text-black mb-1">
                SHOP SMARTWATCH
              </h2>
              <p className="font-medium text-[1.25rem] lg:text-[1.5rem] text-black tracking-wide">
                & SAVE UP TO
              </p>
              <p className="font-extrabold text-[4.5rem] lg:text-[5.5rem] text-black leading-tight mt-1">
                20%
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#193495] w-[13rem] h-[3.5rem] rounded-[1.875rem] flex items-center justify-center gap-3 hover:bg-[#0c1950] transition-colors focus:outline-none mb-2">
              <span className="font-bold text-[1rem] lg:text-[1.125rem] text-white tracking-wide">
                SHOP NOW
              </span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="white"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Overlapping Image */}
          <div className="absolute right-[-1rem] lg:right-[-2rem] top-[-3rem] lg:top-[-4rem] w-[18rem] sm:w-[22rem] lg:w-[26rem] h-auto pointer-events-none drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] z-20">
            <img
              alt="Apple Watches"
              className="w-full h-auto object-contain"
              src="/HomePage/SaleSection/left-watch.png"
            />
          </div>
        </div>

        {/* Right Banner: Charging Dock Sale */}
        <div
          className="relative w-full lg:w-1/2 h-[28rem] rounded-[1.375rem] overflow-visible flex-shrink-0 mt-[4rem] lg:mt-0"
          style={{
            backgroundImage:
              "linear-gradient(-57.4109deg, rgb(25, 52, 149) 0%, rgb(68, 102, 224) 98.047%)",
          }}
        >
          {/* Content Container to keep text on left */}
          <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full w-full lg:w-[65%]">
            {/* Logo */}
            <div className="w-[3.5rem] h-[2.5rem] mb-6">
              <img
                alt="WristDigital Logo"
                className="w-full h-full object-contain object-left"
                src="/white-logo.png"
              />
            </div>

            {/* Texts */}
            <div className="flex flex-col flex-grow justify-center -mt-8">
              <p className="font-bold text-[0.875rem] lg:text-[0.9375rem] text-white tracking-widest uppercase mb-3">
                W2 STAND SMARTWATCH CHARGING DOCK
              </p>
              <h2 className="font-medium text-[1.5rem] lg:text-[1.75rem] text-white leading-tight mb-2">
                DECLUTTER YOUR DESK <br /> & SAVE UP TO
              </h2>
              <p className="font-extrabold text-[4.5rem] lg:text-[5.5rem] text-white leading-none mt-2">
                30%
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#e3ebff] w-[13rem] h-[3.5rem] rounded-[1.875rem] flex items-center justify-center gap-3 hover:bg-white transition-colors focus:outline-none mb-2">
              <span className="font-bold text-[1rem] lg:text-[1.125rem] text-[#0c1950] tracking-wide">
                SHOP NOW
              </span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="#0c1950"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Overlapping Image */}
          <div className="absolute right-[-1rem] lg:right-[-2rem] bottom-[-2rem] w-[16rem] sm:w-[20rem] lg:w-[24rem] h-auto pointer-events-none drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] z-20">
            <img
              alt="Charging Dock"
              className="w-full h-auto object-contain"
              src="/HomePage/SaleSection/right-dock.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
