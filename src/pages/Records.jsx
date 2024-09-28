import React, { useEffect, useState } from "react";

const Records = () => {
  const [hajjRecords, setHajjRecords] = useState([]);
  const [umraRecords, setUmraRecords] = useState([]);

  // Fetch Hajj records
  const fetchHajjRecords = async () => {
    try {
      const response = await fetch(
        "https://ansar-backend.onrender.com/hajj_records"
      ); // Replace with your API URL
      const data = await response.json();
      setHajjRecords(data.data); // Store the fetched Hajj records in state
    } catch (error) {
      console.error("Error fetching Hajj records:", error);
    }
  };

  // Fetch Umra records
  const fetchUmraRecords = async () => {
    try {
      const response = await fetch(
        "https://ansar-backend.onrender.com/umra_records"
      ); // Replace with your API URL
      const data = await response.json();
      setUmraRecords(data.data); // Store the fetched Umra records in state
    } catch (error) {
      console.error("Error fetching Umra records:", error);
    }
  };

  // Fetch both Hajj and Umra records on component mount
  useEffect(() => {
    fetchHajjRecords();
    fetchUmraRecords();
  }, []);

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold text-center mb-6">
        Hajj and Umra Records
      </h1> */}

      {/* Hajj Records */}
      {hajjRecords.length === 0 ? (
        <p className="text-center">No Hajj records found.</p>
      ) : (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Hajj Records
          </h2>
          <div className="flex justify-around items-center">
            {hajjRecords.map((record, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-blue-100 shadow-md w-[18rem]" // Different background color
              >
                {/* Displaying Hajj details */}
                <p className="font-bold text-lg mb-2">{record.name}</p>
                <p className="text-sm text-gray-600 mb-1">
                  Email: {record.email}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Phone: {record.phone}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  City: {record.city}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Country: {record.country}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Address: {record.address}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Camp Type: {record.campType}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Dietary Restriction: {record.dietaryRestriction}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Disabilities: {record.disabilities}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Age Restriction: {record.ageRestriction}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Hajj Before: {record.hajjBefore}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Last Hajj Year: {record.lastHajjYear}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  First Language: {record.firstLanguage}
                </p>

                {/* Travelers */}
                <div className="mt-4">
                  <h3 className="text-md font-semibold">Travelers:</h3>
                  {record.travelers.map((traveler, tIndex) => (
                    <div
                      key={tIndex}
                      className="mt-2 p-2 bg-gray-100 rounded-md"
                    >
                      <p className="text-sm">Name: {traveler.name}</p>
                      <p className="text-sm">Gender: {traveler.gender}</p>
                      <p className="text-sm">Age: {traveler.age}</p>
                      <p className="text-sm">Email: {traveler.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Umra Records */}
      {umraRecords.length === 0 ? (
        <p className="text-center">No Umra records found.</p>
      ) : (
        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">
            Umra Records
          </h2>
          <div className="flex justify-around items-center">
            {umraRecords.map((record, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-green-100 shadow-md w-[18rem]" // Different background color
              >
                {/* Displaying Umra details */}
                <p className="font-bold text-lg mb-2">{record.name}</p>
                <p className="text-sm text-gray-600 mb-1">
                  Email: {record.email}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Phone: {record.phone}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  City: {record.city}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Country: {record.country}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Address: {record.address}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Dietary Restriction: {record.dietaryRestriction}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Disabilities: {record.disabilities}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Age Restriction: {record.ageRestriction}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  First Language: {record.firstLanguage}
                </p>

                {/* Travelers */}
                <div className="mt-4">
                  <h3 className="text-md font-semibold">Travelers:</h3>
                  {record.travelers.map((traveler, tIndex) => (
                    <div
                      key={tIndex}
                      className="mt-2 p-2 bg-gray-100 rounded-md"
                    >
                      <p className="text-sm">Name: {traveler.name}</p>
                      <p className="text-sm">Gender: {traveler.gender}</p>
                      <p className="text-sm">Age: {traveler.age}</p>
                      <p className="text-sm">Email: {traveler.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Records;
