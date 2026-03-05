import React from 'react';

// Assets
const imgRectangle34 = "http://localhost:3845/assets/fe69b5c64e2bda03d1e88b1019d1a74c9209ed3b.png"; // Left Smartwatches
const img301 = "http://localhost:3845/assets/71b4fe6680eed0ecf878d3f7b57cdeaaec596d4b.png"; // Right charging dock watch
const imgFrame = "http://localhost:3845/assets/1589698eb35ca7628b08d264b61d52de202e4ee4.svg"; // Right arrow icon
const imgFrame1 = "http://localhost:3845/assets/b6df627226db273cf7dfdda8d822ff6038a58a6b.svg"; // Right arrow icon (blue)
const imgGroup348 = "http://localhost:3845/assets/3d80980edc85df0c6545c4fb338ad44b4030c595.svg"; // WD Black Logo
const imgGroup350 = "http://localhost:3845/assets/031a983540e18278b63cd9d94cb6641fab5fde20.svg"; // WD White Logo

const SaleSection = () => {
  return (
    <section className="relative w-full bg-white flex justify-center py-20 font-['Lato',sans-serif]">
      <div className="w-full max-w-[1440px] px-6 lg:px-[59px] flex flex-col lg:flex-row gap-6 justify-between">
        
        {/* Left Banners: Smartwatch Sale */}
        <div 
          className="relative w-full lg:w-[679px] h-[398px] rounded-[22px] overflow-visible flex-shrink-0"
          style={{ backgroundImage: "linear-gradient(236.644deg, rgb(227, 235, 255) 3.4049%, #b4cfff 98.624%)" }}
        >
          {/* Logo */}
          <div className="absolute left-[30px] lg:left-[50px] top-[45px] w-[40px] h-[26px]">
            <img alt="WristDigital Logo" className="w-full h-full object-contain" src={imgGroup348} />
          </div>

          {/* Texts */}
          <div className="absolute left-[30px] lg:left-[50px] top-[95px] flex flex-col">
            <h2 className="font-extrabold text-[24px] text-black mb-2">SHOP SMARTWATCH</h2>
            <p className="font-semibold text-[24px] text-black">& SAVE UP TO</p>
            <p className="font-extrabold text-[64px] text-black leading-tight mt-2">20%</p>
          </div>

          {/* CTA Button */}
          <button className="absolute left-[30px] lg:left-[50px] bottom-[40px] bg-[#193495] w-[237px] h-[65px] rounded-[30px] flex items-center justify-center gap-4 hover:bg-[#0c1950] transition-colors focus:outline-none">
            <span className="font-semibold text-[20px] text-white">SHOP NOW</span>
            <img alt="" className="w-[20px] h-[20px]" src={imgFrame} />
          </button>

          {/* Overlapping Image */}
          <div className="absolute right-[-20px] lg:right-[-60px] top-[-120px] w-[350px] lg:w-[392px] h-[400px] lg:h-[467px] pointer-events-none drop-shadow-2xl">
            <img alt="Apple Watches" className="w-[161%] h-full max-w-none object-contain ml-[-30%]" src={imgRectangle34} />
          </div>
        </div>

        {/* Right Banner: Charging Dock Sale */}
        <div 
          className="relative w-full lg:w-[646px] h-[398px] rounded-[22px] overflow-visible flex-shrink-0"
          style={{ backgroundImage: "linear-gradient(-57.4109deg, rgb(25, 52, 149) 0%, rgb(68, 102, 224) 98.047%)" }}
        >
          {/* Logo */}
          <div className="absolute left-[30px] lg:left-[45px] top-[45px] w-[40px] h-[26px]">
            <img alt="WristDigital Logo" className="w-full h-full object-contain" src={imgGroup350} />
          </div>

          {/* Texts */}
          <div className="absolute left-[30px] lg:left-[45px] top-[90px] flex flex-col z-10 w-[70%]">
            <p className="font-extrabold text-[12px] lg:text-[15px] text-white tracking-wide uppercase mb-2">W2 STAND SMARTWATCH CHARGING DOCK</p>
            <h2 className="font-medium text-[20px] lg:text-[24px] text-white leading-tight mt-1 mb-1">
              DECLUTTER YOUR DESK <br /> & SAVE UP TO
            </h2>
            <p className="font-extrabold text-[50px] lg:text-[64px] text-white leading-none mt-2">30%</p>
          </div>

          {/* CTA Button */}
          <button className="absolute left-[30px] lg:left-[45px] bottom-[40px] bg-[#e3ebff] w-[237px] h-[65px] rounded-[30px] flex items-center justify-center gap-4 hover:bg-white transition-colors focus:outline-none z-10">
            <span className="font-semibold text-[20px] text-[#0c1950]">SHOP NOW</span>
            <img alt="" className="w-[20px] h-[20px]" src={imgFrame1} />
          </button>

          {/* Overlapping Image */}
          <div className="absolute right-[-40px] lg:right-[-90px] top-[30px] lg:top-[60px] w-[300px] lg:w-[357px] h-[300px] lg:h-[376px] pointer-events-none drop-shadow-xl z-0">
            <img alt="Charging Dock" className="w-[179%] h-[212%] max-w-none object-contain ml-[-40%] mt-[-55%]" src={img301} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SaleSection;
