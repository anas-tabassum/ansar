import React, { useState } from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [information, setInformation] = useState({
    usa: {
      email: "boubacar@ansarvoyage.com",
      phone: "(888) 711 8079 ext: 2",
      city: "Cleveland",
      state: "Ohio",
      image:
        "https://img.freepik.com/premium-vector/usa-flag-vector-illustration_768467-359.jpg",
    },
    canada: {
      email: "hadiza@ansarvoysge.com",
      phone: "(888) 711 8079 ext: 1",
      city: "Montréal",
      state: "QC",
      image:
        "https://img.freepik.com/free-vector/illustration-canada-flag_53876-27114.jpg?w=2000&t=st=1726919018~exp=1726919618~hmac=50f2aacb6102d5517521c9d37414f7b8982b5a9ca9a22c68b79aeb84b13a2b47",
    },
    niger: {
      email: "nuhu@ansarvoysge.com",
      phone: "227 87 27 27 20 | 92 72 27 27",
      city: "Niamey",
      state: "Niger",
      image:
        "https://media.istockphoto.com/id/1486090603/photo/flag-of-niger-with-a-cloth-texture-effect.jpg?s=612x612&w=0&k=20&c=GUzsu0pEuR5pvXGrVephUFeoOV9cdQso60rxVUyf8WE=",
    },
  });

  return (
    <div className="container mx-auto p-4 grid gap-4 md:flex flex-col items:center">
      <div className="flex flex-col justify-around w-[100%] md:flex-row">
        {Object.values(information).map((item, index) => (
          <ContactCard
            key={index}
            image={item.image}
            email={item.email}
            phone={item.phone}
            city={item.city}
            state={item.state}
          />
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
