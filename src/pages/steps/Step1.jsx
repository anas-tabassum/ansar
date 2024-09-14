import React, { useState } from "react";

const Step1 = ({ formData, setFormData, errors, handleNext }) => {
  // Destructure formData to get individual fields
  const { name, email, address, city, country, state, phone, people } =
    formData;

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Custom validation handler for this step
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

    return newErrors;
  };

  // Submit handler for validation and moving to the next step
  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();

    if (Object.keys(validationErrors).length > 0) {
      // If there are errors, update the errors state
      setFormData((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }));
    } else {
      // If no errors, proceed to the next step
      setFormData((prevState) => ({
        ...prevState,
        errors: {},
      }));
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
                  className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
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
                  className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
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
                  type="number"
                  name="phone"
                  id="phone"
                  className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
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
                  className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
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
                  className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                    errors.city ? "border-red-500" : ""
                  }`}
                  placeholder="Anytown"
                  value={city}
                  onChange={handleChange}
                />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>

              {/* Additional fields like address, state, and people */}
              <div>
                <label htmlFor="address" className="block text-gray-700">
                  Address / Street
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="1234 Main St"
                  value={address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-gray-700">
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="State"
                  value={state}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="people" className="block text-gray-700">
                  How many people?
                </label>
                <input
                  name="people"
                  id="people"
                  placeholder="0"
                  className="h-10 border mt-1 rounded px-4 w-20 bg-gray-50"
                  type="number"
                  min="1"
                  max="20"
                  value={people}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
