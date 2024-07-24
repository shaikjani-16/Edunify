"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import SchoolCard from "../../components/SchoolCard";

const ShowSchoolsPage = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchSchools = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/signin", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        setSchools(data);
      } catch (error) {
        console.error("Failed to fetch schools:", error);
      }
    };

    fetchSchools(); // Call the async function
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Schools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {schools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
};

export default ShowSchoolsPage;
