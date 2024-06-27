import React from "react";

const PRICING_DATA = [
  {
    name: "Free Plan",
    services:
      "Suites of services for physicians, clinicians, accounts and frontdesk (receptionsit)",
    data: "data backup",
    support: "responsive customer support 24/7",
    cost: { price: "N0", limit: "max of 15 users" },
    performance: "Basic performance",
    domain: "our website domain",
    portal: "",
    custom: "",
  },
  {
    name: "Standard Plan",
    services:
      "Suites of services for physicians, clinicians, accounts and frontdesk (receptionsit)",
    data: "data backup",
    support: "more responsive customer support 24/7",
    custom: "customization available",
    cost: { price: "N2000", limit: "" },
    performance: "Excellent performance",
    portal: "",
    domain: "our website domain",
  },
  {
    name: "Premium Plan",
    services:
      "Suites of services for physicians, clinicians, accounts and frontdesk (receptionsit)",
    data: "data backup",
    support: "most esponsive customer support 24/7",
    custom: "customization available",
    cost: { price: "N5000", limit: "" },
    performance: "Superior performance",
    portal: "Patient potal",
    domain: "custom website domain",
  },
];

const Pricing = () => {
  return (
    <section className="w-4/5 max-w-7xl mx-auto mt-28" id="pricing">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10 lg:mb-14">
        Pricing
      </h2>
      <div className="lg:flex justify-between">
        {PRICING_DATA.map((data, index) => (
          <div
            key={index}
            className="lg:flex flex-col justify-between box-border border lg:w-96 px-8 pt-8 pb-5 rounded-3xl mb-14 lg:mb-0"
          >
            <div>
              <h2 className="text-xl lg:text-2xl font-medium text-center mb-4 mt-4">
                {data.name}
              </h2>
              <p className="mb-2 text-sm">
                {data.services && "-"} {data.services}
              </p>
              <p className="mb-2 text-sm">
                {data.data && "-"} {data.data}
              </p>
              <p className="mb-2 text-sm">
                {data.support && "-"} {data.support}
              </p>
              <p className="mb-2 text-sm">
                {data.performance && "-"} {data.performance}
              </p>
              <p className="mb-2 text-sm">
                {data.domain && "-"} {data.domain}
              </p>
              <p className="mb-2 text-sm">
                {data.custom && "-"} {data.custom}
              </p>
              <p className="mb-2 text-sm">
                {data.portal && "-"} {data.portal}
              </p>
            </div>
            <div className="mt-8">
              <span className="text-4xl font-semibold text-[#17D694]">
                {data.cost.price}
              </span>{" "}
              per user/monthly, {data.cost.limit}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
