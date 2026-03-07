import React from "react";
import SaleDealCard from "../../components/SaleDealCard";
import useCountdown from "../../hooks/useCountdown";
import { bestDeals } from "./saleData";

const ClockIcon = () => (
  <svg
    className="w-7 h-7 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f5b800"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BestDealsSection = () => {
  const countdown = useCountdown(2 * 3600 + 30 * 60 + 10);

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-6 lg:px-[49px] py-10"
      aria-label="Best Deals"
    >
      {/* Heading row */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[#193495] text-[40px] lg:text-[48px] font-extrabold font-['Lato'] tracking-wide">
          BEST DEALS
        </h2>
        {/* Countdown badge */}
        <div className="flex items-center gap-2 bg-[#eaf0ff] rounded-[10px] px-5 py-3">
          <ClockIcon />
          <span className="text-[#193495] text-[22px] font-semibold font-['Lato'] tabular-nums">
            {countdown}
          </span>
        </div>
      </div>

      {/* Cards grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestDeals.map((deal) => (
          <SaleDealCard key={deal.id} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default BestDealsSection;
