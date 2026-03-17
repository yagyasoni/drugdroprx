"use client";

import { useState } from "react";
import {
  Check,
  Shield,
  FileCheck,
  CodeXml,
  Forklift,
  ShieldCheck,
  Linkedin,
  Menu,
  X,
  TrendingUp,
} from "lucide-react";
import home1 from "@/public/home1.svg";
import home2 from "@/public/home2.png";
import home3 from "@/public/home3.png";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* FIX 3 & 4: Improved navbar with proper responsive layout */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/98 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
  
  {/* Logo */}
  <div className="flex items-center flex-shrink-0">
    <div className="flex items-center flex-shrink-0 -ml-2 md:ml-0">
  <img
    src="/logo.png"
    alt="Drug Drop RX"
    className="h-10 md:h-12 lg:h-13 w-auto object-contain -translate-x-14"
  />
</div>

  </div>

</div>


          {/* FIX 3: Desktop nav — hidden below md, proper spacing */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 flex-1 justify-center">
            <a
              href="#"
              className="text-[13px] lg:text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors whitespace-nowrap"
            >
              IT Solutions
            </a>
            <a
              href="#"
              className="text-[13px] lg:text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors whitespace-nowrap"
            >
              Secure Logistics
            </a>
            <a
              href="#"
              className="text-[13px] lg:text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors whitespace-nowrap"
            >
              Compliance
            </a>
            <a
              href="#"
              className="text-[13px] lg:text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors whitespace-nowrap"
            >
              Company
            </a>
          </nav>

          {/* FIX 2: Desktop CTA buttons — only show on md+, Contact Us only once */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* <button className="px-4 py-2.5 border-2 border-[#243b8f] text-[#243b8f] rounded-md font-semibold text-[13px] lg:text-[15px] hover:bg-[#243b8f] hover:text-white transition-all whitespace-nowrap">
              Client Portal
            </button> */}
            <Link href="/contact">
              <button className="cursor-pointer px-4 lg:px-6 py-2.5 lg:py-3 bg-[#243b8f] text-white rounded-md font-semibold text-[13px] lg:text-[15px] hover:bg-[#1e3176] transition-all whitespace-nowrap">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#243b8f]" />
            ) : (
              <Menu className="w-6 h-6 text-[#243b8f]" />
            )}
          </button>
        </div>

        {/* FIX 2 & 3: Mobile Menu — Contact Us only here on mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-slate-100 to-transparent-400 border-t border-gray-200 shadow-md">
            <nav className="flex flex-col px-4 py-4 space-y-2">
              <a
                href="#"
                className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors py-2"
              >
                IT Solutions
              </a>
              <a
                href="#"
                className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors py-2"
              >
                Secure Logistics
              </a>
              <a
                href="#"
                className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors py-2"
              >
                Compliance
              </a>
              <a
                href="#"
                className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors py-2"
              >
                Company
              </a>
              {/* <button className="w-full px-4 py-2.5 border-2 border-[#243b8f] text-[#243b8f] rounded-md font-semibold text-[14px] hover:bg-[#243b8f] hover:text-white transition-all mt-2">
                Client Portal
              </button> */}
              <Link href="/contact" className="w-full">
                <button className="w-full px-4 py-2.5 bg-[#243b8f] text-white rounded-md font-semibold text-[14px] hover:bg-[#1e3176] transition-all">
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-100 to-transparent py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row sm:items-center gap-8 md:gap-16">
              <div className="flex-1 w-full">
                <h1 className="text-[32px] md:text-[56px] font-bold text-[#243b8f] leading-tight tracking-tight mb-4 md:mb-6 text-center md:text-left">
                  Advancing Healthcare Compliance & Revenue Growth
                </h1>
                <p className="text-[16px] md:text-[20px] text-gray-400 leading-relaxed mb-6 md:mb-10 max-w-[540px] text-center md:text-left mx-auto md:mx-0">
                  Expert pharmacy billing, regulatory compliance, digital
                  services, prior authorization support, audits, reporting, and
                  revenue growth consulting—built for safe, compliant
                  operations.
                </p>
                {/* FIX 1: Mobile — centered, stacked, full-width. Desktop — left-aligned row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start justify-center md:justify-start">
                  <button className="w-full sm:w-auto px-6 py-3 md:py-3.5 bg-[#243b8f] text-white rounded-md font-semibold text-[14px] md:text-[15px] hover:bg-[#1e3176] transition-all">
                    Explore Solutions
                  </button>
                  <button className="w-full sm:w-auto px-6 py-3 md:py-3.5 border-2 border-[#243b8f] text-[#243b8f] rounded-md font-semibold text-[14px] md:text-[15px] hover:bg-[#243b8f] hover:text-white transition-all">
                    Request Demo
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-lg shadow-[0_24px_48px_rgba(38,49,98,0.08)] overflow-hidden">
                  <img
                    src={home1.src}
                    alt="Pharmaceutical Supply Chain Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12 md:mb-16 max-w-[800px] mx-auto">
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#243b8f] tracking-tight mb-4 md:mb-5">
                Comprehensive Solutions for Healthcare
              </h2>
              <p className="text-[14px] md:text-[18px] text-gray-400 leading-relaxed">
                Trusted consultants and specialists for pharmacies and
                healthcare practices in the U.S.—focused on compliant billing,
                operational excellence, analytics support, and digital growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Service Card Template Applied to All */}

              {/* Service 1 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Pharmacy Billing Services
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Comprehensive support to improve claims accuracy, reduce
                  denials, optimize reimbursements, and maintain compliant
                  billing operations.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Compliance Services
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Strategic compliance assistance to help pharmacies and
                  practices establish compliance frameworks with applicable
                  regulations.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Prior Authorization Support
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Assistance navigating prior authorization processes to support
                  timely medication access. Tracking, documentation support,
                  etc.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Audit Assistance
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Assistance for pharmacy readiness before and during payer,
                  PBM, or regulatory audits. Interpretation of audit results,
                  etc.
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Website Development
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Custom websites built for healthcare practices with a focus on
                  usability, compliance, and patient engagement. HIPAA-aware
                  development practices.
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Digital Marketing Assistance
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Marketing support designed for healthcare brands while
                  maintaining compliance with advertising and privacy
                  expectations.
                </p>
              </div>

              {/* Service 7 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Report Assistance
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Guidance in generating and interpreting pharmacy operational
                  reports. PAYOR and PBM performance dashboards.
                </p>
              </div>

              {/* Service 8 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Profit Buildup
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Consultative guidance to help pharmacies analyze revenue
                  drivers, and increase financial performance. Prescription
                  trend analysis.
                </p>
              </div>

              {/* Service 9 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Staffing Assistance
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Assistance with sourcing, evaluating, and onboarding qualified
                  pharmacy team members. support staffing strategy and candidate
                  readiness.
                </p>
              </div>

              {/* Service 10 */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-4 flex flex-col justify-between min-h-[190px] hover:shadow-lg transition-all duration-300">
                <h3 className="text-md flex items-center justify-center font-semibold text-[#243b8f] mb-3">
                  Consultation Services
                </h3>
                <p className="text-md text-gray-500 leading-relaxed">
                  Personalized consulting for pharmacy owners, managers, and
                  leadership teams. Work on unique challenges and strategic
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature: Logistics */}
        <section className="bg-slate-100 py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
              <div className="flex-1 w-full order-2 md:order-1">
                <div className="bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={home2.src}
                    alt="Secure Transport Tracking Map"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#243b8f] tracking-tight leading-tight mb-4 md:mb-6">
                  Pharmacy Billing & Revenue Cycle Support
                </h2>
                <p className="text-[14px] md:text-[18px] text-gray-400 leading-relaxed mb-6 md:mb-8">
                  Comprehensive support to improve claims accuracy, reduce
                  denials, optimize reimbursements, and maintain compliant
                  billing operations.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Claims Review & Submission Assistance — Review, verify,
                      and assist with pharmacy claim submissions across payors.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Denial Mitigation — Identify common billing errors and
                      implement corrective strategies to reduce PBM denials and
                      rejected claims.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Coding & Reimbursement Optimization — Audit and refine
                      NDC/DAW/HCPCS data to align with payer requirements.
                    </p>
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 mt-6">
                  <strong>Compliance Notes:</strong> All billing support is
                  conducted in accordance with payer rules and federal/state
                  billing requirements. Our processes are designed to align with
                  industry standards and acceptable billing practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature: Compliance */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
              <div className="flex-1">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#243b8f] tracking-tight leading-tight mb-4 md:mb-6">
                  Pharmacy Regulatory Compliance & Risk Management
                </h2>
                <p className="text-[14px] md:text-[18px] text-gray-400 leading-relaxed mb-6 md:mb-8">
                  Strategic compliance assistance to help pharmacies and
                  practices establish, evaluate, and strengthen compliance
                  frameworks with applicable regulations.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Shield
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Compliance Framework Review — Examine current policies
                      against federal and state pharmacy standards.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <FileCheck
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Risk Assessment & Documentation — Identify risk areas and
                      recommend documentation and process improvements.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Policy & Procedure Support — Guide development or
                      refinement of internal compliance documents.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <TrendingUp
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Education & Training — Provide periodic guidance to staff
                      to reinforce compliance responsibilities.
                    </p>
                  </div>
                </div>

                <p className="text-[13px] text-gray-500 mt-6">
                  <strong>Compliance Notes:</strong> Our support is advisory;
                  enforcement of compliance obligations remains the
                  responsibility of the pharmacy as required by applicable law.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={home3.src}
                    alt="Compliance Document Checking Software"
                    className="w-full h-auto md:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#243b8f] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto text-center">
            <h2 className="text-[28px] md:text-[48px] font-bold text-white tracking-tight leading-tight mb-4 md:mb-6">
              Ready to boost revenue growth and finance efficiency?
            </h2>
            <p className="text-[14px] md:text-[20px] text-white/80 leading-relaxed mb-6 md:mb-10 max-w-[600px] mx-auto">
              Join leading healthcare distributors who trust Drug Drop Rx to
              drive revenue growth while optimizing financial operations.
            </p>
            <button className="px-8 py-3 md:py-4 bg-[#ffb020] text-gray-900 rounded-md font-semibold text-[14px] md:text-[16px] hover:bg-[#f5a815] transition-all inline-block">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f8f9fc] border-t border-gray-200 py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 md:mb-20">
            <div className="flex-1 max-w-[400px]">
              <div className="relative mb-4 md:mb-6">
                <span className="font-black text-[20px] md:text-[28px] text-[#243b8f] tracking-tight uppercase">
                  DRUG DROP{" "}
                  <span className="relative inline-block">
                    RX
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ffb020]"></span>
                  </span>
                </span>
                <div className="text-[8px] md:text-[10px] font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                  SOFTWARE DEVELOPMENT AND IT SERVICES
                </div>
              </div>
              <p className="text-[13px] md:text-[15px] text-gray-400 leading-relaxed">
                Helping independent pharmacies and healthcare practices
                streamline business functions through billing support,
                consultative guidance, compliance expertise, reporting insights,
                staffing support, and digital marketing tailored to healthcare
              </p>
            </div>

            <div>
              <h4 className="text-[12px] md:text-[14px] font-bold text-[#243b8f] uppercase tracking-wider mb-4 md:mb-6">
                Solutions
              </h4>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Logistics & Routing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Compliance Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    System Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] md:text-[14px] font-bold text-[#243b8f] uppercase tracking-wider mb-4 md:mb-6">
                Company
              </h4>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] md:text-[14px] font-bold text-[#243b8f] uppercase tracking-wider mb-4 md:mb-6">
                Legal
              </h4>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] md:text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    HIPAA Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[12px] md:text-[14px] text-gray-400 order-2 md:order-1">
              © {new Date().getFullYear()} Drug Drop Rx. All rights reserved.
            </p>
            <div className="flex gap-4 order-1 md:order-2">
              <a
                href="https://www.linkedin.com/company/drug-drop-rx"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#243b8f] transition-all group"
              >
                <Linkedin
                  className="w-4 h-4 text-gray-500 group-hover:text-white"
                  strokeWidth={1.67}
                />
              </a>
              {/* <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#243b8f] transition-all group"
              >
                <span className="w-4 h-4 flex items-center justify-center text-gray-500 group-hover:text-white text-[16px] font-bold">
                  X
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
