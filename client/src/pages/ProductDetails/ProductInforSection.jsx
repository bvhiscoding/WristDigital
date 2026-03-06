import React, { useState } from "react";

export default function ProductInforSection() {
  const [selectedColor, setSelectedColor] = useState("Natural Titanium");
  const [selectedBand, setSelectedBand] = useState("Milan Titan Loop");
  const [selectedCare, setSelectedCare] = useState(
    "Standard Warranty Coverage",
  );

  // Format the total price string based on care option
  const rawPrice = 26999000;
  const carePrice = selectedCare === "WristDigital Care+" ? 560000 : 0;
  const totalPrice = rawPrice + carePrice;
  const formattedPrice = new Intl.NumberFormat("vi-VN")
    .format(totalPrice)
    .replace(/,/g, ".");

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8 lg:py-12 mt-[100px] transition-all duration-300">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-[16px] md:text-[20px] whitespace-nowrap overflow-x-auto pb-2">
        <span className="font-semibold text-black cursor-pointer hover:underline">
          Products List
        </span>
        <img
          src="/assets/product-info/icon-arrow-right.svg"
          alt=""
          className="w-5 h-5 md:w-6 md:h-6"
        />
        <span className="text-black">Product Detail: </span>
        <span className="text-brandBlue ml-1 uppercase font-medium">
          Apple Watch Ultra 3
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        {/* ======== LEFT COLUMN ======== */}
        <div className="w-full lg:w-[580px] shrink-0 flex flex-col items-center lg:items-stretch">
          {/* Main Image */}
          <div className="w-full h-auto aspect-[580/623] relative bg-[#f1f1f1] rounded-[10px] overflow-hidden">
            <img
              src="/assets/product-info/main-product.png"
              alt="Apple Watch Ultra 3"
              className="absolute w-[123.16%] h-[129.18%] max-w-none left-[-11.96%] top-[-17.06%] object-contain pointer-events-none"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex w-full justify-between items-center mt-6 gap-2 sm:gap-4 overflow-x-auto px-1 py-1">
            <img
              src="/assets/product-info/thumbnail-2.png"
              alt="Thumb 1"
              className="w-[80px] sm:w-[112px] h-[80px] sm:h-[112px] rounded-[10px] object-cover shrink-0 cursor-pointer border-2 border-brandBlue/30 hover:border-brandBlue transition-colors"
            />
            <img
              src="/assets/product-info/thumbnail-3.png"
              alt="Thumb 2"
              className="w-[80px] sm:w-[112px] h-[80px] sm:h-[112px] rounded-[10px] object-cover shrink-0 cursor-pointer border-2 border-transparent hover:border-brandBlue/30 transition-colors"
            />
            <img
              src="/assets/product-info/thumbnail-4.png"
              alt="Thumb 3"
              className="w-[80px] sm:w-[112px] h-[80px] sm:h-[112px] rounded-[10px] object-cover shrink-0 cursor-pointer border-2 border-transparent hover:border-brandBlue/30 transition-colors"
            />
            <img
              src="/assets/product-info/thumbnail-5.png"
              alt="Thumb 4"
              className="w-[80px] sm:w-[112px] h-[80px] sm:h-[112px] rounded-[10px] object-cover shrink-0 cursor-pointer border-2 border-transparent hover:border-brandBlue/30 transition-colors"
            />
            <img
              src="/assets/product-info/thumbnail-1.png"
              alt="Thumb 5"
              className="w-[80px] sm:w-[112px] h-[80px] sm:h-[112px] rounded-[10px] object-cover shrink-0 cursor-pointer border-2 border-transparent hover:border-brandBlue/30 transition-colors"
            />
          </div>

          <p className="text-brandBlue text-center font-medium mt-4 lg:mt-6 text-[18px] lg:text-[20px] cursor-pointer hover:underline mb-8">
            Click to see full view
          </p>

          <div className="w-full flex flex-col text-[16px] lg:text-[20px] text-[#1a2530] font-medium leading-[1.8] mt-2 lg:mt-8">
            <p>
              <span className="font-bold text-black">Color: </span>
              {selectedColor}
            </p>
            <p>
              <span className="font-bold text-black">Watch Bands: </span>
              {selectedBand}
            </p>
            <p>
              <span className="font-bold text-black whitespace-pre">
                WristDigital Care:{" "}
              </span>
              <span className="whitespace-normal block sm:inline">
                {selectedCare}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between border-t-2 border-brandBlue/50 pt-6 mt-8">
            <span className="text-[20px] lg:text-[24px] font-semibold text-black">
              Total:
            </span>
            <span className="text-[28px] lg:text-[36px] font-semibold text-brandBlue">
              {formattedPrice}
              <span className="underline decoration-solid">đ</span>
            </span>
          </div>

          <button className="w-full py-4 text-[20px] lg:text-[24px] text-brandBlue border-[2px] border-brandBlue rounded-[10px] mt-8 hover:bg-brandSoft/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brandBlue/50">
            Add to Cart
          </button>

          <button className="w-full py-4 text-[20px] lg:text-[24px] text-white bg-brandBlue rounded-[10px] mt-4 hover:bg-brandNavy transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-brandBlue/50">
            Buy Now
          </button>
        </div>

        {/* ======== RIGHT COLUMN ======== */}
        <div className="flex-1 flex flex-col lg:pl-4 pt-2">
          {/* Product Title */}
          <h1 className="text-[28px] lg:text-[36px] leading-[1.2] font-bold text-black mb-8 max-w-[650px]">
            Apple Watch Ultra 3 (GPS + Cellular) 49mm Titanium Case Micro-LED
            Display
          </h1>

          {/* Colors Selection */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[20px] lg:text-[24px] font-semibold text-black">
              Color:{" "}
              <span className="text-brandBlue font-normal">
                {selectedColor}
              </span>
            </div>
            <div className="flex gap-4">
              <button
                className={`w-[56px] h-[56px] rounded-full flex items-center justify-center border-[2px] transition ${selectedColor === "Natural Titanium" ? "border-brandBlue p-1 box-border" : "border-transparent"}`}
                onClick={() => setSelectedColor("Natural Titanium")}
                aria-label="Select Natural Titanium Color"
              >
                <img
                  src="/assets/product-info/color-natural.svg"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </button>
              <button
                className={`w-[56px] h-[56px] rounded-full flex items-center justify-center border-[2px] transition ${selectedColor === "Black Titanium" ? "border-brandBlue p-1 box-border" : "border-transparent"}`}
                onClick={() => setSelectedColor("Black Titanium")}
                aria-label="Select Black Titanium Color"
              >
                <img
                  src="/assets/product-info/color-black.svg"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Watch Bands Selection */}
          <div className="text-[20px] lg:text-[24px] font-semibold text-black mt-12 mb-6">
            Watch Bands:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full lg:max-w-max">
            <BandCard
              title="Milan Titan Loop"
              price="26.999.000"
              img="/assets/product-info/milan-titan-loop.png"
              dots="/assets/product-info/milan-titan-loop-colors.png"
              selected={selectedBand === "Milan Titan Loop"}
              onClick={() => setSelectedBand("Milan Titan Loop")}
            />
            <BandCard
              title="Trail Loop"
              price="23.999.000"
              img="/assets/product-info/trail-loop.png"
              dots="/assets/product-info/trail-loop-colors.png"
              rotateDots
              selected={selectedBand === "Trail Loop"}
              onClick={() => setSelectedBand("Trail Loop")}
            />
            <BandCard
              title="Alpine Loop"
              price="23.999.000"
              img="/assets/product-info/alpine-loop.png"
              dots="/assets/product-info/alpine-loop-colors.png"
              rotateDots
              selected={selectedBand === "Alpine Loop"}
              onClick={() => setSelectedBand("Alpine Loop")}
            />
            <BandCard
              title="Ocean Loop"
              price="23.999.000"
              img="/assets/product-info/ocean-loop.png"
              dots="/assets/product-info/ocean-loop-colors.png"
              rotateDots
              selected={selectedBand === "Ocean Loop"}
              onClick={() => setSelectedBand("Ocean Loop")}
            />
          </div>

          {/* WristDigital Care Selection */}
          <div className="text-[20px] lg:text-[24px] font-bold text-black mt-14 mb-6">
            WristDigital Care:
          </div>

          <div className="flex flex-col gap-6 w-full lg:max-w-[516px]">
            <CareCard
              title="Standard Warranty Coverage"
              desc="Covers technical defects resulting from manufacturing errors (mainboard failure, touch screen issues, manufacturer-related battery defects)."
              condition="Product must retain its original seal, show no evidence of drops, liquid damage, or unauthorized third-party tampering."
              service="Repair or replacement with genuine components. If unrepairable, a like-for-like replacement product will be provided."
              selected={selectedCare === "Standard Warranty Coverage"}
              onClick={() => setSelectedCare("Standard Warranty Coverage")}
            />
            <CarePlusCard
              title="WristDigital Care+"
              price="+560.000"
              bullets={[
                "24 additional months of manufacturer defect coverage.",
                "One-time repair/replacement service for damage due to drops, screen breakage, or casing damage. ",
                "Free new battery replacement if battery capacity drops below 80% within the extended warranty period.",
                "Priority technical consultation via phone/chat throughout the plan duration.",
              ]}
              selected={selectedCare === "WristDigital Care+"}
              onClick={() => setSelectedCare("WristDigital Care+")}
            />
          </div>
        </div>
      </div>

      {/* ======== BOTTOM CONTENT (DESC & SPECS) ======== */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mt-20 lg:mt-24 pt-4 mb-20">
        {/* Description */}
        <div className="flex flex-col flex-1 gap-6">
          <h2 className="text-[28px] lg:text-[36px] font-semibold text-black">
            Description
          </h2>
          <p className="text-[18px] lg:text-[24px] text-[#1a2530] leading-[1.6]">
            Apple Watch Ultra 3 represents the pinnacle of smartwatch technology
            with aerospace-grade Titanium construction weighing just 61.4g. The
            revolutionary Micro-LED display delivers 3000 nits brightness,
            easily readable under intense sunlight, while the powerful S9 SiP
            chip ensures smooth performance with on-device Siri. GPS + Cellular
            connectivity enables calls, messages, music streaming, and payments
            without your iPhone. Enjoy up to 36 hours of battery life with
            45-minute fast charging and professional 100m water resistance for
            diving. Your 24/7 health companion features ECG, SpO2, skin
            temperature sensors, fall detection, and over 100 workout modes -
            the perfect companion for your active lifestyle.
          </p>
        </div>

        {/* Specification */}
        <div className="flex flex-col flex-1 gap-6">
          <h2 className="text-[28px] lg:text-[36px] font-semibold text-black">
            Specification
          </h2>
          <div className="flex flex-col gap-6 lg:gap-10 mt-2">
            <SpecRow
              icon="/assets/product-info/spec-case.png"
              title="Case & Size:"
              value="Titanium Case 49mm"
            />
            <SpecRow
              icon="/assets/product-info/spec-display.png"
              title="Display Technology:"
              value="Micro-LED Display"
              title2="Peak Brightness:"
              value2="Up to 3000 nits"
            />
            <SpecRow
              icon="/assets/product-info/spec-processor.png"
              title="Processor:"
              value="New S10 SiP Chip"
            />
            <SpecRow
              icon="/assets/product-info/spec-connectivity.png"
              title="Connectivity:"
              value="Precision Dual-Frequency GPS"
            />
            <SpecRow
              icon="/assets/product-info/spec-battery.png"
              title="Battery Life:"
              value={
                <>
                  Up to 36 hours (Standard Use),
                  <br />
                  <span className="block mt-2 lg:mt-0 lg:ml-[110px]">
                    Up to 72 hours (Low Power Mode)
                  </span>
                </>
              }
              imgClass="w-[133.27%] h-[110%] top-[-6.82%] left-[-20.72%]"
            />
            <SpecRow
              icon="/assets/product-info/spec-health.png"
              title="Health Sensor:"
              value="Dual Temperature Sensing"
            />
            <SpecRow
              icon="/assets/product-info/spec-water.png"
              title="Water Resistance:"
              value="100m (Swimproof, Scuba Diving)"
              imgClass="w-[154.9%] h-[135.61%] top-[-29.96%] left-[-26.96%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SUBCOMPONENTS ──

function BandCard({ title, price, img, dots, rotateDots, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-[154px] w-full lg:w-[293px] rounded-[20px] bg-white border-[2px] overflow-hidden transition-all relative outline-none flex items-center shadow-sm 
         ${selected ? "border-brandBlue" : "border-brandBlue/20"} hover:border-brandBlue hover:shadow-md`}
    >
      {/* Internal margin for image container to match Figma exactly */}
      <div className="absolute left-[5.8%] top-[10.4%] bottom-[11.0%] right-[61.8%] rounded-[10px] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="absolute left-[44%] font-['Lato',sans-serif] flex flex-col items-start w-[55%] pointer-events-none">
        <span className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-black whitespace-nowrap mb-1">
          {title}
        </span>
        <span className="text-[14px] sm:text-[16px] font-semibold text-black">
          {price}
          <span className="underline decoration-solid">đ</span>
        </span>
      </div>

      <div className="absolute right-[12%] bottom-[15%]">
        <img
          src={dots}
          alt="colors"
          className={`h-[25px] w-auto ${rotateDots ? "rotate-180" : ""}`}
        />
      </div>
    </button>
  );
}

function CareCard({ title, desc, condition, service, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-6 text-left rounded-[20px] border-[1px] transition-all bg-white relative outline-none flex flex-col justify-center
         ${selected ? "border-brandBlue ring-1 ring-brandBlue/30 shadow-md" : "border-brandBlue/50 hover:border-brandBlue shadow-sm"}`}
    >
      <h4 className="text-[20px] text-brandNavy font-semibold mb-4 leading-none">
        {title}
      </h4>
      <p className="text-[11px] text-brandNavy font-medium mb-4 leading-normal pr-4">
        {desc}
      </p>
      <p className="text-[11px] text-brandNavy mb-1 leading-normal pr-4">
        <span className="font-bold">Condition:</span> {condition}
      </p>
      <p className="text-[11px] text-brandNavy leading-normal pr-4">
        <span className="font-bold">Service:</span> {service}
      </p>
    </button>
  );
}

function CarePlusCard({ title, price, bullets, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-6 pt-5 text-left rounded-[20px] border-[1px] transition-all bg-white relative outline-none flex flex-col justify-center
         ${selected ? "border-brandBlue ring-1 ring-brandBlue/30 shadow-md" : "border-brandBlue/50 hover:border-brandBlue shadow-sm"}`}
    >
      <h4 className="text-[20px] text-brandNavy font-semibold mb-4 flex items-center">
        {title}
        <span className="text-[14px] text-[#ee2c2c] font-normal ml-2 tracking-wide leading-none">
          ({price}
          <span className="underline decoration-solid">đ</span>)
        </span>
      </h4>
      <ul className="text-[11px] text-brandNavy list-disc pl-4 space-y-1.5 marker:text-brandNavy">
        {bullets.map((b, i) => (
          <li key={i} className="pl-1 leading-normal pr-4">
            {b}
          </li>
        ))}
      </ul>
    </button>
  );
}

function SpecRow({ icon, title, value, title2, value2, imgClass }) {
  return (
    <div className="flex items-start gap-4 lg:gap-8">
      <div className="w-[45px] lg:w-[55px] h-[50px] lg:h-[60px] shrink-0 relative flex items-center justify-center">
        {imgClass ? (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={icon}
              alt=""
              className={`absolute max-w-none ${imgClass}`}
            />
          </div>
        ) : (
          <img src={icon} alt="" className="w-full h-full object-contain" />
        )}
      </div>
      <div className="flex flex-col text-[18px] lg:text-[24px] text-[#1a2530] pt-1">
        <div className="mb-2 lg:mb-1 leading-snug">
          <span className="font-semibold">{title} </span>
          <span>{value}</span>
        </div>
        {title2 && (
          <div className="leading-snug">
            <span className="font-semibold">{title2} </span>
            <span>{value2}</span>
          </div>
        )}
      </div>
    </div>
  );
}
