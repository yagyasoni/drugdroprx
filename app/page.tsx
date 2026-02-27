"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Check,
  Shield,
  FileCheck,
  Clock,
  CodeXml,
  Forklift,
  ShieldCheck,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import home1 from "@/public/home1.svg";
import home2 from "@/public/home2.svg";
import home3 from "@/public/home3.svg";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* FIX 3 & 4: Improved navbar with proper responsive layout */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/98 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="relative">
              <span className="font-black text-[18px] md:text-[24px] lg:text-[28px] text-[#243b8f] tracking-tight uppercase">
                DRUG DROP{" "}
                <span className="relative inline-block">
                  RX
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ffb020]"></span>
                </span>
              </span>
              <div className="text-[8px] md:text-[9px] lg:text-[10px] font-semibold text-gray-400 tracking-wider uppercase mt-0.5 hidden sm:block">
                SOFTWARE DEVELOPMENT AND IT SERVICES
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
            <button className="px-4 py-2.5 border-2 border-[#243b8f] text-[#243b8f] rounded-md font-semibold text-[13px] lg:text-[15px] hover:bg-[#243b8f] hover:text-white transition-all whitespace-nowrap">
              Client Portal
            </button>
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
              <button className="w-full px-4 py-2.5 border-2 border-[#243b8f] text-[#243b8f] rounded-md font-semibold text-[14px] hover:bg-[#243b8f] hover:text-white transition-all mt-2">
                Client Portal
              </button>
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
                  Secure Software & Logistics for Healthcare
                </h1>
                <p className="text-[16px] md:text-[20px] text-gray-400 leading-relaxed mb-6 md:mb-10 max-w-[540px] text-center md:text-left mx-auto md:mx-0">
                  Streamline your pharmaceutical supply chain with specialized
                  IT services, comprehensive routing logistics, and rock-solid
                  compliance infrastructure.
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
                We bridge the gap between complex software systems and physical
                logistics, ensuring safe and compliant delivery of sensitive
                materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Service 1 */}
              <div className="bg-white border border-gray-200/80 rounded-lg p-6 md:p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-100 rounded-md flex items-center justify-center mb-4 md:mb-6">
                  <CodeXml
                    className="w-7 h-7"
                    strokeWidth={2.33}
                    color="#243B8F"
                  />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  Software Development
                </h3>
                <p className="text-[14px] md:text-[16px] text-gray-400 leading-relaxed">
                  Custom IT solutions tailored for healthcare providers,
                  pharmacies, and distributors. Build secure, scalable
                  applications that integrate seamlessly with your existing
                  infrastructure.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-gray-200/80 rounded-lg p-6 md:p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-100 rounded-md flex items-center justify-center mb-4 md:mb-6">
                  <Forklift
                    className="w-7 h-7"
                    strokeWidth={2.33}
                    color="#243B8F"
                  />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  Secure Logistics
                </h3>
                <p className="text-[14px] md:text-[16px] text-gray-400 leading-relaxed">
                  End-to-end tracking and routing algorithms specifically
                  designed for sensitive pharmaceuticals. Maintain complete
                  visibility from origin to destination with real-time alerts.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-gray-200/80 rounded-lg p-6 md:p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-100 rounded-md flex items-center justify-center mb-4 md:mb-6">
                  <ShieldCheck
                    className="w-7 h-7"
                    strokeWidth={2.33}
                    color="#243B8F"
                  />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  Regulatory Compliance
                </h3>
                <p className="text-[14px] md:text-[16px] text-gray-400 leading-relaxed">
                  Stay ahead of DEA, HIPAA, and state-level regulations. Our
                  systems automatically generate required audit trails,
                  verification documents, and compliance reporting.
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
                  Precision logistics for sensitive shipments
                </h2>
                <p className="text-[14px] md:text-[18px] text-gray-400 leading-relaxed mb-6 md:mb-8">
                  Transporting pharmaceuticals requires more than just moving
                  boxes. It requires verifiable chain-of-custody, temperature
                  monitoring, and secure handoffs.
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
                      Real-time GPS tracking and routing optimization
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
                      Automated delivery verification and e-signatures
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
                      Exceptions management and instant delay alerts
                    </p>
                  </div>
                </div>
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
                  Built-in compliance and security
                </h2>
                <p className="text-[14px] md:text-[18px] text-gray-400 leading-relaxed mb-6 md:mb-8">
                  Don't let regulatory requirements slow down your operations.
                  Drug Drop Rx integrates compliance checks directly into your
                  workflows.
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
                      HIPAA compliant data storage and transmission
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
                      DEA reporting and electronic 222 form integration
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Clock
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-medium text-gray-900">
                      Immutable audit logs for all system actions
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={home3.src}
                    alt="Compliance Document Checking Software"
                    className="w-full h-auto"
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
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-[14px] md:text-[20px] text-white/80 leading-relaxed mb-6 md:mb-10 max-w-[600px] mx-auto">
              Join leading healthcare distributors who trust Drug Drop Rx to
              manage their most critical IT and logistics operations.
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
                Providing industry-leading software development, secure
                logistics, and compliance solutions for the modern healthcare
                supply chain.
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
              © 2025 Drug Drop Rx. All rights reserved.
            </p>
            <div className="flex gap-4 order-1 md:order-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#243b8f] transition-all group"
              >
                <Linkedin
                  className="w-4 h-4 text-gray-500 group-hover:text-white"
                  strokeWidth={1.67}
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#243b8f] transition-all group"
              >
                <span className="w-4 h-4 flex items-center justify-center text-gray-500 group-hover:text-white text-[12px] font-bold">
                  X
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
