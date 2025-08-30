import React from 'react';

const cardData = [
  {
    title: 'Bails',
    image: '/images/OIP.jpeg', // Place a default image in public/images
    link: '/criminal/bails',
  },
  {
    title: 'Trials',
    image: '/images/OIP.jpeg',
    link: '/criminal/trials',
  },
  {
    title: 'Police Complaints',
    image: '/images/OIP.jpeg',
    link: '/criminal/police-complaints',
  },
  {
    title: 'Cyber Crime Cases',
    image: '/images/OIP.jpeg',
    link: '/criminal/cyber-crime',
  }
];

const CriminalMatters = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Criminal Matters</h1>
      <p className="text-gray-700 text-justify mb-8">
        Criminal law in India deals with offenses against the state or public order, including theft, assault, fraud,
        cyber crimes, and more. This section provides support for navigating police procedures, filing complaints,
        seeking bail, and defending oneself during trials. The Indian Penal Code (IPC) and Criminal Procedure Code (CrPC)
        form the backbone of the country’s criminal justice system. Legal assistance in this area ensures fair representation,
        protection of rights, and structured legal recourse for both accused and victims.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300 block"
          >
            <img
              src={card.image}
              alt={card.title}
              className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
              onError={(e) => {
                e.target.src = '/images/default.png'; // fallback image
              }}
            />
            <h2 className="text-blue-700 font-semibold">{card.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CriminalMatters;
