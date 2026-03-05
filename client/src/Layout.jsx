import React from "react";

// Common images used in the Header
const imgProperty1Ellipse95 = "/user-avatar.png";
const imgFrame22 =
  "http://localhost:3845/assets/1293779946caee83c854872dc7077539fc51d92d.svg";
const imgLine1 =
  "http://localhost:3845/assets/0752ba5c56dbf0ee0e9d870bc14d90e126b9b455.svg";
const imgFrame23 =
  "http://localhost:3845/assets/9e7a798b99eb04a2266b2881b3c799ec205d3686.svg";
const imgGroup2 = "/blue-logo.png";

// Common images used in the Footer
const imgGroup385 = "/white-logo.png";
const imgEllipse10 =
  "http://localhost:3845/assets/491709648140f0901cc6350494113a4e79e955f3.png";
const imgEllipse14 =
  "http://localhost:3845/assets/f98d48555f473d626275376c6595aa29c47c3afc.png";
const imgEllipse11 =
  "http://localhost:3845/assets/68525c27a4d021dfd17f683c877c4ffd15914314.png";
const imgEllipse15 =
  "http://localhost:3845/assets/4de3a92107a765be2ac232e2b0bbda7722ba3136.png";
const imgEllipse12 =
  "http://localhost:3845/assets/2b7d7c17ac69f544deee81552b5ab3a3673dd86e.png";
const imgEllipse16 =
  "http://localhost:3845/assets/f2b51e17ec8d9ecd0987b07ebd55a4b6a913d500.png";
const imgEllipse13 =
  "http://localhost:3845/assets/6227ced6e11f4b7f2d2a5bf83c39d326ac077d77.png";
const imgEllipse17 =
  "http://localhost:3845/assets/4763be184480053c855b8a64e92cff33291bfd9c.png";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center bg-white shadow-sm h-[100px]">
      <div className="w-full max-w-[1440px] h-full px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            alt="WristDigital Logo"
            className="w-[61px] h-[41px]"
            src={imgGroup2}
          />
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-10 text-[#193495] text-[20px] font-['Lato:SemiBold',sans-serif]">
          <a href="#" className="font-['Lato:SemiBold',sans-serif]">
            HOME
          </a>
          <a
            href="#"
            className="font-['Lato:ExtraBold',sans-serif] underline decoration-solid"
          >
            PRODUCTS
          </a>
          <a href="#" className="font-['Lato:SemiBold',sans-serif]">
            ACCESSORIES
          </a>
          <a href="#" className="font-['Lato:SemiBold',sans-serif]">
            SALE
          </a>
          <a href="#" className="font-['Lato:SemiBold',sans-serif]">
            BLOGS
          </a>
        </nav>

        {/* Search & Profile */}
        <div className="flex items-center gap-6">
          <div className="flex items-center border border-[#193495] border-solid h-[43px] rounded-[100px] px-4 w-[228px] bg-white">
            <img
              alt="Search Icon"
              className="w-[20px] h-[20px]"
              src={imgFrame23}
            />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full outline-none text-[15px] font-['Lato:Regular',sans-serif] text-[rgba(25,52,149,0.86)] bg-transparent"
            />
            <div className="w-[1px] h-[20px] bg-gray-300 mx-2"></div>
            <img
              alt="Filter Icon"
              className="w-[20px] h-[20px] cursor-pointer"
              src={imgFrame22}
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
