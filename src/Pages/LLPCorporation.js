import React from 'react';
import { Link } from 'react-router-dom';

const LlpCorporation = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">LLP Corporation</h1>
      <p className="mb-6">
        A Limited Liability Partnership (LLP) in India is a popular business structure that combines the benefits of a traditional partnership with the protection of limited liability, governed by the Limited Liability Partnership Act, 2008. To incorporate an LLP, partners must first obtain a Digital Signature Certificate (DSC) and a Director Identification Number (DIN). The next step involves reserving a unique name through the RUN-LLP (Reserve Unique Name) process with the Ministry of Corporate Affairs (MCA). Once approved, partners must file the Incorporation Form (FiLLiP), which includes details such as partner information, capital contribution, and registered office address. Within 30 days of incorporation, an LLP Agreement outlining profit-sharing ratios, rights, and duties must be submitted via Form 3. Finally, the LLP must apply for a Permanent Account Number (PAN) and Tax Deduction Account Number (TAN) to comply with tax regulations.
      </p>
      <p className="mb-6">
        The LLP structure offers several advantages, including limited liability protection for partners, meaning personal assets are safeguarded against business liabilities. Compared to private companies, LLPs have lower compliance requirements and no mandatory minimum capital, making them an attractive option for startups, professionals like CAs and lawyers, and small businesses. Additionally, LLPs enjoy tax benefits, as they are taxed at a flat rate of 30% without dividend distribution tax. The entire incorporation process typically takes 10–15 days, provided all documents are in order. Due to its flexibility, ease of operation, and legal protection, the LLP model is widely preferred for businesses seeking a balance between partnership simplicity and corporate credibility.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/llp/domestic" className="border rounded-xl p-4 hover:shadow-lg transition text-center">
          <img
            src="/images/domestic-llp.png"
            alt="Domestic LLP"
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <p className="font-semibold text-lg">Domestic LLP</p>
        </Link>

        <Link to="/llp/foreign" className="border rounded-xl p-4 hover:shadow-lg transition text-center">
          <img
            src="/images/foreign-llp.png"
            alt="Foreign LLP"
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <p className="font-semibold text-lg">Foreign LLP</p>
        </Link>
      </div>
    </div>
  );
};

export default LlpCorporation;