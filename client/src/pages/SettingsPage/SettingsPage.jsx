import React, { useMemo, useState } from "react";

const quickSections = [
  { id: "account", label: "Account Info" },
  { id: "security", label: "Security" },
  { id: "notifications", label: "Notifications" },
  { id: "privacy", label: "Privacy" },
  { id: "appearance", label: "Appearance" },
  { id: "danger-zone", label: "Danger Zone" },
];

function ToggleRow({ label, description, enabled, onToggle }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-[#0c1950]/10 last:border-b-0">
      <div>
        <p className="text-[16px] font-semibold text-[#0c1950]">{label}</p>
        <p className="text-[14px] text-[#0c1950]/60 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative mt-1 inline-flex h-[30px] w-[54px] items-center rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#193495]/40 ${
          enabled ? "bg-[#193495]" : "bg-[#c8d3f8]"
        }`}
      >
        <span
          className={`inline-block h-[24px] w-[24px] transform rounded-full bg-white transition-transform duration-200 ${
            enabled ? "translate-x-[26px]" : "translate-x-[3px]"
          }`}
        />
      </button>
    </div>
  );
}

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+84 123 456 789",
    birthday: "1996-04-18",
    country: "Vietnam",
    timezone: "GMT+07:00 (Asia/Ho_Chi_Minh)",
    language: "English",
    currency: "VND",
  });

  const [preferences, setPreferences] = useState({
    twoFactorAuth: true,
    loginAlerts: true,
    orderStatusUpdates: true,
    promotions: false,
    wishlistPriceDrop: true,
    stockNotifications: true,
    newsletterDigest: false,
    profileVisibility: false,
    shareUsageData: true,
    personalizedAds: false,
    compactLayout: false,
    reducedMotion: false,
  });

  const [lastSavedAt, setLastSavedAt] = useState("");

  const saveStatusText = useMemo(() => {
    if (!lastSavedAt) {
      return "No recent changes saved yet";
    }
    return `Last saved at ${lastSavedAt}`;
  }, [lastSavedAt]);

  const onProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = (event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setLastSavedAt(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    );
  };

  return (
    <div className="w-full min-h-screen bg-white pb-20 pt-[120px] lg:pt-[151px]">
      <div className="max-w-[1211px] mx-auto px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10">
          <div>
            <h1 className="text-[28px] md:text-[36px] font-[900] text-[#193495] uppercase tracking-wide">
              SETTINGS
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#0c1950]/65 mt-2">
              Manage your personal information, security options, and
              notifications from one place.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="h-[48px] px-7 rounded-[12px] bg-[#193495] text-white text-[15px] font-bold hover:bg-[#1030b0] transition-colors duration-200 hover:shadow-[0_8px_22px_rgba(25,52,149,0.22)]"
          >
            Save All Changes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-7">
          <aside className="lg:sticky lg:top-[130px] h-fit">
            <div className="rounded-[20px] border border-[#193495]/15 bg-[#eaf0ff]/35 p-6">
              <div className="flex items-center gap-4">
                <img
                  src="/user-avatar.png"
                  alt="User avatar"
                  className="w-[62px] h-[62px] rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <p className="text-[17px] font-bold text-[#0c1950]">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="text-[13px] text-[#0c1950]/60 mt-0.5">
                    Premium account
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#193495]/10">
                <p className="text-[13px] uppercase tracking-[0.08em] text-[#193495]/70 font-bold mb-3">
                  Quick Sections
                </p>
                <div className="flex flex-col gap-2">
                  {quickSections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="h-[38px] px-3 rounded-[10px] flex items-center text-[14px] font-semibold text-[#0c1950]/75 hover:text-[#193495] hover:bg-[#193495]/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[14px] border border-[#193495]/15 bg-white p-4">
                <p className="text-[13px] font-bold text-[#193495] uppercase tracking-[0.08em]">
                  Save Status
                </p>
                <p className="text-[14px] text-[#0c1950]/70 mt-2">
                  {saveStatusText}
                </p>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSave} className="flex flex-col gap-7">
            <section
              id="account"
              className="rounded-[20px] border border-[#193495]/15 bg-white shadow-[0_8px_24px_rgba(10,25,80,0.05)] p-6 md:p-8"
            >
              <h2 className="text-[24px] font-[900] text-[#193495] uppercase">
                Account Information
              </h2>
              <p className="text-[14px] text-[#0c1950]/65 mt-2">
                Keep your account details up-to-date to ensure smooth checkout
                and order communication.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Last Name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>

                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="h-[48px] rounded-[12px] border border-[#193495]/20 px-4 text-[#0c1950]/70 bg-[#eaf0ff]/30 outline-none cursor-not-allowed"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Birthday
                  </span>
                  <input
                    type="date"
                    name="birthday"
                    value={profile.birthday}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Country
                  </span>
                  <input
                    type="text"
                    name="country"
                    value={profile.country}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Timezone
                  </span>
                  <input
                    type="text"
                    name="timezone"
                    value={profile.timezone}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>
              </div>
            </section>

            <section
              id="security"
              className="rounded-[20px] border border-[#193495]/15 bg-white shadow-[0_8px_24px_rgba(10,25,80,0.05)] p-6 md:p-8"
            >
              <h2 className="text-[24px] font-[900] text-[#193495] uppercase">
                Security
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Current Password
                  </span>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    New Password
                  </span>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  />
                </label>
              </div>

              <div className="mt-6 border border-[#193495]/15 rounded-[14px] px-4 md:px-6 bg-[#eaf0ff]/30">
                <ToggleRow
                  label="Two-Factor Authentication"
                  description="Require a verification code when logging in from a new device."
                  enabled={preferences.twoFactorAuth}
                  onToggle={() => togglePreference("twoFactorAuth")}
                />
                <ToggleRow
                  label="Login Activity Alerts"
                  description="Receive immediate alerts when suspicious sign-in attempts are detected."
                  enabled={preferences.loginAlerts}
                  onToggle={() => togglePreference("loginAlerts")}
                />
              </div>

              <div className="mt-6 rounded-[14px] border border-[#193495]/15 p-4 md:p-5">
                <p className="text-[15px] font-bold text-[#0c1950]">
                  Active Sessions
                </p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-[10px] border border-[#193495]/15 bg-[#eaf0ff]/30 p-3">
                    <p className="text-[14px] font-semibold text-[#0c1950]">
                      Chrome on Windows
                    </p>
                    <p className="text-[13px] text-[#0c1950]/55 mt-1">
                      Hanoi, Vietnam - Active now
                    </p>
                  </div>
                  <div className="rounded-[10px] border border-[#193495]/15 bg-[#eaf0ff]/20 p-3">
                    <p className="text-[14px] font-semibold text-[#0c1950]">
                      Safari on iPhone
                    </p>
                    <p className="text-[13px] text-[#0c1950]/55 mt-1">
                      Last active 2 days ago
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 h-[42px] px-5 rounded-[10px] border border-[#193495] text-[#193495] text-[14px] font-bold hover:bg-[#193495] hover:text-white transition-colors"
                >
                  Sign Out Other Sessions
                </button>
              </div>
            </section>

            <section
              id="notifications"
              className="rounded-[20px] border border-[#193495]/15 bg-white shadow-[0_8px_24px_rgba(10,25,80,0.05)] p-6 md:p-8"
            >
              <h2 className="text-[24px] font-[900] text-[#193495] uppercase">
                Notifications
              </h2>
              <div className="mt-4 border border-[#193495]/15 rounded-[14px] px-4 md:px-6 bg-[#eaf0ff]/25">
                <ToggleRow
                  label="Order Status Updates"
                  description="Get notified when your order is confirmed, shipped, or delivered."
                  enabled={preferences.orderStatusUpdates}
                  onToggle={() => togglePreference("orderStatusUpdates")}
                />
                <ToggleRow
                  label="Promotions and Deals"
                  description="Receive weekly promotions, flash-sale reminders, and loyalty offers."
                  enabled={preferences.promotions}
                  onToggle={() => togglePreference("promotions")}
                />
                <ToggleRow
                  label="Wishlist Price Drops"
                  description="Be alerted when products in your wishlist are discounted."
                  enabled={preferences.wishlistPriceDrop}
                  onToggle={() => togglePreference("wishlistPriceDrop")}
                />
                <ToggleRow
                  label="Back-in-Stock Alerts"
                  description="Send updates when out-of-stock products become available again."
                  enabled={preferences.stockNotifications}
                  onToggle={() => togglePreference("stockNotifications")}
                />
                <ToggleRow
                  label="Newsletter Digest"
                  description="Get monthly product trends and editorial picks from WristDigital."
                  enabled={preferences.newsletterDigest}
                  onToggle={() => togglePreference("newsletterDigest")}
                />
              </div>
            </section>

            <section
              id="privacy"
              className="rounded-[20px] border border-[#193495]/15 bg-white shadow-[0_8px_24px_rgba(10,25,80,0.05)] p-6 md:p-8"
            >
              <h2 className="text-[24px] font-[900] text-[#193495] uppercase">
                Privacy Controls
              </h2>
              <div className="mt-4 border border-[#193495]/15 rounded-[14px] px-4 md:px-6 bg-[#eaf0ff]/25">
                <ToggleRow
                  label="Private Profile"
                  description="Hide profile details from other users in review sections."
                  enabled={preferences.profileVisibility}
                  onToggle={() => togglePreference("profileVisibility")}
                />
                <ToggleRow
                  label="Share Usage Analytics"
                  description="Allow anonymous data collection to improve shopping experience."
                  enabled={preferences.shareUsageData}
                  onToggle={() => togglePreference("shareUsageData")}
                />
                <ToggleRow
                  label="Personalized Ads"
                  description="Use activity data to tailor advertisements and offers."
                  enabled={preferences.personalizedAds}
                  onToggle={() => togglePreference("personalizedAds")}
                />
              </div>
            </section>

            <section
              id="appearance"
              className="rounded-[20px] border border-[#193495]/15 bg-white shadow-[0_8px_24px_rgba(10,25,80,0.05)] p-6 md:p-8"
            >
              <h2 className="text-[24px] font-[900] text-[#193495] uppercase">
                Appearance and Region
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Language
                  </span>
                  <select
                    name="language"
                    value={profile.language}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  >
                    <option>English</option>
                    <option>Vietnamese</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[15px] font-bold text-[#0c1950]">
                    Currency
                  </span>
                  <select
                    name="currency"
                    value={profile.currency}
                    onChange={onProfileChange}
                    className="h-[48px] rounded-[12px] border border-[#193495]/25 px-4 text-[#0c1950] bg-white outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all"
                  >
                    <option>VND</option>
                    <option>USD</option>
                  </select>
                </label>
              </div>

              <div className="mt-6 border border-[#193495]/15 rounded-[14px] px-4 md:px-6 bg-[#eaf0ff]/25">
                <ToggleRow
                  label="Compact Layout"
                  description="Reduce spacing density for a tighter product list layout."
                  enabled={preferences.compactLayout}
                  onToggle={() => togglePreference("compactLayout")}
                />
                <ToggleRow
                  label="Reduced Motion"
                  description="Minimize animation effects for more comfortable navigation."
                  enabled={preferences.reducedMotion}
                  onToggle={() => togglePreference("reducedMotion")}
                />
              </div>
            </section>

            <section
              id="danger-zone"
              className="rounded-[20px] border border-[#ef4444]/30 bg-[#fff5f5] p-6 md:p-8"
            >
              <h2 className="text-[22px] md:text-[24px] font-[900] text-[#b42318] uppercase">
                Danger Zone
              </h2>
              <p className="text-[14px] text-[#7a271a] mt-2 leading-relaxed">
                Deactivating your account will lock access to your profile,
                order history, and saved preferences until reactivated.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="h-[42px] px-5 rounded-[10px] border border-[#b42318] text-[#b42318] font-bold hover:bg-[#b42318] hover:text-white transition-colors"
                >
                  Deactivate Account
                </button>
                <button
                  type="submit"
                  className="h-[42px] px-5 rounded-[10px] bg-[#193495] text-white font-bold hover:bg-[#1030b0] transition-colors"
                >
                  Save Current Settings
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

