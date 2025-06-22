import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // Import WhatsApp & Phone icons

const ContactButtons = () => {
  return (
    <>
      {/* Phone Call Button (Placed on Top) */}
      <a
        href="tel:7827098747"
        className="fixed bottom-20 mb-2 right-5 z-[9999] w-[60px] h-[60px] rounded-full bg-[#890C25] flex items-center justify-center shadow-md animate-breathe"
      >
        <FaPhone className="text-white text-2xl rotate-90" />
      </a>

      {/* WhatsApp Button (Below the Phone Button) */}
      <a
        href="https://wa.me/7827098747?text=Hi! I’m interested in the WSC Program. Please share details about the program and I request a free consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-md animate-breathe"
      >
        <FaWhatsapp className="text-white text-3xl animate-beat" />
      </a>
    </>
  );
};

export default ContactButtons;
