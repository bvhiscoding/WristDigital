import React from "react";

const AccessoriesSection = () => {
  return (
    <section className="relative w-full bg-white flex justify-center py-[4rem] lg:py-[5rem] font-['Lato',sans-serif]">
      {/* Main Container */}
      <div className="w-full max-w-[90rem] px-4 lg:px-[3.6875rem] flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-[3.75rem] lg:mb-[4.5rem]">
          <h2 className="text-[#102270] text-[1.5rem] lg:text-[1.875rem] font-medium leading-tight mb-2">
            CHOOSE YOUR
          </h2>
          <h3 className="text-[#102270] text-[2rem] lg:text-[2.5rem] font-extrabold leading-tight">
            ACCESSORIES
          </h3>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Card 1: Watch Straps */}
          <div className="relative h-[18rem] lg:h-[20rem] w-full rounded-[1rem] bg-[#e6eeff] group cursor-pointer transition-shadow hover:shadow-xl overflow-hidden flex flex-col">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[4.5rem] lg:text-[6rem] text-[#193495] opacity-[0.04] leading-none text-center">
                WATCH
                <br />
                STRAPS
              </span>
            </div>
            <p className="absolute left-6 lg:left-8 top-6 lg:top-8 font-bold text-[#14266e] text-[1.5rem] lg:text-[1.75rem] leading-tight z-10 text-left">
              Watch
              <br />
              Straps
            </p>
            <div className="absolute right-[-1rem] lg:right-[-2rem] bottom-[-2rem] lg:bottom-[-3rem] w-[14rem] lg:w-[18rem] h-auto pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
              <img
                alt="Watch Straps"
                className="w-full h-auto object-contain drop-shadow-md"
                src="/HomePage/AccessoriesSection/watch-straps.png"
              />
            </div>
          </div>

          {/* Card 2: Charging Dock */}
          <div className="relative h-[18rem] lg:h-[20rem] w-full rounded-[1rem] bg-[#e6eeff] group cursor-pointer transition-shadow hover:shadow-xl overflow-hidden flex flex-col">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[4.5rem] lg:text-[5.5rem] text-[#193495] opacity-[0.04] leading-none text-center">
                CHARGING
                <br />
                DOCK
              </span>
            </div>
            <p className="absolute left-6 lg:left-8 top-6 lg:top-8 font-bold text-[#14266e] text-[1.5rem] lg:text-[1.75rem] leading-tight z-10 text-left">
              Charging
              <br />
              Dock
            </p>
            <div className="absolute right-2 lg:right-4 bottom-2 lg:bottom-4 w-[12rem] lg:w-[14rem] h-auto pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
              <img
                alt="Charging Dock"
                className="w-full h-auto object-contain drop-shadow-lg"
                src="/HomePage/AccessoriesSection/charging-dock.png"
              />
            </div>
          </div>

          {/* Card 3: Screen Guard */}
          <div className="relative h-[18rem] lg:h-[20rem] w-full rounded-[1rem] bg-[#e6eeff] group cursor-pointer transition-shadow hover:shadow-xl overflow-hidden flex flex-col">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[4.5rem] lg:text-[6rem] text-[#193495] opacity-[0.04] leading-none text-center">
                SCREEN
                <br />
                GUARD
              </span>
            </div>
            <p className="absolute left-6 lg:left-8 top-6 lg:top-8 font-bold text-[#14266e] text-[1.5rem] lg:text-[1.75rem] leading-tight z-10 text-left">
              Screen
              <br />
              Guard
            </p>
            <div className="absolute right-0 bottom-[-1rem] lg:right-[-1rem] lg:bottom-[-2rem] w-[14rem] lg:w-[16rem] h-auto pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
              <img
                alt="Screen Guard"
                className="w-full h-auto object-contain drop-shadow-md"
                src="/HomePage/AccessoriesSection/screen-guard.png"
              />
            </div>
          </div>

          {/* Card 4: Storage Pouch */}
          <div className="relative h-[18rem] lg:h-[20rem] w-full rounded-[1rem] bg-[#e6eeff] group cursor-pointer transition-shadow hover:shadow-xl overflow-hidden flex flex-col">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[4.5rem] lg:text-[5.5rem] text-[#193495] opacity-[0.04] leading-none text-center">
                STORAGE
                <br />
                POUCH
              </span>
            </div>
            <p className="absolute left-6 lg:left-8 top-6 lg:top-8 font-bold text-[#14266e] text-[1.5rem] lg:text-[1.75rem] leading-tight text-left z-10 w-[8rem]">
              Storage
              <br />
              Pouch
            </p>
            <div className="absolute right-[-1.5rem] lg:right-[-2.5rem] bottom-[-2rem] lg:bottom-[-3rem] w-[15rem] lg:w-[17rem] h-auto pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
              <img
                alt="Storage Pouch"
                className="w-full h-auto object-contain drop-shadow-xl"
                src="/HomePage/AccessoriesSection/storage-pouch.png"
              />
            </div>
          </div>

          {/* Card 5: Accessory Bundle */}
          <div className="relative h-[18rem] lg:h-[20rem] w-full rounded-[1rem] bg-[#e6eeff] group cursor-pointer transition-shadow hover:shadow-xl overflow-hidden flex flex-col">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[4rem] lg:text-[5rem] text-[#193495] opacity-[0.04] leading-none text-center">
                ACCESSORY
                <br />
                BUNDLE
              </span>
            </div>
            <p className="absolute left-6 lg:left-8 top-6 lg:top-8 font-bold text-[#14266e] text-[1.5rem] lg:text-[1.75rem] leading-tight z-10 text-left">
              Accessory
              <br />
              Bundle
            </p>
            <div className="absolute right-[-1rem] lg:right-[0rem] bottom-[1rem] lg:bottom-[2rem] w-[15rem] lg:w-[18rem] h-auto pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
              <img
                alt="Accessory Bundle"
                className="w-full h-auto object-contain drop-shadow-lg"
                src="/HomePage/AccessoriesSection/accessory-bundle.png"
              />
            </div>
          </div>

          {/* Card 6: Replacement Cable */}
          <div className="relative h-[18rem] lg:h-[20rem] w-full rounded-[1rem] bg-[#e6eeff] group cursor-pointer transition-shadow hover:shadow-xl overflow-hidden flex flex-col">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[3.5rem] lg:text-[4.5rem] text-[#193495] opacity-[0.04] leading-none text-center">
                REPLACEMENT
                <br />
                CABLE
              </span>
            </div>
            <p className="absolute left-6 lg:left-8 top-6 lg:top-8 font-bold text-[#14266e] text-[1.5rem] lg:text-[1.75rem] leading-tight text-left z-10 w-[10rem] lg:w-[13rem]">
              Replacement
              <br />
              Cable
            </p>
            <div className="absolute right-[-1rem] lg:right-[-2rem] bottom-[1rem] lg:bottom-[2rem] w-[14rem] lg:w-[18rem] h-auto pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
              <img
                alt="Replacement Cable"
                className="w-full h-auto object-contain drop-shadow-md"
                src="/HomePage/AccessoriesSection/replacement-cable.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
