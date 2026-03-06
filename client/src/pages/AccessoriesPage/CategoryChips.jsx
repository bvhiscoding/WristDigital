import React from "react";

const categories = [
  {
    id: "straps",
    title: "Watch\nStraps",
    watermark: "WATCH\nSTRAPS",
    image: "/accessories/watch-straps.png",
    imgClass: "w-[291px] right-0 top-[11px] scale-y-[-1] rotate-180",
    textClass: "top-[13.77%] left-[9.43%]"
  },
  {
    id: "docks",
    title: "Charging\nDock",
    watermark: "CHARGING\nDOCK",
    image: "/accessories/charging-dock.png",
    imgClass: "w-[211px] right-[7.13%] top-[11px]",
    textClass: "top-[22.3%] left-[6.21%]"
  },
  {
    id: "guards",
    title: "Screen\nGuard",
    watermark: "SCREEN\nGUARD",
    image: "/accessories/screen-guard.png",
    imgClass: "w-[288px] right-[0.92%] top-[11px]",
    textClass: "top-[13.44%] left-[5.06%]"
  },
  {
    id: "pouches",
    title: "Storage\nPouch",
    watermark: "STORAGE\nPOUCH",
    image: "/accessories/storage-pouch.png",
    imgClass: "w-[268px] right-[36.09%] top-[12px]",
    textClass: "top-[14.43%] left-[8.28%]"
  },
  {
    id: "bundles",
    title: "Accessory\nBundle",
    watermark: "ACCESSORY\nBUNDLE",
    image: "/accessories/accessory-bundle.png",
    imgClass: "w-[365px] right-[2%] top-[50%] -translate-y-[45%]",
    textClass: "top-[24.59%] left-[6.44%]"
  },
  {
    id: "cables",
    title: "Replacement\nCable",
    watermark: "REPLACEMENT\nCABLE",
    image: "/accessories/replacement-cable.png",
    imgClass: "w-[275px] right-[36.55%] top-0 scale-y-[-1] rotate-180",
    textClass: "top-[26.23%] left-[8.28%]"
  },
];

const brands = [
  { id: "apple", logo: "/accessories/apple.png", w: "80px", h: "31px" },
  { id: "huawei", logo: "/accessories/huawei.png", w: "103.5px", h: "40.7px" },
  { id: "xiaomi", logo: "/accessories/xiaomi.png", w: "103.5px", h: "40.7px" },
  { id: "redmi", logo: "/accessories/redmi.png", w: "103.5px", h: "40.7px" },
  { id: "garmin", logo: "/accessories/garmin.png", w: "102px", h: "36px" },
  { id: "samsung", logo: "/accessories/samsung.png", w: "103.5px", h: "40.7px" },
];

const CategoryChips = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[48px] py-[60px]" aria-label="Accessories Categories">
      
      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[19px] mb-[120px]">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="h-[305px] bg-[#e3ebff] rounded-[10px] relative overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            {/* Watermark text */}
            <div 
              className={`absolute font-['Lato'] font-extrabold text-[black]/[0.03] leading-[1] whitespace-pre-wrap pointer-events-none z-0 ${cat.textClass}`}
              style={{ fontSize: cat.id === 'bundles' ? '64px' : cat.id === 'cables' ? '48px' : cat.id === 'docks' ? '70px' : cat.id === 'pouches' ? '80px' : '96px' }}
            >
              {cat.watermark}
            </div>

            {/* Product Image */}
            <img 
              src={cat.image} 
              alt={cat.title.replace('\n', ' ')}
              className={`absolute object-contain z-10 pointer-events-none drop-shadow-xl ${cat.imgClass}`}
            />

            {/* Title Text */}
            <div className="absolute left-[36px] bottom-[30px] font-['Lato'] font-bold text-[#193495] text-[32px] leading-tight z-20 whitespace-pre-wrap drop-shadow-sm">
              {cat.title}
            </div>
          </div>
        ))}
      </div>

      {/* Brand Chips */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {brands.map((brand) => (
          <div 
            key={brand.id} 
            className="flex items-center justify-center h-[57px] w-[152px] border-2 border-[#1a2530] rounded-[15px] cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <img src={brand.logo} alt={brand.id} className="object-contain" style={{ width: brand.w, height: brand.h }} />
          </div>
        ))}

        {/* More Options (...) */}
        <div className="flex items-center justify-center h-[57px] w-[57px] border-2 border-[#1a2530] rounded-[15px] cursor-pointer hover:bg-gray-50 transition-colors">
          <span className="font-['Lato'] text-[24px] tracking-widest text-[#1a2530] mb-2">...</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryChips;
