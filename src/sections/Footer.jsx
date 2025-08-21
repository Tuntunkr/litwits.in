// import { Link } from "react-router-dom";
// import { copyrightSign } from "../assets/icons";
// import { footerLinks, socialMedia } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="bg-red-800 text-white py-12">
//       <div className="container-lg">
//         {/* Top Section */}
//         <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-12">
//           {/* Left Section */}
//           <div className="flex-1 flex flex-col items-start lg:mb-0">
//             {/* Logo */}
//             <Link to="/" className="leading-none m-0 p-0">
//               <div
//                 className="uppercase font-light text-white leading-none m-0 p-0"
//                 style={{
//                   fontSize: "clamp(24px, 4vw, 36px)",
//                   fontFamily: "Noto Sans",
//                 }}
//               >
//                 Litwits
//               </div>
//             </Link>

//             {/* Social Media Icons */}
//             <div className="flex items-center gap-2 mt-3">
//               {socialMedia.map((icon) => {
//                 const updatedLink =
//                   icon.alt === "LinkedIn"
//                     ? "https://www.linkedin.com/company/litwitsglobal/"
//                     : icon.link;

//                 return (
//                   <a
//                     href={updatedLink}
//                     key={icon.alt}
//                     className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-md hover:scale-105 transition"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       src={icon.src}
//                       alt={icon.alt}
//                       className="w-5 h-5 object-contain"
//                     />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Google Review Button */}
//             <div className="w-full mt-3">
//               <a
//                 href="https://www.google.com/maps/place/LITWITS/@28.4154844,77.0605087,17z/data=!4m18!1m9!3m8!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!2sLITWITS!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex flex-col items-start"
//               >
//                 <div className="flex items-center gap-2">
//                   <img
//                     src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
//                     alt="Google G"
//                     className="w-14 h-14"
//                   />
//                   <p
//                     className="text-white text-sm font-medium uppercase leading-tight"
//                     style={{ fontFamily: "Noto Sans" }}
//                   >
//                     Join Our <br />
//                     Happy Customers <br />Write a Review
//                   </p>
//                 </div>

//                 {/* Star Ratings */}
//                 <div className="flex gap-1 mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <span
//                       key={i}
//                       className="text-white text-3xl leading-none"
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </a>
//             </div>
//           </div>

//           {/* Middle Links Section */}
//           <div className="flex-1 grid grid-cols-2 gap-8 lg:gap-16 lg:flex lg:justify-around mb-8 lg:mb-0">
//             {footerLinks.map((section) => (
//               <div key={section.title}>
//                 <ul>
//                   {section.links.map((link) => (
//                     <li
//                       key={link.name}
//                       className="text-sm text-[#FFFFFF] footermenu hover:text-white mb-2 uppercase cursor-pointer"
//                     >
//                       <Link to={link.link}>{link.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Right Buttons Section */}
//           <div className="flex flex-col items-start gap-4">
//             <Link
//               to="/membership"
//               className="border border-white px-6 py-2 rounded-lg uppercase font-medium text-sm shadow-lg"
//               style={{ fontFamily: "Noto Sans" }}
//             >
//               Apply Now
//             </Link>
//             <Link
//               to="/contact-us"
//               className="border border-white px-6 py-2 rounded-lg text-sm uppercase font-medium hover:text-[#781C2D]"
//               style={{ fontFamily: "Noto Sans" }}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 border-t border-white pt-6 text-center">
//           <p className="text-white text-sm flex items-center justify-center gap-2">
//             <img
//               src={copyrightSign}
//               alt="Copyright"
//               width={16}
//               height={16}
//               className="inline-block"
//             />
//             Copyright ©️ 2025. All Rights Reserved by{" "}
//             <span className="font-semibold">LITWITS</span>.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { Link } from "react-router-dom";
// import { copyrightSign, star } from "../assets/icons";
// import { footerLinks, socialMedia } from "../constants";
// import { Star } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-red-800 text-white py-12">
//       <div className="container-lg">
//         {/* Top Section */}
//         <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-8 lg:gap-20">
//           {/* Left Section */}
//           <div className="flex-1 mb-8 lg:mb-0">
//             <Link to="/">
//               <span
//                 className="uppercase font-light text-white"
//                 style={{
//                   fontSize: "clamp(24px, 4vw, 36px)",
//                   fontFamily: "Noto Sans",
//                 }}
//               >
//                 Litwits
//               </span>
//             </Link>

//             {/* Social Media */}
//             <div className="flex items-center gap-4 mt-3">
//               {socialMedia.map((icon) => {
//                 // 👇 LinkedIn link update yahan ho raha hai
//                 const updatedLink =
//                   icon.alt === "LinkedIn"
//                     ? 'https://www.linkedin.com/company/litwitsglobal/?originalSubdomain=in'
//                     : icon.link;

//                 return (
//                   <a
//                     href={updatedLink}
//                     key={icon.alt}
//                     className="flex justify-center items-center w-10 h-10 bg-white rounded-full"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img src={icon.src} alt={icon.alt} width={20} height={20} />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Google Review Stars */}
//             <div className="mt-4">
//               <Link
//                 to="https://www.google.com/maps/place/LITWITS/@28.4154844,77.0605087,17z/data=!4m18!1m9!3m8!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!2sLITWITS!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6!3m7!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center font-semibold text-sm px-6 py-2 rounded-md shadow-md transition border border-white gap-1"
//               >
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="white"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="white"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 17.25l-6.472 3.405 1.235-7.207L2.5 8.985l7.236-1.05L12 1.5l2.264 6.435 7.236 1.05-5.263 4.463 1.235 7.207L12 17.25z"
//                     />
//                   </svg>
//                 ))}
//               </Link>
//             </div>
//           </div>

//           {/* Links Section */}
//           <div className="flex-1 grid grid-cols-2 gap-8 lg:gap-16 lg:flex lg:justify-around mb-8 lg:mb-0">
//             {footerLinks.map((section) => (
//               <div key={section.title}>
//                 <ul>
//                   {section.links.map((link) => (
//                     <li
//                       key={link.name}
//                       className="text-sm text-[#FFFFFF] footermenu hover:text-white mb-2 uppercase cursor-pointer"
//                     >
//                       <Link to={link.link}>{link.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Quick Links Section */}
//           <div className="flex flex-col items-start gap-4">
//             <Link
//               to="membership"
//               className="border border-white px-6 py-2 rounded-lg uppercase font-medium text-sm shadow-lg"
//               style={{ fontFamily: "Noto Sans" }}
//             >
//               Apply Now
//             </Link>
//             <Link
//               to="contact-us"
//               className="border border-white px-6 py-2 rounded-lg text-sm uppercase font-medium hover:text-[#781C2D]"
//               style={{ fontFamily: "Noto Sans" }}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 border-t border-white-400 pt-6 text-center">
//           <div className="text-sm text-white-400">
//             <p className="text-white">
//               <img
//                 src={copyrightSign}
//                 alt="Copyright"
//                 width={16}
//                 height={16}
//                 className="inline-block mr-2 text-white"
//               />
//               Copyright ©️ 2025. All Rights Reserved by{" "}
//               <span className="text-white">LITWITS</span>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import { Link } from "react-router-dom";
// import { copyrightSign } from "../assets/icons";
// import { footerLinks, socialMedia } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="bg-red-800 text-white py-12">
//       <div className="container-lg">
        
//         <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-12">
//          </div></div> <div className="flex-1 flex flex-col items-start lg:mb-0">
            {/* Logo */}
            {/* <Link to="/" className="leading-none m-0 p-0">
              <div
                className="uppercase font-light text-white leading-none m-0 p-0"
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontFamily: "Noto Sans",
                }}
              >
                Litwits
              </div>
            </Link> */}

            {/* Social Media Icons */}
            {/* <div className="flex items-center gap-2 mt-3">
              {socialMedia.map((icon) => {
                const updatedLink =
                  icon.alt === "LinkedIn"
                    ? "https://www.linkedin.com/company/litwitsglobal/"
                    : icon.link;

                return (
                  <a
                    href={updatedLink}
                    key={icon.alt}
                    className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-md hover:scale-105 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                );
              })}
            </div> */}

            {/* Google Review Button */}
            {/* <div className="w-full mt-3">
              <a
                href="https://www.google.com/maps/place/LITWITS/@28.4154844,77.0605087,17z/data=!4m18!1m9!3m8!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!2sLITWITS!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start"
              > */}




                
                {/* <div className="flex items-center gap-2">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                    alt="Google G"
                    className="w-14 h-14"
                  />
                  <p
                    className="text-white text-sm font-medium uppercase leading-tight"
                    style={{ fontFamily: "Noto Sans" }}
                  >
                    Join Our <br />
                    Happy Customers <br />
                    Write a Review
                  </p>
                </div> */}

                {/* Star Ratings */}
                {/* <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-white text-3xl leading-none"
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                 </a>
            </div>
          </div>
*/}
              

          {/* Middle Links Section */}
          {/* <div className="flex-1 grid grid-cols-2 gap-8 lg:gap-16 lg:flex lg:justify-around mb-8 lg:mb-0">
            {footerLinks.map((section) => (
              <div key={section.title}>
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
          </div> */}

          {/* Right Buttons Section */}
          {/* <div className="flex flex-col items-start gap-4">
            <Link
              to="/membership"
              className="border border-white px-6 py-2 rounded-lg uppercase font-medium text-sm shadow-lg"
              style={{ fontFamily: "Noto Sans" }}
            >
              Apply Now
            </Link>
            <Link
              to="/contact-us"
              className="border border-white px-6 py-2 rounded-lg text-sm uppercase font-medium hover:text-[#781C2D]"
              style={{ fontFamily: "Noto Sans" }}
            >
              Contact
            </Link>
          </div>
        </div> */}

        {/* Bottom Section */}
        {/* <div className="mt-12 border-t border-white pt-6 text-center">
          <p className="text-white text-sm flex items-center justify-center gap-2">
            <img
              src={copyrightSign}
              alt="Copyright"
              width={16}
              height={16}
              className="inline-block"
            />
            Copyright ©️ 2025. All Rights Reserved by{" "}
            <span className="font-semibold">LITWITS</span>.
          </p>
        </div>
      </div>
    </footer> 
    
     );
};
    */}
 

// export default Footer;

import { Link } from "react-router-dom";
import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";
import Shweta from "/assets/Shweta.png"
import Sudpa from "/assets/Sudpa.png";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-12">
      <div className="container-lg">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-12">
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-start lg:mb-0">
            {/* Logo */}
            <Link to="/" className="leading-none m-0 p-0">
              <div
                className="uppercase font-light text-white leading-none m-0 p-0"
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontFamily: "Noto Sans",
                }}
              >
                Litwits
              </div>
            </Link>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 mt-3">
              {socialMedia.map((icon) => {
                const updatedLink =
                  icon.alt === "LinkedIn"
                    ? "https://www.linkedin.com/company/litwitsglobal/"
                    : icon.link;

                return (
                  <a
                    href={updatedLink}
                    key={icon.alt}
                    className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-md hover:scale-105 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                );
              })}
            </div>

            {/* Google Review Block (Styled like Trustpilot) */}
            <div className="mt-3 rounded-xl max-w-xs text-white">
              <a
                href= "https://www.google.com/maps/place/LITWITS/@28.4154844,77.0605087,17z/data=!4m18!1m9!3m8!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!2sLITWITS!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6!3m7!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <div className="flex -space-x-4">
                  <img
                    src={Sudpa}
                    alt="user1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={Shweta}
                    alt="user2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>

                {/* Review Info */}
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold text-sm">
                      Google
                    </span>
                    {/* Stars */}
                    <div className="flex items-center ml-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.911c.969 0 1.371 1.24.588 1.81l-3.974 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.89-3.974 2.89c-.784.57-1.838-.197-1.539-1.118l1.517-4.674-3.973-2.89c-.784-.57-.38-1.81.588-1.81h4.91L9.05 2.927z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Rating Text */}
                  <div className="text-sm mt-1">

                    <span>Join Our Happy Customers<br/>Write a Review</span>
                    {/* <span className="text-yellow-400 font-semibold">
                      5.0 Excellent
                    </span>
                    <span className="text-white">| Reviews 5,000</span> */}
                    {/* <span>  Join Our <br/>Happy Customers<br/> Write a Review</span>    */}
                  </div>
                 
                </div>
              </a>
            </div>
          </div>

          {/* Middle Links Section */}
          <div className="flex-1 grid grid-cols-2 gap-8 lg:gap-16 lg:flex lg:justify-around mb-8 lg:mb-0">
            {footerLinks.map((section,index) => (
              <div key={index}>{section.title}
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

          {/* Right Buttons Section */}
          <div className="flex flex-col items-start gap-4">
            <Link
              to="/membership"
              className="border border-white px-6 py-2 rounded-lg uppercase font-medium text-sm shadow-lg"
              style={{ fontFamily: "Noto Sans" }}
            >
              Apply Now
            </Link>
            <Link
              to="/contact-us"
              className="border border-white px-6 py-2 rounded-lg text-sm uppercase font-medium hover:text-[#781C2D]"
              style={{ fontFamily: "Noto Sans" }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white pt-6 text-center">
          <p className="text-white text-sm flex items-center justify-center gap-2">
            <img
              src={copyrightSign}
              alt="Copyright"
              width={16}
              height={16}
              className="inline-block"
            />
            Copyright 2025. All Rights Reserved by
            <span className="font-semibold">LITWITS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;