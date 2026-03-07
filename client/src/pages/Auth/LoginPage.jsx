import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../components/AuthLeftPanel";
import { useLoginMutation } from "../../features/auth/authApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setServerError("");

    try {
      await login({ email, password }).unwrap();
      navigate("/");
    } catch (err) {
      const msg =
        err?.data?.message ||
        err?.error ||
        "Login failed. Please check your credentials.";
      setServerError(msg);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-['Inter',sans-serif]">
      {/* ───── LEFT PANEL ─────────────────────────────────── */}
      <AuthLeftPanel>
        <div className="mb-10">
          <span className="inline-block text-[13px] font-semibold tracking-[0.2em] text-blue-300 uppercase mb-5">
            Premium Smartwatches
          </span>
          <h2 className="text-[42px] font-black text-white leading-[1.15] mb-6">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              Digital Experience.
            </span>
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.75] max-w-[340px] mx-auto">
            Log in to access your curated collection, track your premium orders
            in real-time, and get exclusive early access to our luxury
            smartwatch drops.
          </p>
        </div>

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

        {/* Social proof */}
        <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/10 w-full justify-center">
          <div className="flex -space-x-3">
            {["JD", "AL", "KM", "PQ"].map((init, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400/40 to-indigo-600/40 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-white text-[11px] font-bold">{init}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-white text-[13px] font-semibold">
              10,000+ members
            </p>
            <p className="text-white/50 text-[12px]">trusted worldwide</p>
          </div>
        </div>
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
            <div className="mb-8">
              <h1 className="text-[32px] font-black text-[#0c1950] tracking-tight leading-tight mb-2">
                Welcome back
              </h1>
              <p className="text-gray-500 text-[15px]">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-[#193495] font-semibold hover:underline"
                >
                  Create one free
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
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-[13px] text-gray-400 font-medium">
                or continue with email
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Server Error Banner */}
            {serverError && (
              <div className="mb-5 px-4 py-3 rounded-[10px] bg-red-50 border border-red-200 flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-[13px] text-red-600 leading-relaxed">
                  {serverError}
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-2">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-[50px] pl-11 pr-4 rounded-[12px] border border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#193495] focus:ring-3 focus:ring-[#193495]/10 transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[13px] font-semibold text-gray-700">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-[13px] text-[#193495] font-medium hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-[50px] pl-11 pr-12 rounded-[12px] border border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#193495] focus:ring-3 focus:ring-[#193495]/10 transition-all tracking-widest"
                    required
                    disabled={isLoading}
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

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#193495] focus:ring-[#193495] cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-[13px] text-gray-600 cursor-pointer select-none"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full h-[52px] rounded-[12px] text-[15px] font-bold text-white tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
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
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* Terms */}
            <p className="text-center text-[12px] text-gray-400 mt-6 leading-relaxed">
              By signing in, you agree to our{" "}
              <Link
                to="/help"
                className="text-gray-500 hover:text-[#193495] underline underline-offset-2"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="/help"
                className="text-gray-500 hover:text-[#193495] underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
