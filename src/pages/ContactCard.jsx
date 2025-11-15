import React from "react";
import QRCode from "react-qr-code";

const ContactCard = ({
  image,
  email,
  secondary_email,
  phone,
  city,
  state,
  documents = [],
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

        {/* Documents Section - Only for Niger */}
        {documents && documents.length > 0 && (
          <div id="niger-documents" className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              📄 Documents utiles :
            </p>
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div key={index}>
                  
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm block"
                    download
                  >
                    📥 {doc.label}
                  </a>
                </div>
              ))}
            </div>

            {/* QR Code Section */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-700 mb-2">
                Scannez le QR code :
              </p>
              <div className="bg-white p-2 rounded-md border border-gray-300 inline-block">
                <QRCode
                  value="https://ansarvoyage.com/contact#niger-documents"
                  size={80}
                  level="M"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
