import { Mail, Phone, MapPin, Clock, FileText } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 to-transparent py-20 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-[56px] font-bold text-[#243b8f] leading-tight tracking-tight mb-6">
            Contact & Support
          </h1>
          <p className="text-[20px] text-gray-400 leading-relaxed">
            Drug Drop Rx
          </p>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-16 px-8 pb-24">
        <div className="max-w-[900px] mx-auto">
          {/* Primary Contact Card */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-10 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Registered Office */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#243b8f]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#243b8f]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#243b8f] mb-2">
                    Registered Office (India)
                  </h3>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    [Your full registered Indian business address]
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#243b8f]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#243b8f]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#243b8f] mb-2">
                    Phone
                  </h3>
                  <p className="text-[18px] text-gray-900 font-semibold">
                    <a
                      href="tel:+918050570255"
                      className="hover:text-[#243b8f] transition-colors"
                    >
                      +91 80505 70255
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#243b8f]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#243b8f]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#243b8f] mb-2">
                    Email
                  </h3>
                  <p className="text-[18px] text-gray-900 font-semibold">
                    <a
                      href="mailto:support@drugdroprx.com"
                      className="hover:text-[#243b8f] transition-colors"
                    >
                      support@drugdroprx.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#243b8f]/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#243b8f]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#243b8f] mb-2">
                    Business Hours
                  </h3>
                  <p className="text-[16px] text-gray-700">
                    Monday – Friday, 10 AM – 6 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Refund & Cancellation Policy */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#243b8f]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#243b8f]" />
              </div>
              <div>
                <h2 className="text-[28px] font-bold text-[#243b8f] mb-2">
                  Refund & Cancellation Policy
                </h2>
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  Refunds
                </h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="text-[16px] text-gray-700 leading-relaxed">
                    Payments for completed milestones are non-refundable
                  </li>
                  <li className="text-[16px] text-gray-700 leading-relaxed">
                    If a project is cancelled mid-way, payment will be charged
                    proportionally for work already completed
                  </li>
                  <li className="text-[16px] text-gray-700 leading-relaxed">
                    Refund requests must be submitted within 7 days of payment
                    for eligible cases
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  Cancellations
                </h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="text-[16px] text-gray-700 leading-relaxed">
                    Clients may cancel services with written notice
                  </li>
                  <li className="text-[16px] text-gray-700 leading-relaxed">
                    Subscription services (if any) may be cancelled with prior
                    notice; unused periods are non-refundable
                  </li>
                  <li className="text-[16px] text-gray-700 leading-relaxed">
                    No cancellation fees apply if cancellation occurs before
                    work begins
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  Processing Time
                </h3>
                <p className="text-[16px] text-gray-700 leading-relaxed">
                  Approved refunds will be processed within 7-10 business days
                  and credited to the original payment method.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-[16px] text-gray-700 leading-relaxed">
                  For refund or cancellation requests, please contact us at{" "}
                  <a
                    href="mailto:support@drugdroprx.com"
                    className="text-[#243b8f] font-semibold hover:underline"
                  >
                    support@drugdroprx.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+918050570255"
                    className="text-[#243b8f] font-semibold hover:underline"
                  >
                    +91 80505 70255
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Support Information */}
          <div className="bg-[#243b8f] text-white rounded-lg p-8">
            <h2 className="text-[28px] font-bold mb-4">Need Help?</h2>
            <p className="text-[16px] leading-relaxed mb-6 text-white/90">
              Our support team is available during business hours to assist you
              with any questions about our services, billing, or technical
              support.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <a
                href="tel:+918050570255"
                className="px-6 py-3 bg-white text-[#243b8f] rounded-md font-semibold text-[15px] hover:bg-gray-100 transition-all"
              >
                Call Support
              </a>
              <a
                href="mailto:support@drugdroprx.com"
                className="px-6 py-3 bg-[#ffb020] text-gray-900 rounded-md font-semibold text-[15px] hover:bg-[#f5a815] transition-all"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
