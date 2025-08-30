import React from 'react';

const registrationServices = [
  {
    title: 'LLP Incorporation',
    description: 'Get your Limited Liability Partnership registered with ease and compliance.',
  },
  {
    title: 'Company Incorporation',
    description: 'Incorporate your Private or Public Limited Company with all legal formalities.',
  },
  {
    title: 'Section 8 Company Incorporation',
    description: 'Form a non-profit company under Section 8 of the Companies Act.',
  },
  {
    title: 'GST Registration',
    description: 'Register for Goods and Services Tax and stay tax-compliant.',
  },
  {
    title: 'GST Return Filings',
    description: 'File your monthly/quarterly GST returns accurately and on time.',
  },
];

const CompanyRegistration = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Company Registration & Appliances
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {registrationServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyRegistration;
