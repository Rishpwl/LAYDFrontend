import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { title: "Civil", link: "/civil-matters", image: '/images/CivilLaw.jpeg' },
  { title: "Intellectual Property Rights", link: "/ipr", image: '/images/IntellectualProperty.jpeg' },
  { title: "Criminal Matters", link: "/criminal-matters", image:'/images/criminal.jpeg' },
 { title: "Consumer Matters", link: "/consumer-rights", image: "https://tse1.mm.bing.net/th/id/OIP.mjkEx2GlByvZCIi0j1fyQgHaE8?pid=Api&P=0&h=180" },
  { title: "Election-matters", link: "/election-matters", image: '/images/election.jpeg' },
  { title: "Land and Property matters", link: "/property-matters", image: '/images/Land.jpeg'  },
  { title: "Tax Matters", link: "/tax-matters", image: '/images/tax.jpeg' },
   { title: "Tribunal Matters", link: "/tribunal-matters", image: "https://tse1.mm.bing.net/th/id/OIP.mjkEx2GlByvZCIi0j1fyQgHaE8?pid=Api&P=0&h=180" },
  { title: "Cyber Law Matters", link: "/cyber-matters", image: '/images/CyberLaw.jpeg'  },
  { title: "LLP incorporation", link: "/llp-incorporation", image: '/images/LLP.jpeg'},
  { title: "Environmental Matters", link: "/environmental-matters", image: "https://tse1.mm.bing.net/th/id/OIP.mjkEx2GlByvZCIi0j1fyQgHaE8?pid=Api&P=0&h=180" },
  { title: "Labour Law Matters", link: "/labour-matters", image: "https://tse1.mm.bing.net/th/id/OIP.mjkEx2GlByvZCIi0j1fyQgHaE8?pid=Api&P=0&h=180" },
  { title: "Accidental Matters", link: "/accidental-matters", image: "https://tse1.mm.bing.net/th/id/OIP.mjkEx2GlByvZCIi0j1fyQgHaE8?pid=Api&P=0&h=180" }, { title: "TradeMark", link: "/trademark", image: "https://tse1.mm.bing.net/th/id/OIP.mjkEx2GlByvZCIi0j1fyQgHaE8?pid=Api&P=0&h=180" }
];

const LegalAwarenessIcons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {categories.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className="border rounded-xl shadow p-4 flex flex-col items-center hover:bg-gray-100"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 rounded-full mb-4"
          />
          <span className="text-blue-700 font-medium text-center">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default LegalAwarenessIcons;
