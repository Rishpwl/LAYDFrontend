import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { name: 'Civil', link: '/civil-matters' ,path:'/images/CivilLaw.jpeg'},
  { name: 'Intellectual Property Rights', link: '/intellectual-rights' ,path:'/images/IntellectualProperty.jpeg'},
  { name: 'Criminal Matters', link: '/criminal-matters',path:'/images/criminal.jpeg' },
  { name: 'Election-matters', link: '/election-matters',path:'/images/election.jpeg' },
  { name: 'Land and Property matters', link: '/property-matters',path:'/images/Land.jpeg' },
  { name: 'Tax Matters', link: '/tax-matters' ,path:'/images/tax.jpeg'},
  { name: 'Cyber Law Matters', link: '/cyber-matters',path:'/images/CyberLaw.jpeg' },
  { name: 'LLP incorporation', link: '/llp-incorporation',path:'/images/LLP.jpeg' },
  { name: 'Section 8 Company Registration', link: '/section-8company-registration',path:'/images/Section8.jpeg' },
  { name: 'GST Registration and Filings', link: '/gst-registration',path:'/images/GST.jpeg' },
  { name: 'Patent', link: '/patent' ,path:'/images/Patent.jpeg'},
  { name: 'TradeMark', link: '/trademark',path:'/images/TradeMark.jpeg' },
  { name: 'CopyRight', link: '/copyright',path:'/images/CopyRight.jpeg' },
  { name: 'Design', link: '/design',path:'/images/OIP.jpeg' },
  { name: 'Property Documents', link: '/property-documents' ,path:'/images/Property1.jpeg'},
  { name: 'Court Related Documents', link: '/court-related',path:'/images/Court.jpeg' },
  { name: 'Miscellaneous Notary Services', link: '/notary-services',path:'/images/Miscellaneous.jpeg' },
  { name: 'Name-change Services', link: '/name-change',path:'/images/NameChange.jpeg' }
];

export default function DLServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {services.map((service, index) => (
        <a
          href={service.link}
          key={index}
          className="flex flex-col items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 text-center"
        >
         <img
  src={service.path}
  alt="icon"
  className="mb-2 rounded-full w-20 h-15"
/>
          <span className="text-sm font-medium text-blue-700 hover:underline">
            {service.name}
          </span>
        </a>
      ))}
    </div>
  );
}
