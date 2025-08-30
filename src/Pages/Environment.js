import React from 'react';

const environmentalIssues = [
  {
    title: 'Environmental Protection Laws',
    description:
      'India’s core environmental laws include the Environment (Protection) Act, 1986; Water (Prevention and Control of Pollution) Act, 1974; and the Air (Prevention and Control of Pollution) Act, 1981. These laws regulate pollution control and establish authority for environmental oversight.',
  },
  {
    title: 'Waste Management',
    description:
      'This includes proper handling of solid waste, e-waste, hazardous waste, and biomedical waste under various government rules. Ensures sustainable waste disposal and pollution reduction.',
  },
  {
    title: 'Forest and Wildlife Protection',
    description:
      'The Forest Conservation Act and the Wildlife Protection Act aim to protect natural habitats, wildlife species, and biodiversity. These laws regulate deforestation and protect endangered species.',
  },
  {
    title: 'Climate Change and Sustainability',
    description:
      'India promotes renewable energy, afforestation, and sustainable practices to combat climate change, aligned with international agreements like the Paris Agreement.',
  },
  {
    title: 'Role of the National Green Tribunal (NGT)',
    description:
      'The NGT is a specialized body for fast-track resolution of environmental disputes. It has jurisdiction over cases that involve significant environmental harm and public interest.',
  },
  {
    title: 'Public Interest Litigation (PIL)',
    description:
      'Citizens can approach the courts through PILs to challenge environmental violations, encouraging public participation in environmental protection.',
  },
];

const EnvironmentalMatters = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Environmental Matters</h1>
      <p className="text-gray-700 mb-8 text-justify">
        Environmental matters are crucial to ensuring a sustainable future. In India, a range of laws and mechanisms exist
        to prevent environmental degradation, protect natural resources, and promote ecological balance. This section covers
        key areas of environmental regulation and citizen participation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {environmentalIssues.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalMatters;
