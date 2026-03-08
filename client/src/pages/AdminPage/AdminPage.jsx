import React, { useState } from "react";
import { Link, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser } from "../../features/auth/authSlice";

import AdminDashboard from "./AdminDashboard";
import AdminProducts from "./AdminProducts";
import AdminBrands from "./AdminBrands";
import AdminCategories from "./AdminCategories";
import AdminUsers from "./AdminUsers";
import AdminOrders from "./AdminOrders";

export default function AdminPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { label: "Overview", path: "/admin/dashboard", icon: "grid" },
    { label: "Products", path: "/admin/products", icon: "box" },
    { label: "Brands", path: "/admin/brands", icon: "tag" },
    { label: "Categories", path: "/admin/categories", icon: "folder" },
    { label: "Users", path: "/admin/users", icon: "user" },
    { label: "Orders", path: "/admin/orders", icon: "cart" },
  ];

  const getIcon = (type, isActive) => {
    const props = {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `transition-all duration-300 ${isActive ? "text-[#193495]" : "text-gray-400 group-hover:text-gray-600"}`,
    };

    switch (type) {
      case "grid":
        return (
          <svg {...props}>
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
        );
      case "box":
        return (
          <svg {...props}>
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
        );
      case "tag":
        return (
          <svg {...props}>
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42l-8.704-8.704z" />
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
          </svg>
        );
      case "folder":
        return (
          <svg {...props}>
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
          </svg>
        );
      case "user":
        return (
          <svg {...props}>
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "cart":
        return (
          <svg {...props}>
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex h-screen w-full bg-[#F4F7FE] font-['Lato:Regular',sans-serif]">
      {/* ─── Sidebar ────────────────────────────────────────────── */}
      <aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col flex-shrink-0 relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        {/* Brand Logo */}
        <div className="h-[80px] flex items-center px-8 border-b border-gray-50">
          <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform cursor-pointer group">
            <img src="/blue-logo.png" alt="Logo" className="w-[45px] h-[30px] group-hover:scale-105 transition-transform" />
            <span className="font-['Alegreya_Sans:Bold',sans-serif] text-[22px] text-[#0c1950]">Workspace</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          <p className="px-4 text-[11px] font-['Lato:Bold',sans-serif] text-gray-400 uppercase tracking-wider mb-4">
            Menu
          </p>
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-4 px-4 py-3.5 rounded-[12px] transition-all duration-300 group ${
                  isActive
                    ? "bg-[#193495]/5 text-[#193495]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-[#0c1950]"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#193495] rounded-r-lg" />
                )}
                {getIcon(item.icon, isActive)}
                <span className={`text-[15px] ${isActive ? "font-['Lato:Bold',sans-serif]" : "font-medium"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Bottom */}
        <div className="p-4 border-t border-gray-50 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-[12px] bg-gray-50 hover:bg-red-50 hover:text-red-600 text-gray-600 font-['Lato:Bold',sans-serif] text-[14px] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Sign Out Option 2
          </button>
        </div>
      </aside>

      {/* ─── Main Content Area ───────────────────────────────────── */}
      <div className="flex-1 flex flex-col h-full bg-[#f8fafc]">
        {/* Top Header */}
        <header className="h-[80px] bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 flex-shrink-0 z-10 sticky top-0">
          <div className="flex items-center gap-4 w-1/3">
             <div className="relative w-full max-w-[320px]">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
               </svg>
               <input 
                  type="text" 
                  placeholder="Search admin records..." 
                  className="w-full h-[44px] pl-11 pr-4 bg-gray-50 hover:bg-gray-100 focus:bg-white border border-transparent focus:border-[#193495]/30 focus:ring-4 focus:ring-[#193495]/10 outline-none rounded-full text-[14px] transition-all"
               />
             </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-[#193495] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></div>
            </button>

            <div className="h-8 w-[1px] bg-gray-200"></div>

            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 focus:outline-none group"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] leading-none">{user?.fullName || "Admin"}</p>
                  <p className="text-[12px] text-gray-400 mt-1 capitalize">{user?.role || "Administrator"}</p>
                </div>
                <div className="h-[44px] w-[44px] rounded-full overflow-hidden bg-gradient-to-tr from-[#193495] to-[#4361ee] p-[2px]">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-2 border-white overflow-hidden">
                    {user?.avatar ? (
                      <img src={user.avatar} className="w-full h-full object-cover" alt="Admin Provider" />
                    ) : (
                      <span className="text-[14px] font-['Lato:Bold',sans-serif] text-[#193495]">AD</span>
                    )}
                  </div>
                </div>
              </button>
               {isProfileOpen && (
                 <div className="absolute top-[calc(100%+12px)] right-0 w-[200px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-2 transform origin-top-right transition-all">
                    <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-[13px] font-medium text-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      Go to Store
                    </Link>
                    <div className="h-[1px] w-full bg-gray-100 my-1"></div>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-[13px] font-medium text-red-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                      Sign Out
                    </button>
                 </div>
               )}
            </div>
          </div>
        </header>

        {/* Page Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto w-full p-8 md:p-10 z-0">
          <div className="max-w-[1240px] mx-auto w-full pb-20">
            <Routes>
              <Route path="/" element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="brands" element={<AdminBrands />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="orders" element={<AdminOrders />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
