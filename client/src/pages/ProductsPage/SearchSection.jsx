import React from "react";

const SearchSection = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 mt-12 mb-8">
      <div className="relative w-full h-[350px] rounded-[20px] overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image (Snowboarding scene) */}
        <img
          src="/ProductsPage/snowboarding-bg.png"
          alt="Snowboarding"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>

        {/* Main Content inside the banner */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1000px]">
          <h2 className="text-white text-xl md:text-2xl lg:text-[24px] font-['Lato'] leading-relaxed mb-10 max-w-[900px] drop-shadow-md">
            Search across our full range of smartwatches — explore advanced
            features, compare innovations, and find the perfect fit for your
            lifestyle.
          </h2>

          {/* Search Bar Input Container */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-[800px] h-[70px] bg-white/80 backdrop-blur-sm rounded-full flex items-center px-8 shadow-lg transition-transform hover:scale-[1.02]"
          >
            <button type="submit" className="shrink-0" aria-label="Search products">
              <img
                src="/ProductsPage/search-icon.svg"
                alt="Search"
                className="w-8 h-8 opacity-70"
              />
            </button>
            <input
              type="text"
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder="Search..."
              className="w-full h-full bg-transparent border-none outline-none text-[#193495] text-xl ml-6 placeholder-[#193495]/60 font-['Lato']"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
