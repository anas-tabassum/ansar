import React, { useState, useEffect } from "react";
const apiKey = process.env.REACT_APP_API_KEY;

const Ticket = () => {
  const [airports, setAirports] = useState([]);
  const apiKey = "AIzaSyA4hcHSBIuFwa44JG0Z1uZTOrIWsi5aLPw"; // Replace with your actual API key
  const query = "Beijing"; // Your search query

  // useEffect(() => {
  //   fetch(`https://api.openaip.net/api/v1/airports?name=${query}`, {
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div>
      <div className="w-full sm:w-1/2 mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg">
        <form className="w-full">
          {/* Radio Buttons for Trip Type */}
          <div className="mb-4">
            <div className="flex flex-wrap justify-between">
              <label className="inline-flex items-center mb-2 sm:mb-0">
                <input
                  type="radio"
                  name="tripType"
                  value="oneWay"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">One Way</span>
              </label>
              <label className="inline-flex items-center mb-2 sm:mb-0">
                <input
                  type="radio"
                  name="tripType"
                  value="roundTrip"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Round Trip</span>
              </label>
              <label className="inline-flex items-center mb-2 sm:mb-0">
                <input
                  type="radio"
                  name="tripType"
                  value="multiDestination"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Multiple Destinations</span>
              </label>
            </div>
          </div>

          {/* From and To Select Boxes in One Line */}
          <div className="flex flex-wrap justify-between mb-4">
            <div className="flex flex-col w-full sm:w-1/2 pr-2 mb-2 sm:mb-0">
              <label htmlFor="from" className="mb-1">
                From:
              </label>
              <select
                id="from"
                name="from"
                className="border border-gray-300 rounded p-2 w-full"
              >
                <option value="NYC">New York City</option>
                <option value="LON">London</option>
                <option value="TKY">Tokyo</option>
                <option value="PAR">Paris</option>
                <option value="DXB">Dubai</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="to" className="mb-1">
                To:
              </label>
              <select
                id="to"
                name="to"
                className="border border-gray-300 rounded p-2 w-full"
              >
                <option value="NYC">New York City</option>
                <option value="LON">London</option>
                <option value="TKY">Tokyo</option>
                <option value="PAR">Paris</option>
                <option value="DXB">Dubai</option>
              </select>
            </div>
          </div>

          {/* Date Fields for Selection */}
          <div className="mb-4">
            <label htmlFor="departureDate" className="block mb-1">
              Departure Date:
            </label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="returnDate" className="block mb-1">
              Return Date:
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Age Group Selection */}
          <div className="mb-4">
            <label htmlFor="ageGroup" className="block mb-1">
              Age Group:
            </label>
            <select
              id="ageGroup"
              name="ageGroup"
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="child">Child (0-12)</option>
              <option value="teen">Teen (13-17)</option>
              <option value="adult">Adult (18-64)</option>
              <option value="senior">Senior (65+)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded p-2 w-full"
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>

      <main className="h-screen flex flex-col hidden">
        <section className="w-full flex-grow flex items-center justify-center p-4">
          <div className="flex w-full max-w-3xl text-zinc-50 h-64">
            <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl"></div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50"></div>
            <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">BNE</span>
                  <span className="text-zinc-500 text-sm">Brisbane</span>
                </div>
                <div className="flex flex-col flex-grow items-center px-10">
                  <span className="font-bold text-xs">RS 11</span>
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mx-2"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                    <span className="text-sm text-zinc-900">18h 35m</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">ATH</span>
                  <span className="text-zinc-500 text-sm">Athens</span>
                </div>
              </div>
              <div className="flex w-full mt-auto justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Date</span>
                  <span className="font-mono">09/06/2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Departure</span>
                  <span className="font-mono">17:45</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Passenger</span>
                  <span className="font-mono">Rob Stinson</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Gate/Seat</span>
                  <span className="font-mono">A11/21C</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full flex-grow bg-zinc-900 flex items-center justify-center p-4">
          <div className="flex w-full max-w-3xl text-zinc-900 h-64">
            <div className="h-full bg-white flex items-center justify-center px-8 rounded-l-3xl"></div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-white border-zinc-900">
              <div className="absolute rounded-full w-8 h-8 bg-zinc-900 -top-5"></div>
              <div className="absolute rounded-full w-8 h-8 bg-zinc-900 -bottom-5"></div>
            </div>
            <div className="h-full py-8 px-10 bg-white flex-grow rounded-r-3xl flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">BNE</span>
                  <span className="text-zinc-500 text-sm">Brisbane</span>
                </div>
                <div className="flex flex-col flex-grow items-center px-10">
                  <span className="font-bold text-xs">RS 11</span>
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mx-2"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div class="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                    <span class="text-sm">18h 35m</span>
                  </div>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-4xl font-bold">ATH</span>
                  <span class="text-zinc-500 text-sm">Athens</span>
                </div>
              </div>
              <div class="flex w-full mt-auto justify-between">
                <div class="flex flex-col">
                  <span class="text-xs text-zinc-400">Date</span>
                  <span class="font-mono">09/06/2023</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-zinc-400">Departure</span>
                  <span class="font-mono">17:45</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-zinc-400">Passenger</span>
                  <span class="font-mono">Rob Stinson</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-zinc-400">Gate/Seat</span>
                  <span class="font-mono">A11/21C</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Ticket;
