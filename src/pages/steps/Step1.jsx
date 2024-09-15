import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, setErrors } from "../../store/store";

const Step1 = ({ handleNext, setStepValidation }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.step1);
  const { name, email, address, city, country, state, phone, people, errors } =
    formData;

  // Make sure to provide the validation function to the parent
  useEffect(() => {
    setStepValidation(() => handleValidation);
  }, [setStepValidation]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData("step1", { [name]: value }));
  };

  // Validation function for Step 1
  const handleValidation = () => {
    let newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name cannot be empty.";
    }

    if (!email.trim()) {
      newErrors.email = "Email cannot be empty.";
    }

    if (!city.trim()) {
      newErrors.city = "City cannot be empty.";
    }

    if (!country.trim()) {
      newErrors.country = "Country cannot be empty.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone cannot be empty.";
    }

    dispatch(setErrors("step1", newErrors));
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Submit handler for validation and moving to the next step
  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = handleValidation();

    if (isValid) {
      dispatch(setErrors("step1", {})); // Clear any existing errors
      handleNext(); // Call handleNext to move to the next step
    }
  };

  return (
    <div className="p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form
              className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-2"
              onSubmit={submitHandler}
            >
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="John Doe"
                  value={name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="email@domain.com"
                  value={email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="123-456-7890"
                  value={phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="country" className="block text-gray-700">
                  Country / Region
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.country ? "border-red-500" : ""
                  }`}
                  placeholder="Country"
                  value={country}
                  onChange={handleChange}
                />
                {errors.country && (
                  <p className="text-red-500">{errors.country}</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.city ? "border-red-500" : ""
                  }`}
                  placeholder="Anytown"
                  value={city}
                  onChange={handleChange}
                />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-gray-700">
                  Address / Street
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="1234 Main St"
                  value={address}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="state" className="block text-gray-700">
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="State"
                  value={state}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-1 flex items-end justify-end">
                <div className="w-full hidden">
                  <label htmlFor="people" className="block text-gray-700">
                    How many people?
                  </label>
                  <input
                    name="people"
                    id="people"
                    placeholder="0"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="number"
                    min="1"
                    max="5"
                    value={people}
                    onChange={handleChange}
                  />
                </div>
                {/* Move the button next to the input field */}
                <button
                  type="submit"
                  className="ml-4 mt-4 h-10 bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700 "
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
