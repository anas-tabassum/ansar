import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, setErrors } from "../../store/store";

const Step2 = ({ handleNext, handleBack, setStepValidation }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.step2);
  const { hajjBefore, lastHajjYear, campType, errors } = formData;

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData("step2", { [name]: value }));
  };

  // Validation function for Step 2
  const validateForm = () => {
    let newErrors = {};

    if (!hajjBefore) {
      newErrors.hajjBefore = "Please select if you have been for Hajj before.";
    }

    if (!lastHajjYear || !/^\d{4}$/.test(lastHajjYear)) {
      newErrors.lastHajjYear = "Please enter a valid 4-digit year.";
    }

    if (!campType) {
      newErrors.campType = "Please select a camp type.";
    }

    dispatch(setErrors("step2", newErrors));
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Pass the validation function to Booking component
  useEffect(() => {
    setStepValidation(() => validateForm);
  }, [setStepValidation]);

  // Submit handler for validation and moving to the next step
  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      dispatch(setErrors("step2", {})); // Clear any existing errors
      handleNext(); // Call handleNext to move to the next step
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto my-12 max-w-[70vw] w-lg-[70vw]">
      {/* Form fields and error messages */}
      {/* Have you been for Hajj before */}
      <div className="mb-4">
        <label htmlFor="hajjBefore" className="block text-gray-700 mb-2">
          Have you been for Hajj before?
        </label>
        <select
          name="hajjBefore"
          id="hajjBefore"
          value={hajjBefore}
          onChange={handleChange}
          className={`w-full border ${
            errors.hajjBefore ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.hajjBefore && (
          <p className="text-red-500 text-sm mt-1">{errors.hajjBefore}</p>
        )}
      </div>

      {/* When did you last perform Hajj */}
      <div className="mb-4">
        <label htmlFor="lastHajjYear" className="block text-gray-700 mb-2">
          When did you last perform Hajj?
        </label>
        <input
          type="number"
          name="lastHajjYear"
          id="lastHajjYear"
          pattern="\d{4}"
          maxLength="4"
          title="Please enter exactly 4 digits."
          placeholder="2025"
          value={lastHajjYear}
          onChange={handleChange}
          className={`w-full border ${
            errors.lastHajjYear ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.lastHajjYear && (
          <p className="text-red-500 text-sm mt-1">{errors.lastHajjYear}</p>
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
          value={campType}
          onChange={handleChange}
          className={`w-full border ${
            errors.campType ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          <option value="" disabled>
            Select your camp
          </option>
          <option value="regular">Regular</option>
          <option value="vip">VIP</option>
        </select>
        {errors.campType && (
          <p className="text-red-500 text-sm mt-1">{errors.campType}</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="mt-4 h-10 bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700"
        >
          Previous
        </button>
        <button
          onClick={submitHandler}
          className="ml-4 mt-4 h-10 bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
