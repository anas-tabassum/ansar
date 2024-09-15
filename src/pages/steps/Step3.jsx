import React from "react";

const Step3 = ({ handleNext, handleBack }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto my-12 max-w-[70vw] w-lg-[70vw]">
      <h1 className="text-lg font-semibold mb-4">Step 3</h1>

      {/* Number of Travelers */}
      <div className="mb-4">
        <label htmlFor="numTravelers" className="block text-gray-700 mb-2">
          Number of Travelers
        </label>
        <select
          name="numTravelers"
          id="numTravelers"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Choose a number of travelers</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Traveler's Name */}
      <div className="mb-4">
        <label htmlFor="travelerName" className="block text-gray-700 mb-2">
          Traveler's Name
        </label>
        <input
          type="text"
          id="travelerName"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Traveler's Age */}
      <div className="mb-4">
        <label htmlFor="travelerAge" className="block text-gray-700 mb-2">
          Traveler's Age
        </label>
        <input
          type="number"
          id="travelerAge"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Traveler's Email */}
      <div className="mb-4">
        <label htmlFor="travelerEmail" className="block text-gray-700 mb-2">
          Traveler's Email
        </label>
        <input
          type="email"
          id="travelerEmail"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Traveler's Gender */}
      <div className="mb-4">
        <label htmlFor="travelerGender" className="block text-gray-700 mb-2">
          Gender
        </label>
        <select
          name="travelerGender"
          id="travelerGender"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="h-10 bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="h-10 bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
