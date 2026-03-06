import React from "react";

/**
 * CartSummary
 * The right-side order summary box matching the Figma design.
 * Shows Subtotal, Shipping, Discount, and Total.
 */
export default function CartSummary({ subtotal }) {
  const shipping = 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  const formatPrice = (amount) =>
    amount > 0 ? amount.toLocaleString("vi-VN") + "đ" : "-";

  return (
    <div className="flex flex-col gap-4 min-w-[310px]">
      {/* Subtotal */}
      <div className="flex justify-between items-center">
        <span className="font-['Lato:SemiBold',sans-serif] text-[rgba(12,25,80,0.61)] text-[20px] font-semibold leading-normal">
          Subtotal:
        </span>
        <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[20px] font-semibold leading-normal min-w-[60px] text-right">
          {formatPrice(subtotal)}
        </span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center">
        <span className="font-['Lato:SemiBold',sans-serif] text-[rgba(12,25,80,0.61)] text-[20px] font-semibold leading-normal">
          Shipping:
        </span>
        <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[20px] font-semibold leading-normal min-w-[60px] text-right">
          {shipping === 0 ? "-" : formatPrice(shipping)}
        </span>
      </div>

      {/* Discount */}
      <div className="flex justify-between items-center">
        <span className="font-['Lato:SemiBold',sans-serif] text-[rgba(12,25,80,0.61)] text-[20px] font-semibold leading-normal">
          Discount:
        </span>
        <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[20px] font-semibold leading-normal min-w-[60px] text-right">
          {discount === 0 ? "-" : formatPrice(discount)}
        </span>
      </div>

      {/* Divider before Total */}
      <div className="h-[1px] bg-[#0c1950]/20" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="font-['Lato:Bold',sans-serif] text-[#0c1950] text-[20px] font-bold leading-normal">
          Total:
        </span>
        <span className="font-['Lato:Bold',sans-serif] text-[#0c1950] text-[24px] font-bold leading-normal min-w-[60px] text-right">
          {subtotal === 0 ? "-" : formatPrice(total)}
        </span>
      </div>
    </div>
  );
}
