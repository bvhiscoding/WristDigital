import React from 'react';

// Assets
const img3621 = "http://localhost:3845/assets/7147d6811b53bd87478a54bbf7043ee563627440.png"; // Replacement Cable
const img371 = "http://localhost:3845/assets/2290728f7221f17074fdc17b5947856fc97fec22.png"; // Accessory Bundle
const img361 = "http://localhost:3845/assets/edf92bb156505b94da721732cff4892c7f2a8a73.png"; // Storage Pouch
const img351 = "http://localhost:3845/assets/3d80958b7ae38e958582ae466c4c850bc7a5c3fc.png"; // Screen Guard
const img321 = "http://localhost:3845/assets/f5b1d0ef2738bcccddfddbd7647edcbd1c916290.png"; // Charging Dock
const img311 = "http://localhost:3845/assets/d7129d1c746f868531bc654df7a2446788ea236b.png"; // Watch Straps

const AccessoriesSection = () => {
  return (
    <section className="relative w-full bg-white flex justify-center py-20 font-['Lato',sans-serif]">
      {/* Main Container */}
      <div className="w-full max-w-[90rem] px-6 lg:px-[2.8125rem] flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-[3.75rem] lg:mb-[5.625rem]">
          <h2 className="text-[#102270] text-[1.875rem] lg:text-[2.25rem] font-medium leading-tight">
            CHOOSE YOUR
          </h2>
          <h3 className="text-[#102270] text-[2.25rem] lg:text-[2.5rem] font-extrabold leading-tight">
            ACCESSORIES
          </h3>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.8125rem] w-full max-w-[85.1875rem]">
          
          {/* Card 1: Watch Straps */}
          <div className="relative h-[15rem] sm:h-[19.0625rem] w-full rounded-[0.625rem] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[4rem] lg:text-[6rem] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap px-4">WATCH<br/>STRAPS</span>
            </div>
            <p className="absolute left-[1.5rem] lg:left-[2.25rem] top-[3rem] lg:top-[5.25rem] font-bold text-[#193495] text-[1.5rem] lg:text-[2rem] leading-tight z-10 text-left">
              Watch<br/>Straps
            </p>
            <div className="absolute right-0 top-[0.6875rem] w-[15rem] lg:w-[18.1875rem] h-[15rem] lg:h-[18.375rem] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-right">
                <img alt="Watch Straps" className="absolute w-[183.99%] h-[227.47%] max-w-none left-[-45.83%] top-[-60.91%]" src={img311} />
            </div>
          </div>

          {/* Card 2: Charging Dock */}
          <div className="relative h-[15rem] sm:h-[19.0625rem] w-full rounded-[0.625rem] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[3rem] lg:text-[4.375rem] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">CHARGING<br/>DOCK</span>
            </div>
            <p className="absolute left-[1.5rem] lg:left-[3.4375rem] top-[3rem] lg:top-[5.25rem] font-bold text-[#193495] text-[1.5rem] lg:text-[2rem] leading-tight z-10 w-[7.5rem] text-left">
              Charging<br/>Dock
            </p>
            <div className="absolute right-[1rem] lg:right-[1.9375rem] top-[0.6875rem] w-[11rem] lg:w-[13.1875rem] h-[15rem] lg:h-[17.375rem] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
                <img alt="Charging Dock" className="absolute w-[202.46%] h-[192.09%] max-w-none left-[-46.02%] top-[-46.4%]" src={img321} />
            </div>
          </div>

          {/* Card 3: Screen Guard */}
          <div className="relative h-[15rem] sm:h-[19.0625rem] w-full rounded-[0.625rem] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[4rem] lg:text-[6rem] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">SCREEN<br/>GUARD</span>
            </div>
            <p className="absolute left-[1.5rem] lg:left-[3.125rem] top-[8rem] lg:top-[10.4375rem] font-bold text-[#193495] text-[1.5rem] lg:text-[2rem] leading-tight z-10 text-left">
              Screen<br/>Guard
            </p>
            <div className="absolute right-[0.25rem] top-[0.6875rem] w-[14rem] lg:w-[17.375rem] h-[14rem] lg:h-[16.875rem] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-right">
                <img alt="Screen Guard" className="absolute w-[168.22%] h-[216%] max-w-none left-[-33.02%] top-[-57.92%]" src={img351} />
            </div>
          </div>

          {/* Card 4: Storage Pouch */}
          <div className="relative h-[15rem] sm:h-[19.0625rem] w-full rounded-[0.625rem] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[3.5rem] lg:text-[5rem] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">STORAGE<br/>POUCH</span>
            </div>
            <p className="absolute right-[1.5rem] lg:right-[2.875rem] top-[3rem] lg:top-[4.875rem] font-bold text-[#193495] text-[1.5rem] lg:text-[2rem] leading-tight text-right z-10">
              Storage<br/>Pouch
            </p>
            <div className="absolute left-[0.5rem] top-[0.75rem] w-[14rem] lg:w-[16.75rem] h-[14rem] lg:h-[17.5625rem] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-left">
                <img alt="Storage Pouch" className="absolute w-[169.28%] h-[201.79%] max-w-none left-[-36.52%] top-[-51.12%]" src={img361} />
            </div>
          </div>

          {/* Card 5: Accessory Bundle */}
          <div className="relative h-[15rem] sm:h-[19.0625rem] w-full rounded-[0.625rem] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-4">
              <span className="font-extrabold text-[2.5rem] lg:text-[4rem] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">ACCESSORY<br/>BUNDLE</span>
            </div>
            <p className="absolute left-0 right-0 text-center top-[1rem] lg:top-[1.75rem] font-bold text-[#193495] text-[1.5rem] lg:text-[2rem] leading-tight z-10">
              Accessory Bundle
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 top-[5rem] lg:top-[6.0625rem] w-[18rem] lg:w-[22.875rem] h-[10rem] lg:h-[12.625rem] pointer-events-none z-20 flex items-center justify-center transition-transform group-hover:scale-105 origin-bottom">
                <div className="flex-none h-[18rem] lg:h-[22.8125rem] w-[10rem] lg:w-[12.5rem] -rotate-90 relative">
                  <img alt="Accessory Bundle" className="absolute w-[266.01%] h-[182.68%] max-w-none left-[-80.05%] top-[-41.95%]" src={img371} />
                </div>
            </div>
          </div>

          {/* Card 6: Replacement Cable */}
          <div className="relative h-[15rem] sm:h-[19.0625rem] w-full rounded-[0.625rem] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-4">
              <span className="font-extrabold text-[2rem] lg:text-[3rem] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">REPLACEMENT<br/>CABLE</span>
            </div>
            <p className="absolute right-[1rem] lg:right-[1.6875rem] top-[1.5rem] lg:top-[2.125rem] font-bold text-[#193495] text-[1.5rem] lg:text-[2rem] leading-tight text-right w-[10rem] lg:w-[12.5rem] z-10">
              Replacement<br/>Cable
            </p>
            <div className="absolute left-[0.0625rem] top-0 w-[17.1875rem] h-[18.8125rem] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-top-left">
                <img alt="Replacement Cable" className="absolute w-[149.58%] h-[170.75%] max-w-none left-[-40.58%] top-[-35.84%]" src={img3621} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AccessoriesSection;
