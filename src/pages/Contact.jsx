import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import image from "../media/contact-us.jpg";
import QRCode from "react-qr-code";

const Contact = () => {
  const information = {
    usa: {
      email: "boubacar@ansarvoyage.com",
      secondary_email: "",
      phone: " 1 (800) 912-4232",
      city: "Cleveland",
      state: "Ohio",
      image: "https://img.freepik.com/premium-vector/usa-flag-vector-illustration_768467-359.jpg"
    },
    canada: {
      email: "hadiza@ansarvoyage.com",
      secondary_email: "",
      phone: " 1 (800) 912-4232",
      city: "Montréal",
      state: "QC",
      image: "https://img.freepik.com/free-vector/illustration-canada-flag_53876-27114.jpg?w=2000&t=st=1726919018~exp=1726919618~hmac=50f2aacb6102d5517521c9d37414f7b8982b5a9ca9a22c68b79aeb84b13a2b47"
    },
    niger: {
      email: "contact@ansarvoyage.com",
      secondary_email: "nouhou@ansarvoyage.com",
      phone: "227 87 27 27 20 | 92 72 27 27",
      city: "Niamey",
      state: "Niger",
      image: "https://media.istockphoto.com/id/1486090603/photo/flag-of-niger-with-a-cloth-texture-effect.jpg?s=612x612&w=0&k=20&c=GUzsu0pEuR5pvXGrVephUFeoOV9cdQso60rxVUyf8WE="
    }
  };

  const nigerDocs = [
    {
      label: "Checklist des erreurs Hadj / Oumra",
      url: "https://ansarv1.s3.us-east-2.amazonaws.com/images/Ansar_Voyage_Checklist_Erreurs%5B2%5D.pdf"
    },
    {
      label: "Checklist Valise du Pèlerin",
      url: "https://ansarv1.s3.us-east-2.amazonaws.com/images/Ansar_Voyage_Checklist_Valise%5B1%5D.pdf"
    }
  ];

  return (
    <div className="container mx-auto p-4 grid gap-4 md:flex flex-col items-center">
      <img src={image} className="rounded-md" alt="Contact us banner" />
      
      <div className="flex flex-col justify-around w-full md:flex-row gap-4">
        <ContactCard
          image={information.usa.image}
          email={information.usa.email}
          secondary_email={information.usa.secondary_email}
          phone={information.usa.phone}
          city={information.usa.city}
          state={information.usa.state}
        />
        <ContactCard
          image={information.canada.image}
          email={information.canada.email}
          secondary_email={information.canada.secondary_email}
          phone={information.canada.phone}
          city={information.canada.city}
          state={information.canada.state}
        />
        <ContactCard
          image={information.niger.image}
          email={information.niger.email}
          secondary_email={information.niger.secondary_email}
          phone={information.niger.phone}
          city={information.niger.city}
          state={information.niger.state}
        />
      </div>

      <div className="w-full md:flex md:justify-start">
        <div className="w-full md:w-[32%] bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Documents pour le Niger
          </h3>
          
          <div className="space-y-3 mb-6">
            {nigerDocs.map((doc, idx) => (
              
                key={idx}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:underline text-sm"
              >
                <span>📥 {doc.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
              Scannez le QR code :
            </p>
            <div className="flex justify-center">
              <div className="bg-white p-3 rounded-md border border-gray-300">
                <QRCode 
                  value="https://ansarvoyage.com/contact#niger-documents" 
                  size={100} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
