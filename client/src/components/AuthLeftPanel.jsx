import React from "react";
import { Link } from "react-router-dom";

/**
 * Shared left panel for Login and Register pages.
 * Renders the dark-blue gradient background, decorative blobs, logo, and
 * a flexible center content area (passed as children).
 *
 * Props:
 *   children {ReactNode} - Page-specific center content
 */
const AuthLeftPanel = ({ children }) => (
  <div className="hidden md:flex md:w-1/2 relative flex-col bg-gradient-to-br from-[#0c1950] to-[#1a3caf] overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
    <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-indigo-900/50 rounded-full blur-[120px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[60px]" />

    {/* Logo — pinned top left */}
    <div className="absolute top-10 left-12 z-20">
      <Link to="/">
        <img
          src="/white-logo.png"
          alt="WristDigital"
          className="h-10 object-contain hover:opacity-80 transition-opacity"
        />
      </Link>
    </div>

    {/* Center content */}
    <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-14">
      {children}
    </div>
  </div>
);

export default AuthLeftPanel;
