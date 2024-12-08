import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, setErrors } from "../../store/store";

const Step3 = ({ handleNext, handleBack, setStepValidation }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.step3);
  const { travelers, errors } = formData;

  // State for the number of travelers
  const [numTravelers, setNumTravelers] = useState(1);

  // Update the number of travelers dynamically
  const handleNumTravelersChange = (e) => {
    const number = parseInt(e.target.value);
    setNumTravelers(number);

    // Update the Redux store with new travelers array based on number
    const newTravelers = Array.from({ length: number }, (_, i) => ({
      name: travelers[i]?.name || "",
      age: travelers[i]?.age || "",
      email: travelers[i]?.email || "",
      gender: travelers[i]?.gender || "",
    }));

    dispatch(updateFormData("step3", { travelers: newTravelers }));
  };

  // Handle input changes for each traveler's data
  const handleChange = (index, field, value) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
    dispatch(updateFormData("step3", { travelers: updatedTravelers }));
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation function for all travelers
  const validateForm = () => {
    let newErrors = {};
    travelers.forEach((traveler, index) => {
      const travelerErrors = {};
      if (!traveler.name.trim()) {
        travelerErrors.name = "Name cannot be empty.";
      }
      if (!traveler.age) {
        travelerErrors.age = "Age is required.";
      } else if (traveler.age < 5) {
        travelerErrors.age = "Age can't be less than 5.";
      }
      if (!traveler.email.trim()) {
        travelerErrors.email = "Email cannot be empty.";
      } else if (!emailRegex.test(traveler.email)) {
        travelerErrors.email = "Please enter a valid email address.";
      }
      if (!traveler.gender) {
        travelerErrors.gender = "Gender is required.";
      }
      if (Object.keys(travelerErrors).length > 0) {
        newErrors[index] = travelerErrors;
      }
    });

    dispatch(setErrors("step3", newErrors));
    return Object.keys(newErrors).length === 0;
  };

  // Pass the validation function to the parent component
  useEffect(() => {
    setStepValidation(() => validateForm);
  }, [setStepValidation]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto my-12 max-w-[70vw] w-lg-[70vw]">
      {/* Number of Travelers */}
      <div className="mb-4">
        <label htmlFor="numTravelers" className="block text-gray-700 mb-2">
          Number of Travelers
        </label>
        <select
          name="numTravelers"
          id="numTravelers"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={numTravelers}
          onChange={handleNumTravelersChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Dynamic Traveler Forms */}
      {travelers.map((traveler, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-md font-semibold mb-2">
            Traveler {index + 1} Information
          </h2>

          <div className="mb-4">
            <label
              htmlFor={`travelerName_${index}`}
              className="block text-gray-700 mb-2"
            >
              Traveler's Name
            </label>
            <input
              type="text"
              id={`travelerName_${index}`}
              className={`w-full border ${
                errors[index]?.name ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={traveler.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            {errors[index]?.name && (
              <p className="text-red-500 text-sm mt-1">{errors[index].name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor={`travelerAge_${index}`}
              className="block text-gray-700 mb-2"
            >
              Traveler's Age
            </label>
            <input
              type="number"
              id={`travelerAge_${index}`}
              className={`w-full border ${
                errors[index]?.age ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={traveler.age}
              min="5"
              onChange={(e) => handleChange(index, "age", e.target.value)}
            />
            {errors[index]?.age && (
              <p className="text-red-500 text-sm mt-1">{errors[index].age}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor={`travelerEmail_${index}`}
              className="block text-gray-700 mb-2"
            >
              Traveler's Email
            </label>
            <input
              type="email"
              id={`travelerEmail_${index}`}
              className={`w-full border ${
                errors[index]?.email ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={traveler.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
            />
            {errors[index]?.email && (
              <p className="text-red-500 text-sm mt-1">{errors[index].email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor={`travelerGender_${index}`}
              className="block text-gray-700 mb-2"
            >
              Gender
            </label>
            <select
              name={`travelerGender_${index}`}
              id={`travelerGender_${index}`}
              className={`w-full border ${
                errors[index]?.gender ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={traveler.gender}
              onChange={(e) => handleChange(index, "gender", e.target.value)}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors[index]?.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors[index].gender}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="mt-4 h-10 bg-primary-btn text-white rounded px-4 py-2 hover:bg-primary-btn-hover"
        >
          Previous
        </button>
        <button
          onClick={submitHandler}
          className="ml-4 mt-4 h-10 bg-primary-btn text-white rounded px-4 py-2 hover:bg-primary-btn-hover"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
