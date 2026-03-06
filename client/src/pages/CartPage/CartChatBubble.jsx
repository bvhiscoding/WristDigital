import React, { useState } from "react";

/**
 * CartChatBubble
 * Floating chat bubble button in the bottom-right corner.
 * Matches Figma node Group7 (chat icon, opacity-60).
 */
export default function CartChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      aria-label="Open chat support"
      onClick={() => setIsOpen((prev) => !prev)}
      className="fixed bottom-8 right-8 z-40 w-[65px] h-[65px] rounded-full bg-[#193495] flex items-center justify-center shadow-[0px_4px_20px_rgba(25,52,149,0.4)] hover:opacity-80 transition-opacity"
    >
      <img
        src="/Cart/chat-bubble.svg"
        alt=""
        className="w-9 h-9"
        aria-hidden="true"
      />
    </button>
  );
}
