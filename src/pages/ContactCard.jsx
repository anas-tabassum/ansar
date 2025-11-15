import React from "react";

const ContactCard = ({
  image,
  email,
  secondary_email,
  phone,
  city,
  state,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[32%] hover:shadow-xl transition-shadow">
      {/* Country Flag */}
      <div className="mb-4">
        <img
          src={image}
          alt={`${state} flag`}
          className="w-full h-32 object-cover rounded-md"
        />
      </div>

      {/* Contact Information */}
      <div className="space-y-2">
        {/* Primary Email */}
        <div>
          <p className="text-sm font-semibold text-gray-700">Email:</p>
          
            href={`mailto:${email}`}
            className="text-sm text-gray-900 hover:text-blue-600 break-all"
          >
            {email}
          </a>
        </div>

        {/* Secondary Email */}
        {secondary_email && (
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Secondary Email:
            </p>
            
              href={`mailto:${secondary_email}`}
              className="text-sm text-gray-900 hover:text-blue-600 break-all"
            >
              {secondary_email}
            </a>
          </div>
        )}

        {/* Phone Number */}
        <div>
          <p className="text-sm font-semibold text-gray-700">Contact Number:</p>
          <p className="text-sm text-gray-900">{phone}</p>
        </div>

        {/* City & State */}
        <div>
          <p className="text-sm font-semibold text-gray-700">City & State:</p>
          <p className="text-sm text-gray-900">
            {city}, {state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;


