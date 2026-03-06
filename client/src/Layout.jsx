import React from "react";
import { Link, useLocation } from "react-router-dom";

// Common images used in the Header
const imgProperty1Ellipse95 = "/user-avatar.png";
const imgFrame22 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
);

const imgLine1 =
  "http://localhost:3845/assets/0752ba5c56dbf0ee0e9d870bc14d90e126b9b455.svg";
const imgFrame23 =
  "http://localhost:3845/assets/9e7a798b99eb04a2266b2881b3c799ec205d3686.svg";
const imgGroup2 = "/blue-logo.png";

// Common images used in the Footer
const imgGroup385 = "/white-logo.png";
const imgEllipse10 = "/momo-logo.png";
const imgEllipse14 = "/facebook.png";
const imgEllipse11 = "/visa-logo.png";
const imgEllipse15 = "/instagram.png";
const imgEllipse12 = "/napas-logo.png";
const imgEllipse16 = "/email-logo.png";
const imgEllipse13 = "/zalo-pay.png";
const imgEllipse17 = "/vnpay-logo.jpg";

function Header() {
  const location = useLocation();
  // On light-background pages (products, etc.) use white header with dark text
  const isLightPage = location.pathname.startsWith('/products');

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex justify-center h-[100px] transition-colors
        ${isLightPage
          ? 'bg-white shadow-sm'
          : 'bg-transparent backdrop-blur-[2px]'
        }`}
    >
      <div className="w-full max-w-[1440px] h-full px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-start">
          <img
            alt="WristDigital Logo"
            className="w-[61px] h-[41px]"
            src={isLightPage ? '/blue-logo.png' : '/white-logo.png'}
          />
        </div>

        {/* Nav links */}
        <nav className={`flex items-center justify-center gap-10 text-[20px] font-['Lato:SemiBold',sans-serif] ${
          isLightPage ? 'text-[#193495]' : 'text-white'
        }`}>
          <Link to="/" className="font-['Lato:SemiBold',sans-serif] hover:opacity-70 transition-opacity">
            HOME
          </Link>
          <Link
            to="/products"
            className={`font-['Lato:SemiBold',sans-serif] hover:opacity-70 transition-opacity ${
              location.pathname === '/products' ? 'underline font-extrabold' : ''
            }`}
          >
            PRODUCTS
          </Link>
          <Link to="/accessories" className="font-['Lato:SemiBold',sans-serif] hover:opacity-70 transition-opacity">
            ACCESSORIES
          </Link>
          <Link to="/sale" className="font-['Lato:SemiBold',sans-serif] hover:opacity-70 transition-opacity">
            SALE
          </Link>
          <Link to="/blogs" className="font-['Lato:SemiBold',sans-serif] hover:opacity-70 transition-opacity">
            BLOGS
          </Link>
        </nav>

        {/* Search & Profile */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <div className={`flex items-center border border-solid h-[43px] rounded-[100px] px-4 w-[228px] bg-transparent ${
            isLightPage ? 'border-[#193495]' : 'border-white'
          }`}>
            <img
              alt="Search Icon"
              className={`w-[20px] h-[20px] ${isLightPage ? '' : 'brightness-0 invert'}`}
              src="/HomePage/HeroSection/search-icon.svg"
            />
            <input
              type="text"
              placeholder="Search..."
              className={`ml-2 w-full outline-none text-[15px] font-['Lato:Regular',sans-serif] bg-transparent ${
                isLightPage
                  ? 'text-[#193495] placeholder-[#193495]/60'
                  : 'text-white placeholder-white'
              }`}
            />
            <div className={`w-[1px] h-[20px] mx-2 ${isLightPage ? 'bg-[#193495]/30' : 'bg-white'}`}></div>
            <img
              alt="Cart"
              className={`w-[20px] h-[20px] cursor-pointer ${isLightPage ? '' : 'brightness-0 invert'}`}
              src="/HomePage/HeroSection/shopping-cart.svg"
            />
          </div>
          <button className="h-[55px] w-[55px] flex-shrink-0 rounded-full overflow-hidden">
            <img
              alt="Profile Avatar"
              className="block size-full object-cover"
              src={imgProperty1Ellipse95}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

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
              <a href="#" className="hover:underline">
                Delivery Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return & Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How to Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
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
