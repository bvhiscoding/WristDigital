import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useParams } from "react-router-dom";

export default function BlogFloatingWidgets() {
  const { id } = useParams();

  const [shopVisible, setShopVisible] = useState(true);
  const [newsVisible, setNewsVisible] = useState(true);

  // Reset both modals whenever the user navigates to a different blog
  useEffect(() => {
    setShopVisible(true);
    setNewsVisible(true);
  }, [id]);

  if (!shopVisible && !newsVisible) return null;

  return createPortal(
    <div className="fixed right-6 bottom-44 z-[200] flex flex-col items-end gap-4 pointer-events-none">

      {/* ── Shop the Look ───────────────────────────────────── */}
      {shopVisible && (
        <div
          className="pointer-events-auto w-[270px] bg-[#0c1950] rounded-[20px] shadow-[0_20px_50px_-10px_rgba(12,25,80,0.55)] text-white flex flex-col items-center text-center p-6 relative"
          style={{ animation: "floatIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
          <button
            onClick={() => setShopVisible(false)}
            aria-label="Close Shop widget"
            className="absolute top-3 right-3 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full p-1.5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>

          <h3 className="text-[17px] font-['Alegreya_Sans:Bold',sans-serif] mb-3 mt-1">Shop the Look</h3>
          <img
            src="/Products/accessories.svg"
            alt="Accessories"
            className="w-28 h-28 object-contain drop-shadow-2xl mb-4 hover:-translate-y-1.5 transition-transform duration-500"
          />
          <p className="font-['Lato:SemiBold',sans-serif] text-[14px] text-white/90 mb-1">Premium Nylon Loop</p>
          <p className="font-['Alegreya_Sans:Bold',sans-serif] text-[22px] text-white mb-4">$35.00</p>
          <Link
            to="/products"
            className="w-full block py-3 bg-white text-[#0c1950] rounded-full font-['Lato:Bold',sans-serif] text-[14px] hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      )}

      {/* ── Newsletter ───────────────────────────────────────── */}
      {newsVisible && (
        <div
          className="pointer-events-auto w-[270px] bg-white border border-gray-100 rounded-[20px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] p-6 relative"
          style={{ animation: "floatIn 0.42s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
          <button
            onClick={() => setNewsVisible(false)}
            aria-label="Close Newsletter widget"
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>

          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-9 h-9 bg-[#193495]/10 text-[#193495] rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3 className="text-[17px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950]">Newsletter</h3>
          </div>

          <p className="text-gray-500 text-[13px] leading-relaxed mb-4 font-['Lato:Regular',sans-serif]">
            Get the latest smartwatch tips and exclusive offers in your inbox.
          </p>

          <div className="flex flex-col gap-2.5">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 h-11 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/15 outline-none text-[14px] placeholder-gray-400 transition-all"
            />
            <button className="w-full h-11 bg-[#193495] text-white rounded-xl font-['Lato:Bold',sans-serif] text-[14px] hover:bg-[#0c1950] transition-colors shadow-sm">
              Subscribe
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </div>,
    document.body
  );
}
