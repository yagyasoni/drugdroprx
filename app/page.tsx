import Image from "next/image";
import {
  Check,
  Shield,
  FileCheck,
  Clock,
  CodeXml,
  Forklift,
  ShieldCheck,
  Linkedin,
} from "lucide-react";
import home1 from "@/public/home1.svg";
import home2 from "@/public/home2.svg";
import home3 from "@/public/home3.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/98 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <span className="font-black text-[28px] text-[#243b8f] tracking-tight uppercase">
                DRUG DROP{" "}
                <span className="relative inline-block">
                  RX
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ffb020]"></span>
                </span>
              </span>
              <div className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                SOFTWARE DEVELOPMENT AND IT SERVICES
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors"
            >
              IT Solutions
            </a>
            <a
              href="#"
              className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors"
            >
              Secure Logistics
            </a>
            <a
              href="#"
              className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors"
            >
              Compliance
            </a>
            <a
              href="#"
              className="text-[15px] font-medium text-gray-500 hover:text-[#243b8f] transition-colors"
            >
              Company
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-6 py-3.5 border-2 border-[#243b8f] text-[#243b8f] rounded-md font-semibold text-[15px] hover:bg-[#243b8f] hover:text-white transition-all">
              Client Portal
            </button>
            <Link href="/contact">
              <button className="px-6 py-3 bg-[#243b8f] text-white rounded-md font-semibold text-[15px] hover:bg-[#1e3176] transition-all">
                Contact Us
              </button>
            </Link>
            {/* <button className="px-6 py-3 bg-[#243b8f] text-white rounded-md font-semibold text-[15px] hover:bg-[#1e3176] transition-all">
              Contact Us
            </button> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-100 to-transparent py-20 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-16">
              <div className="flex-1">
                <h1 className="text-[56px] font-bold text-[#243b8f] leading-tight tracking-tight mb-6">
                  Secure Software & Logistics for Healthcare
                </h1>
                <p className="text-[20px] text-gray-400 leading-relaxed mb-10 max-w-[540px]">
                  Streamline your pharmaceutical supply chain with specialized
                  IT services, comprehensive routing logistics, and rock-solid
                  compliance infrastructure.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3.5 bg-[#243b8f] text-white rounded-md font-semibold text-[15px] hover:bg-[#1e3176] transition-all">
                    Explore Solutions
                  </button>
                  <button className="px-7 py-3.5 border-2 border-[#243b8f] text-[#243b8f] rounded-md font-semibold text-[15px] hover:bg-[#243b8f] hover:text-white transition-all">
                    Request Demo
                  </button>
                </div>
              </div>
              <div className="flex-1">
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
        <section className="py-24 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16 max-w-[800px] mx-auto">
              <h2 className="text-[40px] font-bold text-[#243b8f] tracking-tight mb-5">
                Comprehensive Solutions for Healthcare
              </h2>
              <p className="text-[18px] text-gray-400 leading-relaxed">
                We bridge the gap between complex software systems and physical
                logistics, ensuring safe and compliant delivery of sensitive
                materials.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white border border-gray-200/80 rounded-lg p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-100 rounded-md flex items-center justify-center mb-6">
                  {/* <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                      <path
                        d={svgPaths.p29768e80}
                        stroke="#243B8F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.33"
                      />
                    </svg> */}
                  <CodeXml
                    className="w-7 h-7"
                    strokeWidth={2.33}
                    color="#243B8F"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#243b8f] mb-4">
                  Software Development
                </h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                  Custom IT solutions tailored for healthcare providers,
                  pharmacies, and distributors. Build secure, scalable
                  applications that integrate seamlessly with your existing
                  infrastructure.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-gray-200/80 rounded-lg p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-100 rounded-md flex items-center justify-center mb-6">
                  <Forklift
                    className="w-7 h-7"
                    strokeWidth={2.33}
                    color="#243B8F"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#243b8f] mb-4">
                  Secure Logistics
                </h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                  End-to-end tracking and routing algorithms specifically
                  designed for sensitive pharmaceuticals. Maintain complete
                  visibility from origin to destination with real-time alerts.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-gray-200/80 rounded-lg p-10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-100 rounded-md flex items-center justify-center mb-6">
                  <ShieldCheck
                    className="w-7 h-7"
                    strokeWidth={2.33}
                    color="#243B8F"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#243b8f] mb-4">
                  Regulatory Compliance
                </h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                  Stay ahead of DEA, HIPAA, and state-level regulations. Our
                  systems automatically generate required audit trails,
                  verification documents, and compliance reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature: Logistics */}
        <section className="bg-slate-100 py-24 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-20">
              <div className="flex-1">
                <div className="bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={home2.src}
                    alt="Secure Transport Tracking Map"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-[36px] font-bold text-[#243b8f] tracking-tight leading-tight mb-6">
                  Precision logistics for sensitive shipments
                </h2>
                <p className="text-[18px] text-gray-400 leading-relaxed mb-8">
                  Transporting pharmaceuticals requires more than just moving
                  boxes. It requires verifiable chain-of-custody, temperature
                  monitoring, and secure handoffs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[16px] font-medium text-gray-900">
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
                    <p className="text-[16px] font-medium text-gray-900">
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
                    <p className="text-[16px] font-medium text-gray-900">
                      Exceptions management and instant delay alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature: Compliance */}
        <section className="py-24 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-20">
              <div className="flex-1">
                <h2 className="text-[36px] font-bold text-[#243b8f] tracking-tight leading-tight mb-6">
                  Built-in compliance and security
                </h2>
                <p className="text-[18px] text-gray-400 leading-relaxed mb-8">
                  Don't let regulatory requirements slow down your operations.
                  Drug Drop Rx integrates compliance checks directly into your
                  workflows.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb020]/10 flex items-center justify-center mt-0.5">
                      <Shield
                        className="w-4 h-4 text-[#ffb020]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p className="text-[16px] font-medium text-gray-900">
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
                    <p className="text-[16px] font-medium text-gray-900">
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
                    <p className="text-[16px] font-medium text-gray-900">
                      Immutable audit logs for all system actions
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
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
        <section className="bg-[#243b8f] py-24 px-8">
          <div className="max-w-[1280px] mx-auto text-center">
            <h2 className="text-[48px] font-bold text-white tracking-tight leading-tight mb-6">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-[20px] text-white/80 leading-relaxed mb-10 max-w-[600px] mx-auto">
              Join leading healthcare distributors who trust Drug Drop Rx to
              manage their most critical IT and logistics operations.
            </p>
            <button className="px-8 py-4 bg-[#ffb020] text-gray-900 rounded-md font-semibold text-[16px] hover:bg-[#f5a815] transition-all inline-block">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f8f9fc] border-t border-gray-200 py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-16 mb-20">
            <div className="flex-1 max-w-[400px]">
              <div className="relative mb-6">
                <span className="font-black text-[28px] text-[#243b8f] tracking-tight uppercase">
                  DRUG DROP{" "}
                  <span className="relative inline-block">
                    RX
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ffb020]"></span>
                  </span>
                </span>
                <div className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                  SOFTWARE DEVELOPMENT AND IT SERVICES
                </div>
              </div>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Providing industry-leading software development, secure
                logistics, and compliance solutions for the modern healthcare
                supply chain.
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-[#243b8f] uppercase tracking-wider mb-6">
                Solutions
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Logistics & Routing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Compliance Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    System Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-[#243b8f] uppercase tracking-wider mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-[#243b8f] uppercase tracking-wider mb-6">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 hover:text-[#243b8f] transition-colors"
                  >
                    HIPAA Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
            <p className="text-[14px] text-gray-400">
              © 2025 Drug Drop Rx. All rights reserved.
            </p>
            <div className="flex gap-4">
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
                <span className="w-4 h-4 flex items-center justify-center text-gray-500 group-hover:text-white">
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
