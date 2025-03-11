import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon


const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/7827098747?text=hello+123"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-md animate-breathe"
    >
        <FaWhatsapp className="text-white text-3xl animate-beat" />
    </a>
  );
};

export default WhatsAppButton;
