"use client";
import { useEffect, useState } from "react";
import SchoolCard from "../../components/schoolCard";
import Link from "next/link";

const ShowSchoolsPage = () => {
  // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(`/api/signIn`, {
          method: "GET",
        });
        const data = await response.json();
        setSchools(data);
      } catch (error) {
        console.error("Failed to fetch schools:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent border-solid rounded-full animate-spin"></div>
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 relative">
      <h1 className="text-3xl font-bold text-center mb-8">Schools</h1>
      <Link href="/newSchool">
        <div className="absolute top-8 right-8 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add School
        </div>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {schools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
};

export default ShowSchoolsPage;
