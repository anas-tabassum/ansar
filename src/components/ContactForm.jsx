import React, { useState } from "react";
import validator from "validator";
import { BACKEND_HOST } from "../config";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!subject) {
      newErrors.subject = "Subject is required.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setErrors({});

    if (validateForm()) {
      try {
        const response = await fetch(`${BACKEND_HOST}contact_email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, subject, message }),
        });
        if (response.ok) {
          setSuccess("Your message has been sent successfully!");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          setErrors({ submit: "Failed to send the message. Try again later." });
        }
      } catch (error) {
        setErrors({ submit: "An error occurred. Please try again." });
      }
    }
  };

  return (
      <div className="container mx-auto p-4 max-w-lg">
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
            >
              Email
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
            />
            {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
            >
              Subject
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={subject}
                onChange={handleChange}
            />
            {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
            )}
          </div>

          <div className="mb-6">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
            >
              Message
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                value={message}
                onChange={handleChange}
            ></textarea>
            {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
                className="bg-primary-btn hover:bg-primary-btn-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
              Submit
            </button>
          </div>

          {errors.submit && (
              <p className="text-red-500 text-xs mt-2">{errors.submit}</p>
          )}
          {success && (
              <p className="text-green-500 text-xs mt-2">{success}</p>
          )}
        </form>
      </div>
  );
};

export default ContactForm;
