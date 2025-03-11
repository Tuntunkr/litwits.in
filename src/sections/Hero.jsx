import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import heroimage from "../assets/images/hero.jpg";
import PopularProducts from "./PopularProducts";
import AwardsSlider from "./Awoard";
import GlobalImpactSlider from "./GlobalImpactSlider";
import SuperQuality from "./SuperQuality";
import TestimonialCarousel from "./Testimonial";
import Services from "./Services";
import Contact from "./Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseList from "../Pages/CourseList";

const Hero = React.forwardRef((props, ref) => {
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

    // Dummy success message for now
    toast.success("Your message has been sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>LITWITS (in caps) & Litwits (w/o caps)</title>
        <meta
          name="description"
          content="Join LITWITS to enhance debating, writing, research, and public speaking. Expert mentors prepare students for Ivy League admissions, World Scholar’s Cup, and more."
        />
        <meta name="keywords" content="Litwits, Litwits Preparation, Litwits Courses" />
        <meta property="og:title" content="LITWITS (in caps) & Litwits (w/o caps)" />
        <meta
          property="og:description"
          content="Join LITWITS to enhance debating, writing, research, and public speaking. Expert mentors prepare students for Ivy League admissions, World Scholar’s Cup, and more."
        />
        <meta property="og:image" content={heroimage} />
        <meta property="og:url" content="https://litwits.com/" />
        <link rel="canonical" href="https://litwits.com/" />
      </Helmet>

      <section
        ref={ref}
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.4)), url(${heroimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Side - Hero Content */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-start text-white text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            DISCUSS. WRITE. DEBATE.
          </h1>
        </div>

        {/* Right Side - Contact Form */}
        {/* <div className="w-full lg:w-1/2 flex justify-center">
          <div className="backdrop-blur-lg bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold text-center text-red-800 uppercase mb-6">
              Contact Us
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white border border-gray-200 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white border border-gray-200 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white border border-gray-200 px-4 py-3 rounded-lg w-full h-28 focus:outline-none focus:ring-2 focus:ring-red-300 text-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 text-white uppercase py-3 px-6 rounded-lg text-lg font-semibold transition-all"
              >
                Book a Free Consultation
              </button>
            </form>
          </div>
        </div> */}
      </section>
      <ToastContainer />

      <section>
        <PopularProducts />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
      <br />
      {/* <CourseList/> */}
      <section>
        <GlobalImpactSlider />
      </section>
      <br />
      <section>
        <AwardsSlider />
      </section>
      <section>
        <TestimonialCarousel />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
});

export default Hero;
