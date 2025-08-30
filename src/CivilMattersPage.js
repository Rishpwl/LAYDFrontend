import React from 'react';
import { Link } from 'react-router-dom';

const subServices = [
  { name: 'Family Matters', link: '/civil-matters/family', image: '/images/familymatters.jpeg' },
  { name: 'Property Matters', link: '/civil-matters/property', image: '/images/Property.jpeg' },
  { name: 'Service Matters', link: '/civil-matters/service', image: 'https://tse1.mm.bing.net/th/id/OIP.mjkEx2GlByvZCIi0j1fyQgHaE8?pid=Api&P=0&h=180' }
];

export default function CivilMattersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Civil Matters</h1>
      <p className="text-gray-700 text-base">
        Welcome to the Civil Matters section. Here, you can find all the information and services
        related to civil legal matters, such as property disputes, family law, contract enforcement,
        and other non-criminal issues.

        Civil law in India encompasses a wide range of disputes concerning private rights and obligations between individuals or entities. One of the key areas is family matters, which include marriage, divorce, child custody, adoption, and inheritance. These issues are governed by personal laws specific to different religions, such as the Hindu Marriage Act and the Muslim Personal Law, as well as secular laws like the Special Marriage Act. Another significant domain is property matters, dealing with disputes over ownership, partition, tenancy, and land acquisition. Laws such as the Transfer of Property Act and state-specific Rent Control Acts regulate these matters. Additionally, services matters involve employment-related disputes, contractual obligations, and consumer grievances, often addressed under labor laws, the Indian Contract Act, and the Consumer Protection Act. Civil courts, family courts, and various tribunals handle these cases, ensuring fair resolution through legal remedies. The Indian civil justice system aims to uphold individual rights while maintaining social harmony by providing structured legal frameworks for dispute resolution in these critical areas of daily life.
      </p>

      {/* Sub-categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
        {subServices.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-2xl shadow hover:shadow-md transition duration-300 text-center"
          >
            <img
              src={service.image}
              alt={service.name}
              className="mb-2 rounded-full w-20 h-20"
            />
            <span className="text-sm font-medium text-blue-700 hover:underline">{service.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-700">Services We Offer:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Property ownership and dispute resolution</li>
          <li>Marriage, divorce, and family-related legal support</li>
          <li>Legal document assistance</li>
          <li>Contract issues and consumer complaints</li>
          <li>Tenant-landlord disputes</li>
        </ul>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-500">
          For more information, please contact our support team or visit your nearest civil court office.
        </p>
      </div>
    </div>
  );
}
