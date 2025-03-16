import React, { useState } from "react";
import heroimage from "/assets/join-litwits.avif";
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
      <section
        ref={ref}
        className="relative flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.4)), url(${heroimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 80px)",
        }}
      >
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center text-white text-center space-y-6">
          <h1 className="hidden">Litwits</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            DISCUSS. WRITE. DEBATE.
          </h2>
        </div>
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
