import React from "react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Revenue", value: "$42,500.00", icon: "dollar" },
    { label: "Total Orders", value: "324", icon: "order" },
    { label: "Active Users", value: "1,240", icon: "users" },
    { label: "Products in Stock", value: "85", icon: "box" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-[28px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950]">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-center"
          >
            <h3 className="text-gray-500 font-['Lato:Regular',sans-serif] text-[14px]">
              {stat.label}
            </h3>
            <p className="text-[28px] font-['Alegreya_Sans:Bold',sans-serif] text-[#193495] mt-1.5">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] min-h-[440px] flex items-center justify-center relative overflow-hidden group">
         {/* Subtle background gradient to make the empty state look better */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#193495]/[0.02] to-transparent pointer-events-none" />
         
         <div className="text-center z-10 transition-transform duration-500 group-hover:scale-105">
           <div className="w-20 h-20 bg-blue-50 text-[#193495] rounded-full flex items-center justify-center mx-auto mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
           </div>
           <p className="text-[#0c1950] font-['Alegreya_Sans:Bold',sans-serif] text-[20px] mb-1">
             Analytics Chart
           </p>
           <p className="text-gray-400 font-['Lato:Regular',sans-serif] text-[14px]">
             (Chart integration placeholder matching UI guidelines)
           </p>
         </div>
      </div>
    </div>
  );
}
