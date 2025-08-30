import React from 'react';

const rightsData = [
  {
    title: 'Right to Safety',
    description:
      'Ensures that consumers are protected against products and services that are hazardous to health or life.',
  },
  {
    title: 'Right to Information',
    description:
      'Gives consumers the right to know the details of products or services, enabling informed decisions.',
  },
  {
    title: 'Right to Choose',
    description:
      'Empowers consumers to select from a variety of goods and services at competitive prices.',
  },
  {
    title: 'Right to be Heard',
    description:
      'Allows consumers to voice their concerns and opinions, and have them considered by authorities or businesses.',
  },
  {
    title: 'Right to Redressal',
    description:
      'Provides legal support to consumers to claim compensation for unfair trade practices or exploitation.',
  },
  {
    title: 'Right to Consumer Education',
    description:
      'Ensures awareness of rights and responsibilities to make informed purchasing and complaint decisions.',
  },
];

const ConsumerRights = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Consumer Rights</h1>
      <p className="text-gray-700 mb-8 text-justify">
        The Consumer Protection Act in India guarantees several essential rights to protect individuals from unfair trade practices and ensure fair treatment in the marketplace. Below are the fundamental consumer rights every citizen should be aware of:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rightsData.map((right, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">{right.title}</h2>
            <p className="text-gray-700">{right.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumerRights;
