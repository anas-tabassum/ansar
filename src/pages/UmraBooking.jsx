import React, { useState, useRef } from "react";
import Step1 from "./steps/Step1";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const Umra = () => {
  // Manage the active step locally
  const [activeStep, setActiveStep] = useState(1);
  const [errors, setErrors] = useState({});

  // Reference to validation function of the current step
  const stepValidationRef = useRef(null);

  // Function to handle the "Next" button
  const handleNext = () => {
    let isValid = false;

    if (stepValidationRef.current) {
      // Validate the current step using the validation function from the step component
      isValid = stepValidationRef.current();
    }

    if (isValid && activeStep < 3) {
      setErrors({}); // Clear errors before moving to the next step
      setActiveStep((prevStep) => prevStep + 1); // Move to the next step
    }
  };

  // Function to handle the "Back" button
  const handleBack = () => {
    if (activeStep > 1) {
      setErrors({}); // Clear errors when going back
      setActiveStep((prevStep) => prevStep - 1); // Move to the previous step
    }
  };

  // Function to render the component based on the current step
  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <Step1
            errors={errors}
            handleNext={handleNext}
            setStepValidation={(validateForm) => {
              stepValidationRef.current = validateForm;
            }}
          />
        );
      case 2:
        return (
          <Step3
            errors={errors}
            handleNext={handleNext}
            handleBack={handleBack}
            setStepValidation={(validateForm) => {
              stepValidationRef.current = validateForm;
            }}
          />
        );
      case 3:
        return (
          <Step4
            errors={errors}
            handleBack={handleBack}
            setStepValidation={(validateForm) => {
              stepValidationRef.current = validateForm;
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Centering Container with Max Width */}
      <div className="w-full max-w-3xl px-4">
        {/* Step Progress Indicator */}
        <div className="w-full">
          <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base mb-4">
            {[1, 2, 3].map((step, index) => (
              <li
                style={{ width: step === 3 ? "100px" : "" }}
                key={step}
                className={`flex w-full relative ${
                  activeStep >= step ? "text-indigo-600" : "text-gray-900"
                } ${
                  index < 2 ? 'after:content-[""] after:w-full after:h-0.5' : ""
                } ${
                  activeStep > step && index < 2
                    ? "after:bg-indigo-600"
                    : index < 2
                    ? "after:bg-gray-200"
                    : ""
                } ${
                  index < 2
                    ? "after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
                    : ""
                }`}
              >
                <div className="block whitespace-nowrap z-10">
                  <span
                    className={`w-6 h-6 ${
                      activeStep >= step
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-50 text-gray-900"
                    } border-2 ${
                      activeStep >= step
                        ? "border-transparent"
                        : "border-gray-200"
                    } rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10`}
                  >
                    {step}
                  </span>{" "}
                  Step {step}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Render Step Content */}
        <div>{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default Umra;