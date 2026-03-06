import React from "react";

const OrderCard = () => {
  return (
    <div className="border border-[#193495]/60 rounded-[10px] p-6 lg:p-8 w-full group">
      <div className="flex flex-col xl:flex-row justify-between gap-8 xl:gap-[130px]">
        {/* Left Side */}
        <div className="flex flex-col gap-5 lg:gap-7 w-full xl:w-[50%]">
          {/* Order Number */}
          <div>
            <span className="text-[16px] lg:text-[18px] text-[#0c1950]/75 font-semibold">
              Order Number:{" "}
            </span>
            <span className="text-[16px] lg:text-[18px] text-[#0c1950] font-semibold">
              #HJL041506
            </span>
          </div>

          {/* Date & Delivery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex flex-col">
              <p className="text-[16px] lg:text-[18px] text-[#0c1950]/75 font-semibold mb-1">
                Order Date:
              </p>
              <p className="text-[16px] lg:text-[18px] text-[#0c1950] font-semibold">
                11/11/2025 - 12:22 AM
              </p>
            </div>
            <div className="sm:border-l sm:border-[#0c1950]/20 sm:pl-8 flex flex-col">
              <p className="text-[16px] lg:text-[18px] text-[#0c1950]/75 font-semibold mb-1">
                Estimated Delivery:
              </p>
              <p className="text-[16px] lg:text-[18px] text-[#0c1950] font-semibold">
                13 - 15/11/2025
              </p>
            </div>
          </div>

          {/* Ship To */}
          <div>
            <span className="text-[16px] lg:text-[18px] text-[#0c1950]/75 font-semibold">
              Ship To:{" "}
            </span>
            <span className="text-[16px] lg:text-[18px] text-[#0c1950] font-semibold">
              km9, Nguyen Trai Street, Dai Mo, Hanoi
            </span>
          </div>

          {/* Payment Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex flex-col">
              <p className="text-[16px] lg:text-[18px] text-[#0c1950]/75 font-semibold mb-1">
                Payment Method:
              </p>
              <p className="text-[16px] lg:text-[18px] text-[#0c1950] font-medium">
                Credit Card (xxxx xxxx xxxx 1226)
              </p>
            </div>
            <div className="sm:border-l sm:border-[#0c1950]/20 sm:pl-8 flex flex-col">
              <p className="text-[16px] lg:text-[18px] text-[#0c1950]/75 font-semibold mb-1">
                Payment Status:
              </p>
              <p className="text-[16px] lg:text-[18px] text-[#0c1950] font-medium">
                Paid
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-10 w-full xl:w-[50%]">
          <div className="w-[120px] lg:w-[150px] shrink-0 relative flex justify-center items-center">
            <img
              src="/MyOrders/watch.png"
              alt="Apple Watch"
              className="w-full max-w-full h-auto object-contain transform scale-[1.15]"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2 text-center sm:text-left">
            <h3 className="text-[16px] lg:text-[18px] text-[#0c1950] font-semibold leading-snug">
              Apple Watch Ultra 3 (GPS + Cellular) 49mm Titanium Case Micro-LED
              Display
            </h3>
            <div className="flex flex-col text-[12px] leading-[1.6] mt-2">
              <p>
                <span className="text-[#1a2530] font-bold">Color: </span>
                <span className="text-[#1a2530]/70 font-medium">
                  Natural Titanium
                </span>
              </p>
              <p>
                <span className="text-[#1a2530] font-bold">Watch Bands: </span>
                <span className="text-[#1a2530]/70 font-medium">
                  Milan Titan Loop
                </span>
              </p>
              <p>
                <span className="text-[#1a2530] font-bold">
                  WristDigital Care:{" "}
                </span>
                <span className="text-[#1a2530]/70 font-medium">
                  Standard Warranty Coverage
                </span>
              </p>
            </div>
            <p className="text-[16px] text-[#0c1950] font-bold mt-2">
              26.999.000<span className="underline">đ</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-[#0c1950]/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[18px] lg:text-[20px] text-[#0c1950]/75 font-semibold">
            Total Amount:
          </span>
          <span className="text-[18px] lg:text-[20px] text-[#0c1950] font-bold">
            26.999.000<span className="underline">đ</span>
          </span>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#eaf0ff]/50 transition duration-200 cursor-pointer">
          <img
            src="/MyOrders/download_icon.svg"
            alt="Download"
            className="w-[20px] h-[20px]"
          />
          <span className="text-[13px] text-[#0c1950] font-medium">
            Download Invoice
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
