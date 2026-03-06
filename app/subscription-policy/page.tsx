export default function SubscriptionPolicy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 to-transparent py-12 md:py-20 px-4 md:px-">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-[32px] md:text-[56px] font-bold text-[#243b8f] leading-tight tracking-tight mb-3 md:mb-6">
            Subscription Policy
          </h1>
          <p className="text-[14px] md:text-[20px] text-gray-400 leading-relaxed">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-8 px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed mb-8 md:mb-12 font-medium">
              Drug Drop Rx offers subscription-based access to software
              platforms, tools, and services.
            </p>

            <div className="space-y-8 md:space-y-12">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  1. Subscription Plans
                </h2>
                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-3 md:mb-4">
                  Users may purchase access to software services through
                  subscription plans that may include:
                </p>

                <ul className="space-y-2 md:space-y-4 ml-4 md:ml-6">
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Monthly subscriptions
                  </li>
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Annual subscriptions
                  </li>
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Enterprise plans
                  </li>
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Customized service agreements
                  </li>
                </ul>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mt-4">
                  Each plan may include different features, usage limits, and
                  service levels.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  2. Billing Cycle
                </h2>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-3 md:mb-4">
                  Subscriptions are billed in advance based on the selected
                  billing period:
                </p>

                <ul className="space-y-2 md:space-y-4 ml-4 md:ml-6">
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Monthly billing cycle
                  </li>
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Annual billing cycle
                  </li>
                </ul>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mt-4">
                  Charges will automatically renew unless the subscription is
                  cancelled before the renewal date.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  3. Automatic Renewal
                </h2>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                  All subscriptions renew automatically unless cancelled prior
                  to the renewal date.
                </p>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mt-3">
                  Users authorize Drug Drop Rx to charge the selected payment
                  method for recurring fees.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  4. Pricing Changes
                </h2>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                  Drug Drop Rx reserves the right to modify subscription
                  pricing. Any changes will be communicated in advance and will
                  apply to the next billing cycle.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  5. Payment Methods
                </h2>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-3">
                  Accepted payment methods may include:
                </p>

                <ul className="space-y-2 md:space-y-4 ml-4 md:ml-6">
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Credit/debit cards
                  </li>
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Digital payment processors
                  </li>
                  <li className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    • Other supported payment gateways
                  </li>
                </ul>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mt-4">
                  Failure to process payment may result in service suspension.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  6. Plan Upgrades or Downgrades
                </h2>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                  Users may upgrade or downgrade their subscription plans at any
                  time.
                </p>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mt-3">
                  Plan changes may take effect immediately, or at the next
                  billing cycle depending on the service configuration.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-3 md:mb-4">
                  7. Service Availability
                </h2>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                  Drug Drop Rx strives to maintain high service availability but
                  does not guarantee uninterrupted access.
                </p>

                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mt-3">
                  Maintenance windows and updates may temporarily affect
                  availability.
                </p>
              </div>

              <div>
                <h2 className="text-[22px] md:text-[32px] font-bold text-[#243b8f] mb-4 md:mb-6">
                  8. Contact
                </h2>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#243b8f] mb-4 md:mb-6">
                    Drug Drop Rx
                  </h3>

                  <div className="space-y-2 md:space-y-3">
                    <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Phone:</strong>{" "}
                      <a
                        href="tel:+918050570255"
                        className="text-[#243b8f] hover:underline"
                      >
                        +91 80505 70255
                      </a>
                    </p>

                    <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Email:</strong>{" "}
                      <a
                        href="mailto:Info@drugdroprx.com"
                        className="text-[#243b8f] hover:underline"
                      >
                        Info@drugdroprx.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
