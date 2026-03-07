import React, { useState, useRef, useEffect } from "react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Focus trap and escape to close functionality for accessibility
  const chatRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end pointer-events-none font-['Inter']">
      {/* Chat Window */}
      <div
        ref={chatRef}
        role="dialog"
        aria-modal="true"
        aria-label="Customer Support Chat"
        className={`mb-4 w-[calc(100vw-64px)] sm:w-[448px] h-[538px] bg-white rounded-[15px] shadow-[0px_0px_7.3px_-1px_rgba(0,0,0,0.25)] flex flex-col pointer-events-auto transform transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-10 pointer-events-none invisible"}`}
      >
        {/* Header Tabs */}
        <div className="flex justify-center items-center h-[60px] border-b border-[#e5e5e5] px-8 gap-4 mt-2">
          <button
            className="flex-1 flex justify-center items-center gap-2 bg-[#d7e2ff] h-[40px] rounded-[20px] transition-colors"
            aria-current="page"
          >
            <img
              src="/assets/chat/ai-assistant-icon.svg"
              alt=""
              className="w-[18px] h-[18px]"
              aria-hidden="true"
            />
            <span className="text-[#193495] text-[12px] font-medium">
              AI Assistant
            </span>
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 h-[40px] rounded-[20px] hover:bg-gray-50 transition-colors">
            <img
              src="/assets/chat/live-agent-icon.svg"
              alt=""
              className="w-[18px] h-[18px]"
              aria-hidden="true"
            />
            <span className="text-[#193495] text-[12px] font-medium">
              Live Agent
            </span>
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 flex flex-col px-6 py-4 overflow-y-auto relative">
          {/* Message */}
          <div className="flex gap-2.5 mt-[10px]">
            <div className="flex-shrink-0">
              <img
                src="/assets/chat/bot-avatar.png"
                alt="Bot avatar"
                className="w-[25px] h-[25px] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col mt-0.5 max-w-[80%]">
              <div className="bg-[#eaf0ff] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] px-4 py-2.5 inline-block">
                <p className="text-[#193495] text-[10px] font-medium leading-[normal] m-0">
                  What can I do for you today?
                </p>
              </div>
              <span className="text-[rgba(25,52,149,0.7)] text-[7px] font-normal mt-[3px] ml-1 text-right self-end mr-5">
                11:11 a.m
              </span>
            </div>
          </div>

          {/* Center Help Text */}
          <div className="mt-auto mb-1 flex flex-col items-center justify-center">
            <p className="text-[rgba(25,52,149,0.74)] text-[10px] font-normal italic text-center whitespace-pre leading-relaxed">
              Need more personalized help?{"\n"}Click here to connect to a Live
              Agent.
            </p>
          </div>
        </div>

        {/* Separator below chat body */}
        <div className="px-6 relative">
          <div className="h-[1px] w-full bg-gray-200"></div>
        </div>

        {/* Bottom Input Area */}
        <div className="h-[75px] px-6 flex items-center gap-4">
          {/* Action Buttons */}
          <div className="flex gap-2.5">
            <button
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Add emoji"
            >
              <img
                src="/assets/chat/emoji-icon.svg"
                className="w-[20px] h-[20px]"
                alt=""
              />
            </button>
            <button
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Attach image"
            >
              <img
                src="/assets/chat/image-icon.svg"
                className="w-[20px] h-[20px]"
                alt=""
              />
            </button>
            <button
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Open camera"
            >
              <img
                src="/assets/chat/camera-icon.svg"
                className="w-[20px] h-[20px]"
                alt=""
              />
            </button>
          </div>

          {/* Input Field */}
          <div className="flex-1 bg-[#f4f4f4] rounded-[15px] h-[36px] flex items-center px-4 relative group">
            <input
              type="text"
              placeholder="Tell us what you need"
              className="bg-transparent border-none outline-none w-full text-[10px] font-normal text-gray-700 placeholder-[rgba(0,0,0,0.25)] pr-8 h-full"
            />
            <button
              className="absolute right-3 hover:scale-110 transition-transform"
              aria-label="Send message"
            >
              <img
                src="/assets/chat/send-icon.svg"
                className="w-[14px] h-[14px]"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Button and Tooltip Container */}
      <div className="relative flex items-center pointer-events-auto mt-4">
        {/* Tooltip */}
        <div
          role="tooltip"
          aria-hidden={!isHovered || isOpen}
          className={`absolute right-full mr-4 bg-white rounded-[15px] shadow-[0px_0px_7.3px_-1px_rgba(0,0,0,0.25)] w-[254px] h-[55px] flex items-center justify-center pointer-events-none transform transition-all duration-300 origin-right ${isHovered && !isOpen ? "scale-100 opacity-100 translate-x-0" : "scale-95 opacity-0 translate-x-2"}`}
        >
          <p className="text-[#0c1950] text-[15px] font-medium m-0 leading-[normal]">
            How can we help you?
          </p>
        </div>

        {/* Floating Button Container, size is 90x90 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[90px] h-[90px] relative transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-full"
          aria-expanded={isOpen}
          aria-controls="chat-window"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {/* Inner positioning matching inset-[-9.44%_-8.33%_-9.44%_-10.56%] for background */}
          <div
            className={`absolute inset-[-9.44%_-8.33%_-9.44%_-10.56%] transition-opacity duration-300 ${!isOpen && !isHovered ? "opacity-60" : "opacity-100"}`}
          >
            <img
              src="/assets/chat/bubble-bg.svg"
              className="w-full h-full object-fill block"
              alt=""
              aria-hidden="true"
            />
          </div>

          {/* Icon overlay for default state */}
          <div
            className={`absolute inset-[22.73%] flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
          >
            <img
              src="/assets/chat/chat-icon.svg"
              className="w-full h-full object-contain"
              alt=""
              aria-hidden="true"
            />
          </div>

          {/* Icon overlay for expanded state (close variant 3) */}
          <div
            className={`absolute inset-[27.27%] flex items-center justify-center transition-all duration-300 ${!isOpen ? "opacity-0 scale-50 -rotate-90" : "opacity-100 scale-100 rotate-0"}`}
          >
            <img
              src="/assets/chat/close-icon.svg"
              className="w-full h-full object-contain"
              alt=""
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingChat;
