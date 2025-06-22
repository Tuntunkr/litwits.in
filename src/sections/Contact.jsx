import React, { useState } from "react";
import heroimage from "/assets/contact-us.avif";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mzzgaelv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroimage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      role="img"
      aria-label="Contact Us - LITWITS"
      aria-describedby="contact-us-description"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full mx-4">
        <h2 className="text-2xl font-bold text-center uppercase font-nato contact mb-6 text-red-800">
          Contact Us
        </h2>
        <form className="contact space-y-6" onSubmit={handleSubmit}>
          {/* Hidden honeypot field for spam protection */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full focus:outline-hidden focus:ring-3 focus:ring-red-300 shadow-xs"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full focus:outline-hidden focus:ring-3 focus:ring-red-300 shadow-xs"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full focus:outline-hidden focus:ring-3 focus:ring-red-300 shadow-xs"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-1 rounded-lg w-full  focus:outline-hidden focus:ring-3 focus:ring-red-300 shadow-xs"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-hidden focus:ring-3 focus:ring-red-300 h-28 shadow-xs"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white uppercase submit py-2 px-6 rounded-lg hover:bg-red-700 transition-all shadow-xs"
          >
            book a free consultation
          </button>
        </form>
      </div>

      <p id="contact-us-description" className="sr-only">
        Reach out to LITWITS for inquiries, course details, and mentorship
        opportunities.
      </p>
      <ToastContainer />
    </div>
  );
};

export default Co;
