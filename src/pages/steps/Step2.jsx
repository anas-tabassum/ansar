import React, { useState, useEffect } from "react";

const Step2 = ({ formData, setFormData, setStepValidation, errors }) => {
  // State to store validation errors specific to Step2
  const [localErrors, setLocalErrors] = useState(errors);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.hajjBefore) {
      newErrors.hajjBefore = "Please select if you have been for Hajj before.";
    }

    if (!formData.lastHajjYear || !/^\d{4}$/.test(formData.lastHajjYear)) {
      newErrors.lastHajjYear = "Please enter a valid 4-digit year.";
    }

    if (!formData.campType) {
      newErrors.campType = "Please select a camp type.";
    }

    setLocalErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Pass the validation function to Booking
  useEffect(() => {
    setStepValidation(() => validateForm);
  }, [setStepValidation, formData]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto my-12 max-w-[70vw] w-lg-[70vw]">
      {/* Have you been for Hajj before */}
      <div className="mb-4">
        <label htmlFor="hajjBefore" className="block text-gray-700 mb-2">
          Have you been for Hajj before?
        </label>
        <select
          name="hajjBefore"
          id="hajjBefore"
          value={formData.hajjBefore}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {localErrors.hajjBefore && (
          <p className="text-red-500 text-sm mt-1">{localErrors.hajjBefore}</p>
        )}
      </div>

      {/* When did you last perform Hajj */}
      <div className="mb-4">
        <label htmlFor="lastHajjYear" className="block text-gray-700 mb-2">
          When did you last perform Hajj?
        </label>
        <input
          type="text"
          name="lastHajjYear"
          id="lastHajjYear"
          pattern="\d{4}"
          maxLength="4"
          title="Please enter exactly 4 digits."
          required
          placeholder="2025"
          value={formData.lastHajjYear}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {localErrors.lastHajjYear && (
          <p className="text-red-500 text-sm mt-1">
            {localErrors.lastHajjYear}
          </p>
        )}
      </div>

      {/* Which camp are you interested in */}
      <div className="mb-4">
        <label htmlFor="campType" className="block text-gray-700 mb-2">
          Which camp are you interested in?
        </label>
        <select
          name="campType"
          id="campType"
          value={formData.campType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Select your camp
          </option>
          <option value="regular">Regular</option>
          <option value="vip">VIP</option>
        </select>
        {localErrors.campType && (
          <p className="text-red-500 text-sm mt-1">{localErrors.campType}</p>
        )}
      </div>
    </div>
  );
};

export default Step2;
