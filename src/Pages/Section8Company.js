import React from "react";
import { Link } from "react-router-dom";

const Section8Company = () => {
  return (
    <div className="px-4 py-8 md:px-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Section 8 Company Registration</h1>
      <p className="text-gray-700 mb-6">
        A Section 8 Company in India is a non-profit organization formed for the promotion of commerce, art, science, sports, education, research, social welfare, religion, charity, or any other useful objective. It is governed by the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs (MCA). These companies are granted special exemptions and tax benefits under the Income Tax Act.
      </p>

      <p className="text-gray-700 mb-4">
        The process of registering a Section 8 Company involves the following steps:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Obtain Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for all proposed directors.</li>
        <li>Reserve the company name using the RUN (Reserve Unique Name) service.</li>
        <li>Draft the Memorandum of Association (MoA) and Articles of Association (AoA).</li>
        <li>Apply for the license under Section 8 using Form INC-12.</li>
        <li>File the SPICe+ form for incorporation with the necessary documents.</li>
        <li>Upon approval, receive the Certificate of Incorporation and Section 8 License.</li>
      </ul>

      <p className="text-gray-700 mb-6">
        Section 8 Companies cannot distribute profits to their members and must reinvest surplus towards furthering their objectives. These companies enjoy benefits such as no minimum capital requirement, tax exemptions, and credibility among donors and government bodies.
      </p>

      <p className="text-gray-700 mb-6">
        If you're planning to start a non-profit or NGO in India, Section 8 Company registration is the most credible and regulated form. Let us know if you'd like assistance with registration or compliance.
      </p>

      <div className="flex gap-6 flex-wrap justify-start">
        <Link to="/domestic-section8" className="text-blue-600 hover:underline">Domestic Section 8 Company</Link>
        <Link to="/foreign-section8" className="text-blue-600 hover:underline">Foreign Section 8 Company</Link>
      </div>
    </div>
  );
};

export default Section8Company;
