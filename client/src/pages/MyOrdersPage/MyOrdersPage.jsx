import React, { useState } from "react";
import OrderCard from "./OrderCard";

const TABS = [
  "Pending (1)",
  "Processing",
  "In Transit",
  "Completed",
  "Cancelled",
];

const MyOrdersPage = () => {
  const [activeTab, setActiveTab] = useState("Pending (1)");

  return (
    <div className="w-full min-h-screen bg-white pb-20 pt-[120px] lg:pt-[151px]">
      <div className="max-w-[1211px] mx-auto px-5 xl:px-0">
        {/* Header: Title and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 lg:mb-16">
          <h1 className="text-[28px] md:text-[36px] font-[900] text-[#193495] uppercase tracking-wide">
            MY ORDERS
          </h1>

          <div className="relative w-full md:w-[332px]">
            <input
              type="text"
              placeholder="Search your order..."
              className="w-full h-[48px] rounded-full border border-[#193495] bg-[#eaf0ff]/30 pl-6 pr-12 text-[15px] text-[#193495]/60 outline-none focus:ring-1 focus:ring-[#193495] transition-all"
            />
            <button className="absolute right-[22px] top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
              <img
                src="/MyOrders/search_icon.svg"
                alt="Search"
                className="w-[22px] h-[22px]"
              />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="flex items-center justify-between min-w-[700px] lg:min-w-full border-b-[1.5px] border-[#0c1950]/20">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[18px] lg:text-[24px] font-semibold transition-colors duration-200 relative whitespace-nowrap px-2 
                  ${isActive ? "text-[#193495]" : "text-[#0c1950] opacity-70 hover:opacity-100"}`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute left-0 right-0 bottom-[-1.5px] h-[3px] bg-[#193495]"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Order Cards List */}
        <div className="flex flex-col gap-8 w-full">
          <OrderCard />
          {/* Add more <OrderCard /> here if needed in the future */}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
