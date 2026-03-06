import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CartChatBubble from "./CartChatBubble";

// Initial mock cart data matching the Figma design
const INITIAL_CART_ITEMS = [
  {
    id: 1,
    name: "Apple Watch Ultra 3 (GPS + Cellular) 49mm Titanium Case Micro-LED Display",
    price: 26999000,
    quantity: 1,
    image: "/Cart/apple-watch-ultra-3.png",
    attributes: [
      { label: "Color", value: "Natural Titanium" },
      { label: "Watch Bands", value: "Milan Titan Loop" },
      { label: "WristDigital Care", value: "Standard Warranty Coverage" },
    ],
  },
  {
    id: 2,
    name: "HUOTO Portable Wireless Charger for Apple Watch Accessories - 1200mAh",
    price: 529930,
    quantity: 1,
    image: "/Cart/pink-charger.png",
    attributes: [{ label: "Color", value: "Pink" }],
  },
];

/**
 * CartPage
 * Implements the Figma design for node 534:1426 (Cart page body).
 * Header + Footer are excluded — rendered by Layout.jsx.
 */
export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="w-full bg-white flex flex-col min-h-screen font-['Lato',sans-serif] pt-[100px]">
      {/* Page Content wrapper */}
      <div className="w-full max-w-[1440px] mx-auto px-[95px] pb-20 flex-grow">
        {/* Page Title */}
        <h1 className="font-['Lato:ExtraBold',sans-serif] text-[#193495] text-[36px] font-extrabold leading-normal mt-14 mb-10">
          SHOPPING CART
        </h1>

        {/* Table Header */}
        <div className="w-full flex items-center border-b border-[#0c1950]/20 pb-4">
          <div className="flex-1 min-w-0">
            <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[24px] font-semibold leading-normal pl-[33px]">
              Product ({cartItems.length})
            </span>
          </div>
          <div className="w-[200px] flex-shrink-0 flex justify-center">
            <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[24px] font-semibold leading-normal">
              Quantity
            </span>
          </div>
          <div className="w-[220px] flex-shrink-0 flex justify-start">
            <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[24px] font-semibold leading-normal">
              Total Price
            </span>
          </div>
          {/* Remove button column spacer */}
          <div className="w-10 flex-shrink-0" />
        </div>

        {/* Cart Items */}
        <div className="w-full">
          {cartItems.length === 0 ? (
            <div className="py-20 text-center text-[#0c1950]/60 text-[20px]">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                isLast={index === cartItems.length - 1}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))
          )}
        </div>

        {/* Bottom Section: Total Quantity + Summary */}
        <div className="w-full border-t border-[#0c1950]/20 pt-8 mt-4 flex justify-between items-start">
          {/* Left: Total Quantity label */}
          <div>
            <span className="font-['Lato:Bold',sans-serif] text-[#0c1950]/80 text-[20px] font-bold leading-normal">
              Total Quantity:
              <span className="ml-3 font-semibold text-[#0c1950]">
                {totalQuantity}
              </span>
            </span>
          </div>

          {/* Right: Subtotal / Shipping / Discount / Total */}
          <CartSummary subtotal={subtotal} />
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 flex items-center gap-3">
          <Link
            to="/products"
            className="flex items-center gap-3 group"
            aria-label="Continue shopping"
          >
            <img
              src="/Cart/left-arrow.svg"
              alt=""
              className="w-[25px] h-[25px] group-hover:opacity-70 transition-opacity"
            />
            <span className="font-['Lato:SemiBold',sans-serif] text-[#0c1950] text-[24px] font-semibold leading-normal group-hover:opacity-70 transition-opacity">
              Continue Shopping
            </span>
          </Link>
        </div>
      </div>

      {/* Floating Chat Bubble */}
      <CartChatBubble />
    </div>
  );
}
