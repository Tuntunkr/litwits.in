import { Link } from "react-router-dom";
import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";
import footerlogo from "../assets/images/litwitslogo.png";
import ltlogo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-8 lg:gap-20">
          {/* Left Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <Link
              to="/"
              className=" uppercase font-light text-[40px] font-noto-serif text-white"
            >
              <h4>Litwits</h4>
            </Link>

            <div className="flex items-center gap-4 mt-6">
              {socialMedia.map((icon) => (
                <a
                  href={icon.link}
                  key={icon.alt}
                  className="flex justify-center items-center w-10 h-10 bg-white rounded-full"
                >
                  <img src={icon.src} alt={icon.alt} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 gap-8 lg:gap-16 lg:flex lg:justify-around mb-8 lg:mb-0">
            {footerLinks.map((section) => (
              <div key={section.title}>
                {/* <h4 className="text-lg footer font-medium mb-4">
                  {section.title}
                </h4> */}
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="text-sm text-[#FFFFFF] footermenu hover:text-white mb-2 uppercase cursor-pointer"
                    >
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col mt-4 items-start gap-4">
            {/* <h4 className="text-lg font-medium">Quick Link</h4> */}
            <Link
              to="membership"
              className="border border-white px-6 py-2 rounded-lg uppercase font-medium text-sm shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="contact-us"
              className="border border-white px-6 py-2 rounded-lg text-sm uppercase font-medium hover:bg-white hover:text-[#781C2D]"
            >
              Contact
            </Link>
            <Link
              to="tel:9811701747"
              className="border border-white px-6 py-2 rounded-lg text-sm uppercase font-medium hover:bg-white hover:text-[#781C2D]"
            >
              Let's Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white-400 pt-6 text-center">
          <div className="text-sm text-white-400">
            <p className="text-white">
              <img
                src={copyrightSign}
                alt="Copyright"
                width={16}
                height={16}
                className="inline-block mr-2 text-white"
              />
              Copyright © 2025. All Rights Reserved by{" "}
              <span className="text-white">LITWITS</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
