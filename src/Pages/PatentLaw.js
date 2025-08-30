
import React from "react";
import { Link } from "react-router-dom";

const PatentLaw = () => {
  return (
    <div className="px-6 py-8 md:px-16">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Patent Law</h1>
      <p className="text-gray-700 mb-6">
        Patent law is a branch of intellectual property law that 
        grants inventors exclusive rights to their inventions for 
        a limited time, typically 20 years from the filing date. 
        In India, patents are governed by the <strong>Patents Act, 1970</strong>, and administered by the Office of the Controller General of Patents, Designs & Trade Marks (CGPDTM).
      </p>
      <p className="text-gray-700 mb-6">
        To obtain a patent, an invention must be novel, involve an inventive step, and be capable of industrial application. Certain categories, such as abstract ideas, mathematical methods, and traditional knowledge, are not patentable under Indian law.
      </p>
      <p className="text-gray-700 mb-6">
        The patent process includes steps like filing a patent application, publication, examination, and finally, grant or refusal. Once granted, the patent owner has the legal right to exclude others from making, using, selling, or distributing the invention without permission.
      </p>
      <p className="text-gray-700 mb-6">
        Enforcement of patent rights can be pursued through civil litigation in cases of infringement. Patent protection encourages innovation and investment by rewarding inventors for their contributions.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Link
          to="/domestic-patent"
          className="border rounded-xl shadow p-4 flex flex-col items-center hover:bg-gray-50"
        >
          <img src="/images/domestic_patent.png" alt="Domestic Patent" className="w-24 h-24 mb-4" />
          <span className="text-blue-700 font-medium">Domestic Patent</span>
        </Link>

        <Link
          to="/international-patent"
          className="border rounded-xl shadow p-4 flex flex-col items-center hover:bg-gray-50"
        >
          <img src="/images/international_patent.png" alt="International Patent" className="w-24 h-24 mb-4" />
          <span className="text-blue-700 font-medium">International Patent</span>
        </Link>
      </div>
    </div>
  );
};

export default PatentLaw;
