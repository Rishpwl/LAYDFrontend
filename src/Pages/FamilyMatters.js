import React from "react";

const FamilyMatters = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold mb-4">Family Matters</h1>
      <p className="text-lg leading-relaxed mb-4">
        Family law in India is primarily governed by personal laws based on religion,
        alongside secular statutes. For Hindus, the Hindu Marriage Act (1955), Hindu
        Succession Act (1956), and Hindu Adoption and Maintenance Act (1956) regulate
        marriage, divorce, inheritance, and adoption. Muslims follow Shariat law in
        matters like marriage (Nikah), divorce (Talaq), and inheritance. Christians,
        Parsis, and other communities have their own personal laws.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Secular laws like the Special Marriage Act (1954) allow interfaith marriages,
        while the Protection of Women from Domestic Violence Act (2005) safeguards
        women’s rights. Family courts handle disputes related to divorce, alimony,
        child custody, and guardianship under the Family Courts Act (1984).
      </p>
      <p className="text-lg leading-relaxed">
        Recent reforms, such as the criminalization of triple talaq and equal inheritance
        rights for daughters, reflect evolving legal principles. The judiciary plays a
        crucial role in balancing tradition and constitutional rights, ensuring justice
        in family disputes.
      </p>
    </div>
  );
};

export default FamilyMatters;