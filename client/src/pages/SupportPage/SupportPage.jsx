import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: "delivery", label: "Delivery Policy" },
  { id: "return-refund", label: "Return & Refund Policy" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Service" },
  { id: "how-to-order", label: "How to Order" },
  { id: "faq", label: "FAQ" },
];

const SupportPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("delivery");

  // Read the ?tab=xxx query param on load or location change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam && tabs.some((t) => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  // Update query param when clicking a tab
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    navigate(`/help?tab=${tabId}`, { replace: true });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "delivery":
        return (
          <div className="flex flex-col gap-6 text-[#0c1950] animate-fadeIn">
            <h2 className="text-[32px] md:text-[40px] font-[900] text-[#193495] uppercase tracking-wide">
              Delivery Policy
            </h2>
            <p className="text-[18px] leading-relaxed text-[#0c1950]/80">
              At <strong className="text-[#193495]">WristDigital</strong>, we
              recognize that when you invest in premium technology, you expect a
              delivery experience that matches that standard. We have tailored
              our shipping protocols to ensure maximum security, speed, and
              transparency from the moment your order is confirmed until it is
              safely in your hands.
            </p>

            <div className="bg-[#eaf0ff]/40 p-8 rounded-[20px] mt-4 border border-[#eaf0ff]">
              <h3 className="text-[24px] font-bold text-[#193495] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#193495] text-white flex items-center justify-center text-[16px]">
                  1
                </span>
                Comprehensive Delivery Timeframes
              </h3>
              <p className="mt-4 leading-relaxed text-[16px]">
                Our fulfillment centers operate 6 days a week to ensure your
                orders are processed rapidly. Once an order is placed and
                payment is verified, it enters our dispatch queue immediately.
              </p>
              <ul className="mt-4 list-disc pl-5 leading-relaxed space-y-3">
                <li>
                  <strong>Standard Metropolitan Shipping:</strong> 2-3 business
                  days within major cities such as Hanoi, Ho Chi Minh City, and
                  Da Nang. Our local courier partners guarantee safe handling of
                  high-value electronics.
                </li>
                <li>
                  <strong>Express VIP Shipping:</strong> Same-day or next-day
                  delivery (available exclusively in selected metropolitan
                  regions). Orders must be placed before 12:00 PM local time to
                  qualify. Additional verification steps might apply.
                </li>
                <li>
                  <strong>Rural & Remote Area Delivery:</strong> 4-7 business
                  days. We partner with specialized national logistics providers
                  to ensure coverage across all provinces safely, though transit
                  times are naturally extended.
                </li>
              </ul>
            </div>

            <div className="bg-[#eaf0ff]/40 p-8 rounded-[20px] mt-4 border border-[#eaf0ff]">
              <h3 className="text-[24px] font-bold text-[#193495] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#193495] text-white flex items-center justify-center text-[16px]">
                  2
                </span>
                Transparent Shipping Costs
              </h3>
              <p className="mt-4 leading-relaxed text-[16px]">
                We believe in transparent pricing without hidden fees. Shipping
                costs are calculated dynamically at checkout based on the
                delivery destination and selected courier service.
              </p>
              <p className="mt-4 leading-relaxed font-bold bg-[#193495]/10 p-4 rounded-lg inline-block text-[#193495]">
                🎉 Enjoy Free Standard Shipping on all orders over 5,000,000 đ
                nationwide!
              </p>
            </div>

            <div className="bg-[#eaf0ff]/40 p-8 rounded-[20px] mt-4 border border-[#eaf0ff]">
              <h3 className="text-[24px] font-bold text-[#193495] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#193495] text-white flex items-center justify-center text-[16px]">
                  3
                </span>
                Real-Time Order Tracking & Security
              </h3>
              <p className="mt-4 leading-relaxed text-[16px]">
                As soon as your package leaves our secure facility, you will
                receive a dispatch confirmation email and SMS containing a
                unique tracking link. This link provides real-time GPS updates
                from our courier partners.
              </p>
              <p className="mt-4 leading-relaxed text-[16px]">
                <strong>High-Value Item Protocol:</strong> For items exceeding
                10,000,000 đ, our couriers are instructed to require a secure
                PIN code (sent to your registered phone number) upon delivery to
                ensure items are handed strictly to the purchasing party.
              </p>
            </div>
          </div>
        );
      case "return-refund":
        return (
          <div className="flex flex-col gap-6 text-[#0c1950] animate-fadeIn">
            <h2 className="text-[32px] md:text-[40px] font-[900] text-[#193495] uppercase tracking-wide">
              Return & Refund Policy
            </h2>
            <p className="text-[18px] leading-relaxed text-[#0c1950]/80">
              Your satisfaction and confidence in our products are paramount. We
              strictly enforce a consumer-friendly, transparent Return & Refund
              Policy to ensure you are fully protected when shopping with
              WristDigital.
            </p>

            <div className="border-l-4 border-[#193495] pl-6 py-2 mt-4">
              <h3 className="text-[24px] font-bold text-[#193495]">
                Eligibility for Standard Returns
              </h3>
              <p className="mt-3 leading-relaxed">
                If you experience a change of mind, you may initiate a return
                within <strong>14 days</strong> of the delivery date. To qualify
                for a standard return, the product must meet the following
                strict conditions:
              </p>
              <ul className="mt-3 list-none space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>
                    The item is in its original, unopened packaging with all
                    manufacturer seals intact.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>
                    All promotional items, free gifts, and accessories included
                    in the original bundle are returned.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>
                    <strong>Important:</strong> Used, activated, or scratched
                    devices, unsealed boxes, or products registered to an Apple
                    ID/Garmin Connect account cannot be returned under the
                    change-of-mind policy.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-[#193495] pl-6 py-2 mt-6">
              <h3 className="text-[24px] font-bold text-[#193495]">
                Handling Manufacturer Defects (DOA)
              </h3>
              <p className="mt-3 leading-relaxed">
                In the highly unlikely event that your premium smartwatch
                presents a hardware flaw out of the box (Dead on Arrival),
                please contact our technical support hotline within{" "}
                <strong>7 days</strong> of receipt.
              </p>
              <p className="mt-3 leading-relaxed">
                We will arrange a free secure pickup of the defective unit. Once
                received, our authorized technicians will perform a diagnostic
                test (typically taking 24-48 hours). Upon verification of a
                manufacturer defect, you will be offered a choice of a brand-new
                1-to-1 replacement or a full refund.
              </p>
            </div>

            <div className="border-l-4 border-[#193495] pl-6 py-2 mt-6">
              <h3 className="text-[24px] font-bold text-[#193495]">
                The Refund Process
              </h3>
              <p className="mt-3 leading-relaxed">
                Refunds are processed promptly to ensure a smooth resolution.
                Once your returned item is received, inspected, and approved by
                our quality control team, the refund will be initiated
                immediately.
              </p>
              <ul className="mt-3 list-disc pl-5 leading-relaxed space-y-2">
                <li>
                  <strong>Credit/Debit Cards & E-Wallets:</strong> Funds will
                  typically reflect back on your statement within 5-7 business
                  days, depending on your bank's clearing cycle.
                </li>
                <li>
                  <strong>Bank Transfers:</strong> Processed within 2-3 business
                  days.
                </li>
                <li>
                  Please note that original express shipping surcharges are
                  non-refundable.
                </li>
              </ul>
            </div>
          </div>
        );
      case "privacy":
        return (
          <div className="flex flex-col gap-6 text-[#0c1950] animate-fadeIn">
            <h2 className="text-[32px] md:text-[40px] font-[900] text-[#193495] uppercase tracking-wide">
              Privacy Policy
            </h2>
            <p className="text-[18px] leading-relaxed text-[#0c1950]/80">
              Trust is the foundation of our relationship with our customers.
              This comprehensive Privacy Policy outlines the stringent measures
              WristDigital employs to collect, utilize, and fiercely safeguard
              your personal data in accordance with modern data protection
              regulations.
            </p>

            <h3 className="text-[24px] font-bold text-[#193495] mt-6 border-b-2 border-gray-200 pb-2">
              1. Comprehensive Data Collection
            </h3>
            <p className="leading-relaxed mt-2">
              We collect information explicitly to provide you with a
              frictionless, personalized shopping experience. The scope of our
              data collection includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-50 p-6 rounded-[15px]">
                <h4 className="font-bold text-[18px] mb-2 text-[#193495]">
                  Provided Data
                </h4>
                <p className="text-[15px] leading-relaxed border-l-2 border-gray-300 pl-3">
                  Full name, billing and shipping addresses, email addresses,
                  phone numbers, and securely tokenized payment references
                  submitted during checkout or profile creation.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-[15px]">
                <h4 className="font-bold text-[18px] mb-2 text-[#193495]">
                  Automated Data
                </h4>
                <p className="text-[15px] leading-relaxed border-l-2 border-gray-300 pl-3">
                  IP addresses, browser types, device fingerprints, navigation
                  paths, and interaction metrics gathered through secure cookies
                  to optimize our platform's performance and UI/UX.
                </p>
              </div>
            </div>

            <h3 className="text-[24px] font-bold text-[#193495] mt-8 border-b-2 border-gray-200 pb-2">
              2. Ethical Utilization of Your Data
            </h3>
            <p className="leading-relaxed mt-2">
              Your data is never utilized frivolously. It is systematically
              applied to:
            </p>
            <ul className="list-disc pl-5 leading-relaxed space-y-3 mt-4">
              <li>
                Efficiently process your financial transactions and manage rapid
                order fulfillment.
              </li>
              <li>
                Provide critical administrative communications, including fraud
                alerts, shipping updates, and warranty registrations.
              </li>
              <li>
                Empower our customer support team to quickly identify your
                profile and provide highly contextual, swift assistance.
              </li>
              <li>
                Deliver tailored marketing communications (strictly opt-in)
                concerning upcoming tech releases, exclusive sales, or VIP
                events.
              </li>
            </ul>

            <h3 className="text-[24px] font-bold text-[#193495] mt-8 border-b-2 border-gray-200 pb-2">
              3. Absolute Data Protection & Security
            </h3>
            <p className="leading-relaxed mt-2">
              WristDigital employs enterprise-grade security protocols. All data
              transmissions are encrypted using advanced SSL/TLS encryption.
              Financial data is never stored on our servers; it is handled
              entirely by PCI-DSS compliant payment gateways (Visa, VNPay,
              Momo).
            </p>
            <div className="bg-red-50 text-red-800 p-4 rounded-[10px] mt-4 font-medium border border-red-200">
              We explicitly declare that WristDigital does NOT, under any
              circumstances, sell, rent, or trade your personal or financial
              data to third-party data brokers, advertising networks, or
              unauthorized entities.
            </div>
          </div>
        );
      case "terms":
        return (
          <div className="flex flex-col gap-6 text-[#0c1950] animate-fadeIn">
            <h2 className="text-[32px] md:text-[40px] font-[900] text-[#193495] uppercase tracking-wide">
              Terms of Service
            </h2>
            <p className="text-[18px] leading-relaxed text-[#0c1950]/80">
              Welcome to WristDigital. By navigating our platform, creating an
              account, or placing an order, you explicitly agree to be bound by
              the following comprehensive Terms of Service. These terms govern
              the relationship between you and WristDigital.
            </p>

            <div className="space-y-8 mt-6">
              <div>
                <h3 className="text-[24px] font-bold text-[#193495]">
                  Section 1: General Conditions & Platform Access
                </h3>
                <p className="leading-relaxed mt-3">
                  We reserve the right to refuse service to any individual or
                  entity for any reason at any time, primarily to prevent fraud,
                  abuse, or unauthorized bulk purchases. You agree not to
                  reproduce, duplicate, copy, sell, reverse-engineer, resell, or
                  exploit any portion of the Service, the UI, or the underlying
                  codebase without express, legally binding written permission
                  from WristDigital corporate.
                </p>
              </div>

              <div>
                <h3 className="text-[24px] font-bold text-[#193495]">
                  Section 2: Products, Pricing & Availability
                </h3>
                <p className="leading-relaxed mt-3">
                  As an authorized distributor of highly volatile technology
                  markets, our prices are subject to change without prior notice
                  based on manufacturer MSPs and exchange rates. We reserve the
                  right to modify or discontinue any product line without
                  liability to you or any third party.
                </p>
                <p className="leading-relaxed mt-3">
                  While we invest heavily in ensuring high-fidelity imagery and
                  accurate descriptions, we cannot guarantee that your device
                  monitor's display of any color will be perfectly accurate. We
                  do not warrant that the quality of any products, services, or
                  information purchased will universally meet your subjective
                  expectations, though we stand by our strict quality control.
                </p>
              </div>

              <div>
                <h3 className="text-[24px] font-bold text-[#193495]">
                  Section 3: Accuracy of Billing & Fraud Prevention
                </h3>
                <p className="leading-relaxed mt-3">
                  To protect our genuine customers, we employ advanced AI-driven
                  fraud detection. We reserve the right to refuse any order, or
                  limit quantities purchased per person, per household, or per
                  credit card. If we suspect fraudulent activity, we may attempt
                  to notify you via the email or billing address provided, or
                  unilaterally cancel the transaction. Your submission of an
                  order explicitly warrants that you are providing current,
                  complete, and legally accurate purchase information.
                </p>
              </div>
            </div>
          </div>
        );
      case "how-to-order":
        return (
          <div className="flex flex-col gap-6 text-[#0c1950] animate-fadeIn">
            <h2 className="text-[32px] md:text-[40px] font-[900] text-[#193495] uppercase tracking-wide">
              How to Order
            </h2>
            <p className="text-[18px] leading-relaxed text-[#0c1950]/80 mb-6">
              At WristDigital, we've engineered a seamless, premium checkout
              experience. Securing your next luxury tech accessory is intuitive,
              fast, and entirely secure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:border-[#193495] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#eaf0ff] text-[#193495] flex items-center justify-center font-bold text-[28px] mb-6 group-hover:bg-[#193495] group-hover:text-white transition-colors">
                  1
                </div>
                <h4 className="font-[900] text-[22px] uppercase mb-4 text-[#193495]">
                  Discovery
                </h4>
                <p className="leading-relaxed text-[#0c1950]/80">
                  Navigate our sophisticated catalog of smartwatches and
                  accessories. Utilize our highly granular filter panel to
                  narrow down by Brand, Price, and Case Material. Click on any
                  product to enter its detailed specification page to review
                  high-res images and extensive technical metrics.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:border-[#193495] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#eaf0ff] text-[#193495] flex items-center justify-center font-bold text-[28px] mb-6 group-hover:bg-[#193495] group-hover:text-white transition-colors">
                  2
                </div>
                <h4 className="font-[900] text-[22px] uppercase mb-4 text-[#193495]">
                  Customization
                </h4>
                <p className="leading-relaxed text-[#0c1950]/80">
                  Select your exact preferences—such as Case Size (e.g., 43mm vs
                  47mm), Band Material (Titanium, Silicone, Leather), and Color
                  variants. Ensure you review the stock availability indicator
                  before clicking the bold "Add to Cart" button to secure your
                  reservation.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:border-[#193495] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#eaf0ff] text-[#193495] flex items-center justify-center font-bold text-[28px] mb-6 group-hover:bg-[#193495] group-hover:text-white transition-colors">
                  3
                </div>
                <h4 className="font-[900] text-[22px] uppercase mb-4 text-[#193495]">
                  Secure Checkout
                </h4>
                <p className="leading-relaxed text-[#0c1950]/80">
                  Access your Shopping Cart via the navigation bar. Review your
                  total breakdown. Proceed to our encrypted checkout gateway.
                  Input your accurate delivery credentials. We support a
                  plethora of payment methods including modern local e-wallets
                  (Momo, ZaloPay, VNPay) and international credit networks
                  (Visa, Mastercard, Napas).
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:border-[#193495] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#eaf0ff] text-[#193495] flex items-center justify-center font-bold text-[28px] mb-6 group-hover:bg-[#193495] group-hover:text-white transition-colors">
                  4
                </div>
                <h4 className="font-[900] text-[22px] uppercase mb-4 text-[#193495]">
                  Order Confirmation
                </h4>
                <p className="leading-relaxed text-[#0c1950]/80">
                  Upon a successful payment handshake, an immutable order
                  successfully screen will appear. Simultaneously, a highly
                  detailed digital invoice and GPS tracking portal link will be
                  securely delivered to your registered email address. Welcome
                  to the WristDigital family.
                </p>
              </div>
            </div>
          </div>
        );
      case "faq":
        return (
          <div className="flex flex-col gap-6 text-[#0c1950] animate-fadeIn">
            <h2 className="text-[32px] md:text-[40px] font-[900] text-[#193495] uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
            <p className="text-[18px] leading-relaxed text-[#0c1950]/80 mb-6">
              We have compiled a comprehensive database of our most common
              inquiries to provide you with immediate, highly accurate answers
              without having to wait for a support agent.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#eaf0ff]/30 p-8 rounded-[15px] border-l-4 border-[#193495]">
                <h4 className="font-[900] text-[20px] text-[#193495] mb-2 uppercase tracking-wider">
                  Are your products strictly 100% authentic?
                </h4>
                <p className="leading-relaxed text-[#0c1950]/90">
                  Absolutely. We maintain a zero-tolerance policy for
                  counterfeits. WristDigital operates as a legally contracted,
                  authorized tier-1 distributor and reseller for elite global
                  brands including Apple, Garmin, Samsung, and Huawei inside
                  Vietnam. Every unit is imported through official channels,
                  retains full original manufacturer sealing, and is accompanied
                  by legitimate VAT invoices.
                </p>
              </div>

              <div className="bg-[#eaf0ff]/30 p-8 rounded-[15px] border-l-4 border-[#193495]">
                <h4 className="font-[900] text-[20px] text-[#193495] mb-2 uppercase tracking-wider">
                  How does the warranty claim system work?
                </h4>
                <p className="leading-relaxed text-[#0c1950]/90">
                  All hardware purchased from WristDigital carries the brand's
                  complete, uncompromised global/local 1-year warranty. Should
                  you encounter a technical failure, you possess two distinct
                  avenues: you may bring the device directly to any Authorized
                  Service Provider (e.g., Apple Authorized Service Provider,
                  Garmin Service Center) nationwide, or you may return it to a
                  WristDigital hub, and our logistics team will proxy the
                  warranty claim on your behalf at zero extra cost.
                </p>
              </div>

              <div className="bg-[#eaf0ff]/30 p-8 rounded-[15px] border-l-4 border-[#193495]">
                <h4 className="font-[900] text-[20px] text-[#193495] mb-2 uppercase tracking-wider">
                  Can I modify or augment my order post-checkout?
                </h4>
                <p className="leading-relaxed text-[#0c1950]/90">
                  To ensure industry-leading shipping times, our warehouse
                  dispatch systems are heavily automated. Consequently, order
                  modifications (address changes, variant swaps) or
                  cancellations can ONLY be facilitated within a strict{" "}
                  <strong>1-hour window</strong> post-purchase. If you realize
                  an error, you must bypass email and call our high-priority
                  support hotline immediately to intercept the order before it
                  enters the locked dispatch pipeline.
                </p>
              </div>

              <div className="bg-[#eaf0ff]/30 p-8 rounded-[15px] border-l-4 border-[#193495]">
                <h4 className="font-[900] text-[20px] text-[#193495] mb-2 uppercase tracking-wider">
                  Do you facilitate B2B or extensive corporate orders?
                </h4>
                <p className="leading-relaxed text-[#0c1950]/90">
                  Yes, WristDigital heavily scales to support enterprise
                  clients, offering corporate gifting programs and B2B volume
                  procurement. We provide aggressive volume tier discounts,
                  custom engraving services (applicable to certain Apple and
                  Garmin models), and dedicated enterprise account managers.
                  Please email <strong>enterprise@wristdigital.vn</strong> for a
                  bespoke quotation.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] bg-gradient-to-r from-[#0c1950] to-[#193495] pt-[100px] flex items-center justify-center overflow-hidden">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-white/5 blur-[120px] rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-[#4f75ff]/20 blur-[100px] rounded-full mix-blend-overlay"></div>

        <div className="max-w-[1211px] w-full px-5 xl:px-0 relative flex flex-col items-center text-center z-10">
          <h1 className="text-[48px] md:text-[64px] font-[900] text-white uppercase tracking-tight leading-tight">
            How Can We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              Help You?
            </span>
          </h1>
          <p className="mt-4 text-[18px] md:text-[22px] text-white/80 max-w-[700px] leading-relaxed font-['Lato']">
            Access our comprehensive knowledge base, policies, and premium
            support channels. We ensure your WristDigital experience is flawless
            from discovery to delivery.
          </p>

          <div className="mt-10 relative w-full max-w-[600px] mx-auto hidden md:block">
            <input
              type="text"
              placeholder="Search for articles, tracking info, or policies..."
              className="w-full h-[60px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-8 pr-16 text-white text-[18px] outline-none focus:border-white/50 focus:bg-white/20 transition-all placeholder-white/50"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1211px] mx-auto px-5 xl:px-0 pb-24 pt-12">
        {/* Main Content Area */}
        <div className="w-full bg-white min-w-0">
          {/* Horizontal Navigation Tabs */}
          <div className="w-full overflow-x-auto pb-4 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div className="flex items-center min-w-max border-b-2 border-gray-100">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`relative py-4 px-5 md:px-8 text-[16px] md:text-[20px] font-bold transition-colors whitespace-nowrap
                      ${isActive ? "text-[#193495]" : "text-[#0c1950]/60 hover:text-[#0c1950]"}`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-[#193495] rounded-t-md"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Document */}
          <div className="w-full">{renderContent()}</div>

          {/* Mobile/Tablet Fallback Contact Component */}
          <div className="block lg:hidden mt-12 bg-[#0c1950] rounded-[24px] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <h3 className="text-[28px] font-[900] uppercase tracking-wide mb-4 leading-tight">
              Need Direct <br /> Assistance?
            </h3>
            <p className="text-white/80 leading-relaxed text-[16px] mb-8">
              If you cannot find the answer within our documentation, our
              dedicated technical advisors are standing by to assist you.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-[18px]">VIP Hotline</h5>
                  <p className="text-white/70 text-[14px] mt-1">
                    +84 (0)24 3946 5200
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                <div>
                  <h5 className="font-bold text-[18px]">Email Support</h5>
                  <a
                    href="mailto:support@wristdigital.vn"
                    className="text-blue-300 hover:text-white transition-colors text-[14px] mt-1 block"
                  >
                    support@wristdigital.vn
                  </a>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 bg-white text-[#0c1950] h-[55px] rounded-[15px] font-[900] text-[16px] uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg">
              Open Live Chat
            </button>
          </div>
        </div>
      </div>

      {/* Floating Sticky Contact Component (Laptop/Desktop) */}
      <div className="fixed bottom-10 right-10 z-50 hidden lg:block w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[24px] hover:-translate-y-2 transition-transform duration-300 ease-out">
        <div className="bg-gradient-to-br from-[#0c1950] to-[#12246b] rounded-[24px] p-8 text-white relative overflow-hidden border border-white/10">
          {/* Card visual noise */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <h3 className="text-[24px] font-[900] uppercase tracking-wide mb-3 leading-tight drop-shadow-md">
            Need Direct <br /> Assistance?
          </h3>
          <p className="text-white/80 leading-relaxed text-[14px] mb-8 font-light">
            Skip the reading. Our absolute premium tier support advisors are
            fully available to assist you immediately over live chat or phone.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-[16px]">VIP Hotline</h5>
                <p className="text-white/70 text-[13px] mt-0.5 tracking-wide">
                  +84 (0)24 3946 5200
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              <div>
                <h5 className="font-bold text-[16px]">Email Support</h5>
                <a
                  href="mailto:support@wristdigital.vn"
                  className="text-blue-300 hover:text-white transition-colors text-[13px] mt-0.5 block tracking-wide"
                >
                  support@wristdigital.vn
                </a>
              </div>
            </div>
          </div>

          <button className="w-full mt-8 bg-white text-[#0c1950] h-[50px] rounded-[12px] font-[900] text-[14px] uppercase tracking-wider hover:bg-[#eaf0ff] transition-colors shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
            Open Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
