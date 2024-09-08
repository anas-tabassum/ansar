import React, { useState } from "react";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");

  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      let obj = {
        name,
        email,
        phone,
        country,
        city,
        address,
        state,
        people,
      };

      console.log(obj);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form
              className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-2"
              onSubmit={submitHandler}
            >
              <div className="md:col-span-2">
                <label htmlFor="full_name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                    errors.name ? "error" : ""
                  }`}
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    errors.email ? "error" : ""
                  }`}
                  placeholder="email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="zipcode" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                    errors.phone ? "error" : ""
                  }`}
                  placeholder="123-456-7890"
                  onChange={(e) => setPhone(e.target.value)}
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
                    errors.country ? "error" : ""
                  }`}
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
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
                    errors.city ? "error" : ""
                  }`}
                  placeholder="Anytown"
                  onChange={(e) => setCity(e.target.value)}
                />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>

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
                  onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="soda" className="block text-gray-700">
                  How many people?
                </label>
                <input
                  name="soda"
                  id="soda"
                  placeholder="0"
                  className="h-10 border mt-1 rounded px-4 w-20 bg-gray-50"
                  type="number"
                  min="1"
                  max="20"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>

              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
