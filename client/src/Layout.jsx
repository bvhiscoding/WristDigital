import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsAuthenticated,
  selectCurrentUser,
  logout,
} from "./features/auth/authSlice";

// ── Asset constants ────────────────────────────────────────────────────────────
const imgGroup2 = "/blue-logo.png";
const imgGroup385 = "/white-logo.png";
const imgEllipse10 = "/momo-logo.png";
const imgEllipse14 = "/facebook.png";
const imgEllipse11 = "/visa-logo.png";
const imgEllipse15 = "/instagram.png";
const imgEllipse12 = "/napas-logo.png";
const imgEllipse16 = "/email-logo.png";
const imgEllipse13 = "/zalo-pay.png";
const imgEllipse17 = "/vnpay-logo.jpg";

// ── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Light vs dark header mode
  const isLightPage =
    location.pathname.startsWith("/products") ||
    location.pathname.startsWith("/product-details") ||
    location.pathname.startsWith("/accessories") ||
    location.pathname.startsWith("/blogs") ||
    location.pathname.startsWith("/sale") ||
    location.pathname.startsWith("/my-orders") ||
    location.pathname.startsWith("/cart") ||
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/wishlist") ||
    location.pathname.startsWith("/help") ||
    location.pathname.startsWith("/settings") ||
    location.pathname.startsWith("/blogs/");

  // Nav link active helper
  const navLinkClass = (active) =>
    `transition-opacity hover:opacity-70 ${
      active
        ? "font-['Lato:Bold',sans-serif] font-bold underline underline-offset-4"
        : "font-['Lato:SemiBold',sans-serif]"
    }`;

  const handleSignOut = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    navigate("/login");
  };

  // Avatar initials fallback (e.g. "Nguyen Van A" → "NV")
  const getInitials = (name = "") => {
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length === 0) return "U";
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center h-[80px] transition-colors bg-transparent backdrop-blur-[2px]">
      <div className="w-full max-w-[1440px] h-full px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link to="/">
            <img
              alt="WristDigital Logo"
              className="w-[61px] h-[41px]"
              src={isLightPage ? "/blue-logo.png" : "/white-logo.png"}
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav
          className={`flex items-center justify-center gap-10 text-[18px] font-['Lato:SemiBold',sans-serif] ${
            isLightPage ? "text-[#193495]" : "text-white"
          }`}
        >
          <Link to="/" className={navLinkClass(location.pathname === "/")}>
            HOME
          </Link>
          <Link
            to="/products"
            className={navLinkClass(location.pathname.startsWith("/products"))}
          >
            PRODUCTS
          </Link>
          <Link
            to="/accessories"
            className={navLinkClass(
              location.pathname.startsWith("/accessories"),
            )}
          >
            ACCESSORIES
          </Link>
          <Link
            to="/sale"
            className={navLinkClass(location.pathname.startsWith("/sale"))}
          >
            SALE
          </Link>
          <Link
            to="/blogs"
            className={navLinkClass(location.pathname.startsWith("/blogs"))}
          >
            BLOGS
          </Link>
        </nav>

        {/* Search + Auth area */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {/* Search + Cart pill */}
          <div
            className={`flex items-center border border-solid h-[40px] rounded-[100px] px-4 w-[220px] bg-transparent ${
              isLightPage ? "border-[#193495]" : "border-white"
            }`}
          >
            <img
              alt="Search Icon"
              className={`w-[20px] h-[20px] ${isLightPage ? "" : "brightness-0 invert"}`}
              src="/HomePage/HeroSection/search-icon.svg"
            />
            <input
              type="text"
              placeholder="Search..."
              className={`ml-2 w-full outline-none text-[15px] font-['Lato:Regular',sans-serif] bg-transparent ${
                isLightPage
                  ? "text-[#193495] placeholder-[#193495]/60"
                  : "text-white placeholder-white"
              }`}
            />
            <div
              className={`w-[1px] h-[20px] mx-2 ${isLightPage ? "bg-[#193495]/30" : "bg-white"}`}
            />
            <Link
              to="/cart"
              aria-label="Go to shopping cart"
              className={`w-[20px] h-[20px] cursor-pointer ${isLightPage ? "" : "brightness-0 invert"}`}
            >
              <img
                alt="Cart"
                className="w-full h-full"
                src="/HomePage/HeroSection/shopping-cart.svg"
              />
            </Link>
          </div>

          {/* ──────────── Authenticated: Avatar + Dropdown ──────────── */}
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="h-[44px] w-[44px] flex-shrink-0 cursor-pointer rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-[#193495]/40 transition-all flex items-center justify-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label="Open user menu"
                aria-expanded={isDropdownOpen}
              >
                {user?.avatar ? (
                  <img
                    alt="Profile Avatar"
                    className="block size-full object-cover"
                    src={user.avatar}
                  />
                ) : (
                  /* Initials fallback */
                  <div className="size-full bg-gradient-to-br from-[#193495] to-[#0c1950] flex items-center justify-center">
                    <span className="text-white text-[16px] font-bold select-none">
                      {getInitials(user?.fullName || user?.name || "")}
                    </span>
                  </div>
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] right-0 w-[205px] bg-white rounded-[18px] shadow-[0px_1px_8px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col items-center py-3 z-50">
                  {/* User info */}
                  {user?.fullName && (
                    <div className="w-[181px] px-3 py-2 mb-1">
                      <p className="text-[13px] font-bold text-[#0c1950] truncate">
                        {user.fullName}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>
                  )}
                  <div className="w-[85%] h-[1px] bg-gray-200/80 mb-2" />

                  <Link
                    to="/profile"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 w-[181px] h-[34px] px-3 rounded-[10px] hover:bg-gray-100 transition-colors my-0.5 group"
                  >
                    <img
                      src="/Header/profile.svg"
                      alt=""
                      className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100"
                    />
                    <span className="text-[13px] font-medium text-black">
                      My Profile
                    </span>
                  </Link>
                  <Link
                    to="/my-orders"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 w-[181px] h-[34px] px-3 rounded-[10px] hover:bg-gray-100 transition-colors my-0.5 group"
                  >
                    <img
                      src="/Header/orders.svg"
                      alt=""
                      className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100"
                    />
                    <span className="text-[13px] font-medium text-black">
                      My Orders
                    </span>
                  </Link>
                  <Link
                    to="/wishlist"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 w-[181px] h-[34px] px-3 rounded-[10px] hover:bg-gray-100 transition-colors my-0.5 group"
                  >
                    <img
                      src="/Header/wishlist.svg"
                      alt=""
                      className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100"
                    />
                    <span className="text-[13px] font-medium text-black">
                      Wishlist
                    </span>
                  </Link>

                  <div className="w-[85%] h-[1px] bg-gray-200/80 my-2" />

                  <Link
                    to="/settings"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 w-[181px] h-[34px] px-3 rounded-[10px] hover:bg-gray-100 transition-colors my-0.5 group"
                  >
                    <img
                      src="/Header/setting.svg"
                      alt=""
                      className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100"
                    />
                    <span className="text-[13px] font-medium text-black">
                      Settings
                    </span>
                  </Link>
                  <Link
                    to="/help"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 w-[181px] h-[34px] px-3 rounded-[10px] hover:bg-gray-100 transition-colors my-0.5 group"
                  >
                    <img
                      src="/Header/help.svg"
                      alt=""
                      className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100"
                    />
                    <span className="text-[13px] font-medium text-black">
                      Need help?
                    </span>
                  </Link>

                  <div className="w-[85%] h-[1px] bg-gray-200/80 my-2" />

                  {/* Admin link temporarily rendered for testing */}
                  <Link
                    to="/admin"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 w-[181px] h-[34px] px-3 rounded-[10px] hover:bg-gray-100 transition-colors my-0.5 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80 group-hover:opacity-100 text-black"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                    <span className="text-[13px] font-medium text-black">
                      Admin Dashboard
                    </span>
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 w-[181px] h-[34px] px-3 rounded-[10px] hover:bg-red-50 transition-colors my-0.5 group"
                  >
                    <img
                      src="/Header/signout.svg"
                      alt=""
                      className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100"
                    />
                    <span className="text-[13px] font-medium text-red-600">
                      Sign Out
                    </span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ──────────── Guest: Login Button ──────────── */
            <Link
              to="/login"
              className={`inline-flex items-center gap-1.5 h-[38px] px-6 rounded-full text-[14px] font-semibold border transition-all duration-200 ${
                isLightPage
                  ? "border-[#193495] text-[#193495] hover:bg-[#193495] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#193495]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full flex justify-center bg-[#0c1950] py-16 text-white text-[20px] font-['Lato:Regular',sans-serif]">
      <div className="w-full max-w-[1440px] px-12 flex justify-between gap-12">
        {/* Left Column: Brand & Info */}
        <div className="w-[480px] flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img
              alt="WristDigital Mini Logo"
              className="h-10 object-contain"
              src={imgGroup385}
            />
            <span className="font-['Lato:SemiBold',sans-serif]">
              WristDigital
            </span>
          </div>
          <p className="leading-relaxed">
            WristDigital is an authorized distributor of premium technology
            products in Vietnam. With more than a decade of industry experience,
            we take pride in delivering 100% genuine products, competitive
            pricing, and exceptional after-sales support to our valued
            customers.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <p>Address: 123 Tran Hung Dao Street, Hoan Kiem District, Hanoi</p>
            <p className="whitespace-pre-line">
              Hotline: +84 (0)24 3946 5200{"\n"}
              Support: +84 (0)24 3946 5201
            </p>
            <a
              href="mailto:support@wristdigital.vn"
              className="inline-block mt-2"
            >
              Email:{" "}
              <span className="underline decoration-solid">
                support@wristdigital.vn
              </span>
            </a>
          </div>
        </div>

        {/* Middle Column: Customer Support */}
        <div className="flex flex-col gap-4">
          <h3 className="font-['Lato:Bold',sans-serif] text-[27px] mb-2">
            Customer Support
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/help?tab=delivery" className="hover:underline">
                Delivery Policy
              </Link>
            </li>
            <li>
              <Link to="/help?tab=return-refund" className="hover:underline">
                Return &amp; Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/help?tab=privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/help?tab=terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/help?tab=how-to-order" className="hover:underline">
                How to Order
              </Link>
            </li>
            <li>
              <Link to="/help?tab=faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Payment & Socials */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-['Alegreya_Sans:Bold',sans-serif] text-[27px]">
              Payment Methods
            </h3>
            <div className="flex gap-4">
              <img
                alt="Momo"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse10}
              />
              <img
                alt="Visa"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse11}
              />
              <img
                alt="Napas"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse12}
              />
              <img
                alt="ZaloPay"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse13}
              />
              <img
                alt="VNPay"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse17}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-['Alegreya_Sans:Bold',sans-serif] text-[27px]">
              Contact Us
            </h3>
            <div className="flex gap-4">
              <img
                alt="Facebook"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse14}
              />
              <img
                alt="Instagram"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse15}
              />
              <img
                alt="Email Contact"
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={imgEllipse16}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Layout ────────────────────────────────────────────────────────────────────
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-white relative">
      <Header />
      <main className="flex-grow w-full flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
