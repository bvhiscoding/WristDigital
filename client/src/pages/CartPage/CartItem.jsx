import React from "react";

/**
 * CartItem
 * A single row in the shopping cart table.
 * Matches Figma node 481:1405 (Group / cart-row).
 */
export default function CartItem({ item, isLast, onQuantityChange, onRemove }) {
  const formattedPrice = item.price.toLocaleString("vi-VN") + "đ";

  return (
    <div
      className={`w-full flex items-center py-7 ${
        !isLast ? "border-b border-[#0c1950]/10" : ""
      }`}
    >
      {/* Product Info */}
      <div className="flex-1 min-w-0 flex items-center gap-5">
        {/* Product Image */}
        <div className="w-[130px] h-[130px] flex-shrink-0 flex items-center justify-center overflow-hidden rounded-md">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Name + Attributes */}
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[20px] font-semibold leading-snug line-clamp-2">
            {item.name}
          </h3>
          <div className="mt-2 flex flex-col gap-[2px]">
            {item.attributes.map((attr) => (
              <p
                key={attr.label}
                className="font-['Lato:Medium',sans-serif] text-[#1a2530] text-[12px] leading-normal"
              >
                <span className="font-['Lato:Bold',sans-serif] font-bold">
                  {attr.label}:
                </span>{" "}
                <span className="text-[rgba(26,37,48,0.7)]">{attr.value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Quantity Stepper */}
      <div className="w-[200px] flex-shrink-0 flex items-center justify-center gap-4">
        <button
          aria-label="Decrease quantity"
          onClick={() => onQuantityChange(item.id, -1)}
          className="w-8 h-8 flex items-center justify-center text-[#193495]/46 text-[20px] font-['Lato:SemiBold',sans-serif] hover:opacity-60 transition-opacity select-none"
        >
          −
        </button>

        <div className="w-[50px] h-[40px] border-[0.5px] border-[#dee4f4] border-solid rounded-[10px] flex items-center justify-center">
          <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[20px] font-semibold leading-normal select-none">
            {item.quantity}
          </span>
        </div>

        <button
          aria-label="Increase quantity"
          onClick={() => onQuantityChange(item.id, 1)}
          className="w-8 h-8 flex items-center justify-center text-[#193495] text-[20px] font-['Lato:SemiBold',sans-serif] hover:opacity-60 transition-opacity select-none"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="w-[220px] flex-shrink-0 flex items-center">
        <p className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[20px] font-semibold leading-normal">
          {formattedPrice}
        </p>
      </div>

      {/* Remove Button */}
      <div className="w-10 flex-shrink-0 flex items-center justify-end">
        <button
          aria-label={`Remove ${item.name} from cart`}
          onClick={() => onRemove(item.id)}
          className="w-7 h-7 flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          <img
            src="/Cart/delete-icon.svg"
            alt="Remove item"
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
}
