import React from "react";
import { Link } from "react-router-dom";

const GstRegistrations = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">GST Registrations and Filings</h1>
      <p className="text-gray-700 mb-6">
        Goods and Services Tax (GST) is a comprehensive indirect tax levied on the manufacture, sale,
        and consumption of goods and services in India. It has replaced various indirect taxes
        previously levied by the central and state governments. The GST regime is governed by the
        Central Goods and Services Tax Act (2017), the Integrated GST Act (2017), and respective state
        GST laws. Registration under GST is mandatory for businesses with turnover above the threshold
        limit, inter-state suppliers, and certain other categories.
      </p>
      <p className="text-gray-700 mb-6">
        GST registration involves obtaining a unique GSTIN (Goods and Services Tax Identification
        Number), and filing regular returns such as GSTR-1, GSTR-3B, and annual returns to remain
        compliant. Timely and accurate GST filings help businesses claim input tax credit, avoid
        penalties, and maintain a clean compliance record. Online registration and filing through the
        GSTN portal have simplified the process significantly. Businesses can also opt for voluntary
        registration to avail input tax credits and enhance credibility.
      </p>
      <p className="text-gray-700 mb-10">
        Whether you’re a small business, a startup, or an established enterprise, understanding your
        GST obligations is crucial. Explore the categories below for more information on registration
        types and filing procedures.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/gst-registration"
          className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white text-center"
        >
          <img
            src="/images/gst_registration.png"
            alt="GST Registration"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-blue-800">GST Registration</h2>
        </Link>
         <Link
          to="/itr-filings"
          className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white text-center"
        >
          <img
            src="/images/gst_registration.png"
            alt="ITR Filings"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-blue-800">ITR Filings</h2>
        </Link>

        <Link
          to="/gst-filing"
          className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white text-center"
        >
          <img
            src="/images/gst_filing.png"
            alt="GST Filing"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-blue-800">GST Return Filing</h2>
        </Link>
      </div>
    </div>
  );
};

export default GstRegistrations;