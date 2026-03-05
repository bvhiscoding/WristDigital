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
      <div className="w-full max-w-[1440px] px-6 lg:px-[45px] flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-[60px] lg:mb-[90px]">
          <h2 className="text-[#102270] text-[30px] lg:text-[36px] font-medium leading-tight">
            CHOOSE YOUR
          </h2>
          <h3 className="text-[#102270] text-[36px] lg:text-[40px] font-extrabold leading-tight">
            ACCESSORIES
          </h3>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] w-full max-w-[1363px]">
          
          {/* Card 1: Watch Straps */}
          <div className="relative h-[305px] w-full rounded-[10px] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[80px] lg:text-[96px] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap px-4">WATCH<br/>STRAPS</span>
            </div>
            <p className="absolute left-[36px] top-[84px] font-bold text-[#193495] text-[32px] leading-tight z-10 text-left">
              Watch<br/>Straps
            </p>
            <div className="absolute right-0 top-[11px] w-[291px] h-[294px] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-right">
                <img alt="Watch Straps" className="absolute w-[183.99%] h-[227.47%] max-w-none left-[-45.83%] top-[-60.91%]" src={img311} />
            </div>
          </div>

          {/* Card 2: Charging Dock */}
          <div className="relative h-[305px] w-full rounded-[10px] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[60px] lg:text-[70px] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">CHARGING<br/>DOCK</span>
            </div>
            <p className="absolute left-[55px] top-[84px] font-bold text-[#193495] text-[32px] leading-tight z-10 w-[120px] text-left">
              Charging<br/>Dock
            </p>
            <div className="absolute right-[31px] top-[11px] w-[211px] h-[278px] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-bottom-right">
                <img alt="Charging Dock" className="absolute w-[202.46%] h-[192.09%] max-w-none left-[-46.02%] top-[-46.4%]" src={img321} />
            </div>
          </div>

          {/* Card 3: Screen Guard */}
          <div className="relative h-[305px] w-full rounded-[10px] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[80px] lg:text-[96px] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">SCREEN<br/>GUARD</span>
            </div>
            <p className="absolute left-[50px] top-[167px] font-bold text-[#193495] text-[32px] leading-tight z-10 text-left">
              Screen<br/>Guard
            </p>
            <div className="absolute right-[4px] top-[11px] w-[278px] h-[270px] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-right">
                <img alt="Screen Guard" className="absolute w-[168.22%] h-[216%] max-w-none left-[-33.02%] top-[-57.92%]" src={img351} />
            </div>
          </div>

          {/* Card 4: Storage Pouch */}
          <div className="relative h-[305px] w-full rounded-[10px] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-extrabold text-[70px] lg:text-[80px] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">STORAGE<br/>POUCH</span>
            </div>
            <p className="absolute right-[46px] top-[78px] font-bold text-[#193495] text-[32px] leading-tight text-right z-10">
              Storage<br/>Pouch
            </p>
            <div className="absolute left-[10px] top-[12px] w-[268px] h-[281px] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-left">
                <img alt="Storage Pouch" className="absolute w-[169.28%] h-[201.79%] max-w-none left-[-36.52%] top-[-51.12%]" src={img361} />
            </div>
          </div>

          {/* Card 5: Accessory Bundle */}
          <div className="relative h-[305px] w-full rounded-[10px] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-4">
              <span className="font-extrabold text-[50px] lg:text-[64px] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">ACCESSORY<br/>BUNDLE</span>
            </div>
            <p className="absolute left-0 right-0 text-center top-[28px] font-bold text-[#193495] text-[32px] leading-tight z-10">
              Accessory Bundle
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 top-[97px] w-[366px] h-[202px] pointer-events-none z-20 flex items-center justify-center transition-transform group-hover:scale-105 origin-bottom">
                <div className="flex-none h-[365px] w-[200px] -rotate-90 relative">
                  <img alt="Accessory Bundle" className="absolute w-[266.01%] h-[182.68%] max-w-none left-[-80.05%] top-[-41.95%]" src={img371} />
                </div>
            </div>
          </div>

          {/* Card 6: Replacement Cable */}
          <div className="relative h-[305px] w-full rounded-[10px] bg-[#e3ebff] group cursor-pointer transition-transform hover:shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-4">
              <span className="font-extrabold text-[40px] lg:text-[48px] text-[#193495] opacity-[0.03] leading-none text-center whitespace-pre-wrap">REPLACEMENT<br/>CABLE</span>
            </div>
            <p className="absolute right-[27px] top-[34px] font-bold text-[#193495] text-[32px] leading-tight text-right w-[200px] z-10">
              Replacement<br/>Cable
            </p>
            <div className="absolute left-[1px] top-0 w-[275px] h-[301px] pointer-events-none z-20 transition-transform group-hover:scale-105 origin-top-left">
                <img alt="Replacement Cable" className="absolute w-[149.58%] h-[170.75%] max-w-none left-[-40.58%] top-[-35.84%]" src={img3621} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AccessoriesSection;
