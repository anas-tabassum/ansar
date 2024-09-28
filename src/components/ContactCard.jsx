const ContactCard = ({ image, email, phone, city, state, secondary_email }) => {
  console.log(secondary_email);
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 md:mb-0 shadow-[1px_1px_6px_black] md:flex-row md:shadow-none">
        <img className="w-full h-44 object-cover" src={image} alt="Profile" />

        {/* Dynamic content */}
        <div className="p-4">
          <p className="text-gray-700">
            <strong>Email:</strong> {email} <br />
            {secondary_email && (
              <span>
                <b>Secondary Email:</b> {secondary_email}
              </span>
            )}
          </p>
          <p className="text-gray-700">
            <strong>Contact Number:</strong> {phone}
          </p>
          <p className="text-gray-700">
            <strong>City & State:</strong> {city}, {state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
