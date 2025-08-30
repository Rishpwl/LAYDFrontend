import React from 'react';

const tribunalData = [
  {
    title: 'National Company Law Tribunal (NCLT)',
    description:
      'Handles disputes related to company laws including mergers, insolvency, and oppression/mismanagement of companies.',
  },
  {
    title: 'Income Tax Appellate Tribunal (ITAT)',
    description:
      'Resolves appeals filed against the orders of the Income Tax Department, ensuring fair tax dispute resolution.',
  },
  {
    title: 'Central Administrative Tribunal (CAT)',
    description:
      'Deals with service-related disputes of government employees, except those in the armed forces.',
  },
  {
    title: 'Consumer Disputes Redressal Forums',
    description:
      'Provides speedy redressal for consumer complaints at the district, state, and national levels.',
  },
  {
    title: 'Debt Recovery Tribunal (DRT)',
    description:
      'Handles matters related to recovery of debts by banks and financial institutions under the DRT Act.',
  },
  {
    title: 'Environmental Tribunal (NGT)',
    description:
      'Adjudicates environmental disputes to ensure sustainable development and enforce environmental laws.',
  },
];

const TribunalMatters = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Tribunal Matters</h1>
      <p className="text-gray-700 mb-8 text-justify">
        Tribunals in India are quasi-judicial bodies established to provide a faster and specialized mechanism for resolving specific types of disputes. They aim to reduce the burden on regular courts while ensuring expertise in subject-specific areas. Below are some key tribunals that cater to different domains:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tribunalData.map((tribunal, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">{tribunal.title}</h2>
            <p className="text-gray-700">{tribunal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TribunalMatters;
