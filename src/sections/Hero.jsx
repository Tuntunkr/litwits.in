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
import Rozarpayment from "../Rozarpayment";

const Hero = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Offer Popup State
  const [showPopup, setShowPopup] = useState(true);

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
      {/* Popup Animation Style */}
      <style>{`
        @keyframes popupOverlayIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes popupIn {
          0% { transform: scale(0.7) translateY(40px); opacity: 0; }
          80% { transform: scale(1.05) translateY(-8px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-popup-overlay {
          animation: popupOverlayIn 0.5s ease;
        }
        .animate-popup {
          animation: popupIn 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        }
      `}</style>
      {/* Offer Popup Modal */}
       {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center animate-popup-overlay"
          style={{
            background: "rgba(30,30,30,0.15)",
            backdropFilter: "blur(2px)",
          }}
        >
           <div 
            className="relative bg-white rounded-xl shadow-2xl max-w-[90vw] w-full sm:max-w-lg p-4 flex flex-col items-center animate-popup"
            style={{ boxSizing: "border-box" }}
          > 
            {/* Close Button */}
             <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button> 
            {/* Banner Image */}
            <img
              src="/offer.jpeg"
              alt="Offer Banner"
              className=" rounded-lg mb-4 object-cover"
               style={{ maxHeight: "440px" }}
            /> 
            {/* Razorpay Button */}
          <Rozarpayment inrAmount={1200} className="w-full choose-plan transition bg-[#890C25] hover:bg-red-700 text-white py-2 rounded-md text-center font-semibold mt-4" />
            {/*
            <p className="text-sm text-gray-700 text-center mt-2">
              Limited seats available! Register now for the Master Class.
            </p> */}
          </div> 
        </div> 
      )}  
      <section
        ref={ref}
        className="relative flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.4)), url(${heroimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 70px)",
        }}
      >
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center text-white text-center space-y-6">
          <h1 className="hidden">Litwits</h1>
          <h2 className="text-[1.5rem] text-white font-extrabold leading-tight">
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
        <Contact />
      </section>
    </>
  );
});

export default Hero;