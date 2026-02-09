import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, setErrors } from "../../store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_HOST } from "../../config";

const Step4 = ({ handleNext, handleBack, setStepValidation }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Accessing the state
  const { identifier, meta } = location.state || null;

  // Accessing all steps data from Redux store
  const step1Data = useSelector((state) => state.form.step1);
  const step2Data = useSelector((state) => state.form.step2);
  const step3Data = useSelector((state) => state.form.step3);
  const step4Data = useSelector((state) => state.form.step4);

  const formData = step4Data;
  const {
    dietaryRestriction,
    ageRestriction,
    firstLanguage,
    comments,
    disabilities,
    errors,
  } = formData;

  // Handle input changes for the form data
  const handleChange = (field, value) => {
    dispatch(updateFormData("step4", { [field]: value }));
  };

  // Validation function for step 4
  const validateForm = () => {
    let newErrors = {};

    if (!dietaryRestriction) {
      newErrors.dietaryRestriction = "This field is required.";
    }
    if (!ageRestriction) {
      newErrors.ageRestriction = "This field is required.";
    }
    if (!firstLanguage.trim()) {
      newErrors.firstLanguage = "First language is required.";
    }
    if (!disabilities) {
      newErrors.disabilities = "This field is required.";
    }

    dispatch(setErrors("step4", newErrors));
    return Object.keys(newErrors).length === 0;
  };

  // Pass the validation function to the parent component
  useEffect(() => {
    setStepValidation(() => validateForm);
  }, [setStepValidation]);

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let data = {};

      const { errors: step1Errors, ...cleanStep1Data } = step1Data;
      const { errors: step2Errors, ...cleanStep2Data } = step2Data;
      const { errors: step3Errors, ...cleanStep3Data } = step3Data;
      const { errors: step4Errors, ...cleanStep4Data } = step4Data;

      if (identifier == "hajj") {
        data = {
          ...cleanStep1Data,
          ...cleanStep2Data,
          ...cleanStep3Data,
          ...cleanStep4Data,
          encounter_type:identifier,
          meta
        };

        fetch(`${BACKEND_HOST}hajj_book`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status == "success") {
              alert("Registerd successfully");
              navigate("/");
            } else {
              alert("Failed to register :(");
            }
          });
      } else if(identifier == "umra"){
        data = {
          ...cleanStep1Data,
          ...cleanStep3Data,
          ...cleanStep4Data,
          encounter_type:identifier,
          meta
        };
        fetch(`${BACKEND_HOST}umra_book`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status == "success") {
              alert("Registerd successfully");
              navigate("/");
            } else {
              alert("Failed to register :(");
            }
          });
      }else{
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto my-12 max-w-[70vw] w-lg-[70vw]">
      <h1 className="text-lg font-semibold mb-4">Step 4</h1>

      {/* Directory Restriction */}
      <div className="mb-4">
        <label
          htmlFor="directoryRestriction"
          className="block text-gray-700 mb-2"
        >
          Do you have any dietary restriction?
        </label>
        <select
          name="directoryRestriction"
          id="directoryRestriction"
          className={`w-full border ${
            errors?.directoryRestriction ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          value={dietaryRestriction}
          onChange={(e) => handleChange("dietaryRestriction", e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors?.dietaryRestriction && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dietaryRestriction}
          </p>
        )}
      </div>

      {/* Age Restriction */}
      <div className="mb-4">
        <label htmlFor="ageRestriction" className="block text-gray-700 mb-2">
          Are you over the age of 65 and traveling alone?
        </label>
        <select
          name="ageRestriction"
          id="ageRestriction"
          className={`w-full border ${
            errors?.ageRestriction ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          value={ageRestriction}
          onChange={(e) => handleChange("ageRestriction", e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors?.ageRestriction && (
          <p className="text-red-500 text-sm mt-1">{errors.ageRestriction}</p>
        )}
      </div>

      {/* Physical Disabilities or Health Conditions */}
      <div className="mb-4">
        <label htmlFor="disabilities" className="block text-gray-700 mb-2">
          Do you have any physical disabilities or health conditions we should
          be aware of?
        </label>
        <select
          name="disabilities"
          id="disabilities"
          className={`w-full border ${
            errors?.disabilities ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          value={disabilities}
          onChange={(e) => handleChange("disabilities", e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors?.disabilities && (
          <p className="text-red-500 text-sm mt-1">{errors.disabilities}</p>
        )}
      </div>

      {/* First Language */}
      <div className="mb-4">
        <label htmlFor="firstLanguage" className="block text-gray-700 mb-2">
          What is your first language?
        </label>
        <input
          type="text"
          id="firstLanguage"
          className={`w-full border ${
            errors?.firstLanguage ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          value={firstLanguage}
          onChange={(e) => handleChange("firstLanguage", e.target.value)}
        />
        {errors?.firstLanguage && (
          <p className="text-red-500 text-sm mt-1">{errors.firstLanguage}</p>
        )}
      </div>

      {/* Additional Comments */}
      <div className="mb-4">
        <label htmlFor="comments" className="block text-gray-700 mb-2">
          Additional comments or notes
        </label>
        <textarea
          id="comments"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={comments}
          onChange={(e) => handleChange("comments", e.target.value)}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="mt-4 h-10 bg-primary-btn text-white rounded px-4 py-2 hover:bg-primary-btn-hover"
        >
          Previous
        </button>
        <button
          onClick={handleFinalSubmit}
          className="ml-4 mt-4 h-10 bg-primary-btn text-white rounded px-4 py-2 hover:bg-primary-btn-hover"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
