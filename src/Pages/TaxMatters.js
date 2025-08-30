import React from "react";

const TaxMatters = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold mb-4">Tax Matters</h1>
      <p className="text-lg leading-relaxed mb-4">
        Tax law governs the levying and collection of taxes by governments to fund public
        services. In India, it is structured under statutes like the Income Tax Act (1961), Goods
        and Services Tax (GST) Act (2017), and Customs Act (1962), administered by authorities
        such as the Central Board of Direct Taxes (CBDT) and GST Council.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Globally, tax systems vary but share principles like equity and efficiency, guided by
        international agreements such as the OECD Model Tax Convention to prevent double taxation
        and evasion.
      </p>
      <p className="text-lg leading-relaxed">
        While India’s tax reforms aim to simplify compliance, global trends focus on transparency
        (e.g., Common Reporting Standard - CRS) and combating tax avoidance. Tax laws balance
        revenue generation with economic growth worldwide.
      </p>
    </div>
  );
};

export default TaxMatters;