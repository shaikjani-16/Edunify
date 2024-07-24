"use client";
import ShowImage from "./ShowImage"; // Import with capitalized name

const SchoolCard = ({ school }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <ShowImage imageid={school.image} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{school.name}</h2>
        <p className="text-gray-600 mb-1">{school.address}</p>
        <p className="text-gray-600">{school.city}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
