import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../components/AuthLeftPanel";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-['Inter',sans-serif]">
      {/* ───── LEFT PANEL ─────────────────────────────────── */}
      <AuthLeftPanel>
        <div className="mb-10">
          <span className="inline-block text-[13px] font-semibold tracking-[0.2em] text-blue-300 uppercase mb-5">
            Join the Elite
          </span>
          <h2 className="text-[42px] font-black text-white leading-[1.15] mb-6">
            Join The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              Digital Elite.
            </span>
          </h2>

          {/* Feature list */}
          <ul className="space-y-4 mb-10 text-left">
            {[
              "Curated selection of premium smartwatches",
              "Priority worldwide insured shipping",
              "Exclusive member-only pre-orders",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-white/75 text-[15px] leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 w-fit bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
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
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8l4 4-4 4"></path>
              <path d="M8 12h8"></path>
            </svg>
            See our products
          </Link>
        </div>

        {/* Quote */}
        <p className="text-white/50 text-[13px] italic mt-10 pt-8 border-t border-white/10 w-full">
          "WristDigital fundamentally changed how I acquire luxury tech."
        </p>
      </AuthLeftPanel>

      {/* ───── RIGHT PANEL ─────────────────────────────────── */}
      <div className="md:w-1/2 bg-[#f9fafb] flex flex-col overflow-y-auto">
        {/* Mobile logo */}
        <div className="md:hidden flex justify-center pt-10 pb-4">
          <img
            src="/blue-logo.png"
            alt="WristDigital"
            className="h-9 object-contain"
          />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-[440px]">
            {/* Heading */}
            <div className="mb-7">
              <h1 className="text-[30px] font-black text-[#0c1950] tracking-tight leading-tight mb-2">
                Create your account
              </h1>
              <p className="text-gray-500 text-[15px]">
                Already have one?{" "}
                <Link
                  to="/login"
                  className="text-[#193495] font-semibold hover:underline"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="flex items-center justify-center gap-2 h-[48px] rounded-[12px] bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-[14px] font-semibold text-gray-700">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 h-[48px] rounded-[12px] bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-[14px] font-semibold text-gray-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.102 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.04 1.522-.054 2.093-.976 3.935-.976 1.84 0 2.366.976 3.96.935 1.638-.04 2.66-1.496 3.66-2.95 1.161-1.692 1.64-3.327 1.66-3.413-.038-.016-3.193-1.22-3.218-4.856-.021-3.04 2.483-4.524 2.593-4.59-1.425-2.083-3.633-2.365-4.417-2.446-1.748-.204-3.606 1.192-4.563 1.192zm3.178-5.3c.874-1.054 1.464-2.528 1.303-4.002-1.272.05-2.822.845-3.717 1.905-.8.948-1.503 2.449-1.32 3.91 1.415.11 2.862-.763 3.734-1.813z" />
                </svg>
                Apple
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-[13px] text-gray-400 font-medium whitespace-nowrap">
                or register with email
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full h-[48px] px-4 rounded-[12px] border border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#193495] focus:ring-3 focus:ring-[#193495]/10 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full h-[48px] px-4 rounded-[12px] border border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#193495] focus:ring-3 focus:ring-[#193495]/10 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full h-[48px] pl-11 pr-4 rounded-[12px] border border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#193495] focus:ring-3 focus:ring-[#193495]/10 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min. 8 characters"
                    className="w-full h-[48px] pl-11 pr-12 rounded-[12px] border border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#193495] focus:ring-3 focus:ring-[#193495]/10 transition-all"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Confirm password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat your password"
                  className="w-full h-[48px] px-4 rounded-[12px] border border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#193495] focus:ring-3 focus:ring-[#193495]/10 transition-all"
                  required
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#193495] focus:ring-[#193495] cursor-pointer shrink-0"
                />
                <label
                  htmlFor="terms"
                  className="text-[13px] text-gray-500 leading-relaxed cursor-pointer"
                >
                  I agree to WristDigital's{" "}
                  <Link
                    to="/help"
                    className="text-[#193495] font-semibold hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/help"
                    className="text-[#193495] font-semibold hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full h-[52px] rounded-[12px] text-[15px] font-bold text-white tracking-wide transition-all duration-300 flex items-center justify-center gap-2 mt-1 ${
                  isLoading
                    ? "bg-[#193495]/60 cursor-not-allowed"
                    : "bg-[#193495] hover:bg-[#0c1950] hover:shadow-[0_8px_24px_rgba(25,52,149,0.35)] hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
