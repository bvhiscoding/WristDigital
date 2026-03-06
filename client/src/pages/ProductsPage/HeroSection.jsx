import React from 'react';

const FeatureTag = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-2 min-w-0">
    <img src={icon} alt="" aria-hidden="true" className="w-9 h-9 object-contain" />
    <span className="text-white text-[13px] font-['Lato'] uppercase tracking-wide whitespace-nowrap">
      {label}
    </span>
  </div>
);

const Divider = () => (
  <div className="w-[1px] self-stretch bg-white/30 mx-1" />
);

const FeatureBox = ({ features, extra = '' }) => (
  <div
    className={`flex items-center gap-8 bg-[rgba(25,52,149,0.41)] backdrop-blur-md rounded-[30px] py-6 px-10 shadow-lg border border-white/20 ${extra}`}
  >
    {features.map((f, i) => (
      <React.Fragment key={f.label}>
        {i > 0 && <Divider />}
        <FeatureTag icon={f.icon} label={f.label} />
      </React.Fragment>
    ))}
  </div>
);

const HeroSection = () => {
  const bottomFeatures = [
    { icon: '/ProductsPage/06e84b61f2f34fd157219e699a940bbae2e3da6f.svg', label: 'HEART RATE' },
    { icon: '/ProductsPage/6e459ac133f743d1127b6fb1743bc32265b43e79.svg', label: 'WATER PROOF' },
    { icon: '/ProductsPage/6b6d6f7302d97f8ae75c51ce9231a719d7d30e26.svg', label: 'DIRECT CALLING' },
  ];
  const upperFeatures = [
    { icon: '/ProductsPage/06e84b61f2f34fd157219e699a940bbae2e3da6f.svg', label: 'HEART RATE' },
    { icon: '/ProductsPage/5866e61f227faaab2067b972093ac46878227ed1.svg', label: 'BUILT-IN GPS' },
    { icon: '/ProductsPage/c8569d58f546e4fc596736bb6fab00e184d2c4b9.svg', label: 'e-SIM' },
  ];

  return (
    <section
      className="relative w-full bg-[#dee4f4] overflow-hidden"
      style={{ minHeight: '750px' }}
    >
      {/* Account for fixed 100px header */}
      <div className="h-[100px]" aria-hidden="true" />

      {/* Decorative SVG background shape */}
      <img
        src="/ProductsPage/40d011ffb8e5ff57977ef1e5b857d09289ec8c4a.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[75%] max-w-[1080px] h-auto z-0 mix-blend-multiply opacity-40 pointer-events-none"
      />

      {/* Left model image */}
      <img
        src="/ProductsPage/dbd051b12e6da7dbf3591b2c013e9905d845ee06.png"
        alt="Person wearing smartwatch"
        className="absolute bottom-0 left-0 h-[76%] object-contain object-bottom select-none z-10 -scale-x-100"
      />

      {/* Right model image */}
      <img
        src="/ProductsPage/bcbdbd2a8a967e0374c97004ade1822d037198d3.png"
        alt="Person looking at smartwatch"
        className="absolute bottom-0 right-0 h-[95%] max-h-[720px] object-contain object-bottom select-none z-10"
      />

      {/* Central text block */}
      <div className="relative z-20 flex flex-col items-center text-center pt-10 pb-0 px-4 max-w-[900px] mx-auto">
        <h1 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#193495] leading-snug mb-5 font-['Lato']">
          Varieties-Quality are Our Priorities
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[24px] text-[#193495] font-['Lato'] leading-[1.45] max-w-[680px]">
          Discover smartwatches designed to elevate your everyday routine. Enjoy
          intuitive features, real-time health insights, and seamless connectivity —
          all wrapped in refined craftsmanship that brings comfort, elegance, and
          intelligence to every moment.
        </p>
      </div>

      {/* Feature Boxes — positioned at bottom-center but staggered vertically */}
      <div className="relative z-20 flex flex-col items-center gap-0 mt-auto">
        {/* Upper box (shifted right in Figma) */}
        <div className="flex justify-center w-full translate-x-[6%]">
          <FeatureBox features={upperFeatures} />
        </div>

        {/* Lower box (shifted left, placed below) */}
        <div className="flex justify-center w-full -translate-x-[6%] mt-3 mb-10">
          <FeatureBox features={bottomFeatures} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
