

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import heroimage from "../assets/images/ccccc.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const Co = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6i3x5r4", // EmailJS Service ID
        "template_bqv3vza", // EmailJS Template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "sz_GE4KVonWfG0Ovo" // Your EmailJS Public Key
      )
      .then(
        () => {
          // Show success toast
          toast.success("Your message has been sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroimage})`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full mx-4">
        <h1 className="text-2xl font-bold text-center uppercase font-nato contact mb-6 text-red-800">
          Contact Us
        </h1>
        <form className="contact space-y-6" onSubmit={handleSubmit}>
          {/* Row with four inputs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full focus:outline-none focus:ring focus:ring-red-300 shadow-sm"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full focus:outline-none focus:ring focus:ring-red-300 shadow-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full focus:outline-none focus:ring focus:ring-red-300 shadow-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full  focus:outline-none focus:ring focus:ring-red-300 shadow-sm"
              required
            />
          </div>

          {/* Textarea */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-red-300 h-28 shadow-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-800 text-white uppercase submit py-2 px-6 rounded-lg hover:bg-red-700 transition-all shadow-sm"
          >
            book a free consultation
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Co;
