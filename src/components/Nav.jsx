// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "./Nav.css";

// // Navigation menu items
// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/group-session", label: "Group Sessions" },
//   { href: "/individual-session", label: "Individual Sessions" },
//   { href: "/college-counseling", label: "College Counseling" },
//   { href: "/membership", label: "Membership" },
// ];

// function CollapsibleExample() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <>
//       <div style={{ height: "80px" }}></div> {/* Spacer div */}
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         className="bg-body-tertiary"
//         style={{
//           fontFamily: "Noto Serif, serif",
//           padding: "10px 20px",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           width: "100%",
//           zIndex: 1000,
//           backgroundColor: "rgba(255, 255, 255, 1)",
//           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
//         }}
//       >
//         <Container fluid="lg">
//           {/* Logo */}
//           <Navbar.Brand
//             href="/"
//             style={{
//               fontFamily: "Noto Serif, serif",
//               fontWeight: 400,
//               color: "#890C25",
//               fontSize: "clamp(1.2rem, 4vw, 1.7rem)", // Responsive font size
//             }}
//           >
//             <span className="uppercase font-light font-noto-serif text-red-800" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>
//               Litwits
//             </span>
//           </Navbar.Brand>

//           {/* Hamburger Menu Toggle for Mobile */}
//           <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={() => setIsNavOpen(!isNavOpen)}
//           />

//           {/* Collapsible Navigation Menu */}
//           <Navbar.Collapse id="responsive-navbar-nav" in={isNavOpen}>
//             <Nav className="ms-auto">
//               {navLinks.map((link, index) => (
//                 <Nav.Item 
//                   key={index} 
//                   className="nav-item-responsive"
//                 >
//                   <Link
//                     to={link.href}
//                     style={{
//                       textDecoration: "none",
//                       fontFamily: "Noto Serif, serif",
//                       color:
//                         location.pathname === link.href ? "#890C25" : "#262626",
//                       fontSize: "clamp(0.8rem, 2vw, 1rem)",
//                       padding: "8px 12px",
//                       display: "block",
//                       borderRadius: location.pathname === link.href ? "8px" : "0",
//                       backgroundColor: "transparent",
//                       transition: "color 0.3s, border-radius 0.3s",
//                       textTransform: "uppercase",
//                       whiteSpace: "nowrap", // Prevent text wrapping
//                     }}
//                     onMouseEnter={(e) => {
//                       // Change text color on hover
//                       e.currentTarget.style.color = "#890C25";
//                     }}
//                     onMouseLeave={(e) => {
//                       // Reset text color on mouse leave
//                       e.currentTarget.style.color =
//                         location.pathname === link.href ? "#890C25" : "#262626";
//                     }}
//                   >
//                     {link.label}
//                   </Link>
//                 </Nav.Item>
//               ))}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default CollapsibleExample;



// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/group-session", label: "Group Sessions" },
//   { href: "/individual-session", label: "Individual Sessions" },
//   { href: "/college-counseling", label: "College Counseling" },
//   { href: "/membership", label: "Membership" },
// ];

// function Header() {
//   const location = useLocation();

//   return (
//     <>
//       {/* Spacer for fixed header height */}
//       <div className="h-[130px] sm:h-[150px] md:h-[145px] bg-red-800" />

//       {/* Header */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-red-800 px-4 py-4 flex justify-center items-center ">
//         <div className="text-center">
//           <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-semibold uppercase tracking-wide">
//             Litwits
//           </h1>
//         </div>
//       </div>

//       {/* Floating Navigation Tabs (half in navbar, half out) */}
//       <div className="fixed left-1/2 transform -translate-x-1/2 top-[100px] sm:top-[110px] md:top-[120px] z-40 w-full max-w-6xl px-2 sm:px-4 pointer-events-none">
//         <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-serif font-medium rounded-md shadow-lg border transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-white text-red-800 border-white"
//                       : "bg-white text-black hover:bg-red-700 border-[#052452]"
//                   }`}
//                 style={{ position: "relative", zIndex: 10 }}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;



// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/group-session", label: "Group Sessions" },
//   { href: "/individual-session", label: "Individual Sessions" },
//   { href: "/college-counseling", label: "College Counseling" },
//   { href: "/membership", label: "Membership" },
// ];

// function Header() {
//   const location = useLocation();

//   return (
//     <>
//       {/* Spacer for fixed header height */}
//       <div className="h-[130px] sm:h-[150px] md:h-[145px] bg-red-800" />

//       {/* Header */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-red-800 px-4 py-4 flex justify-center items-center ">
//         <div className="text-center">
//           <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-semibold uppercase tracking-wide">
//             Litwits
//           </h1>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="fixed left-1/2 transform -translate-x-1/2 top-[100px] sm:top-[110px] md:top-[120px] z-40 w-full max-w-6xl px-2 sm:px-4 pointer-events-none">
//         <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.href;

//             // === COMBO 1: White Active / Navy Inactive ===
//             return (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-serif font-medium rounded-md shadow-lg border transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-white text-red-800 border-white"
//                       : "bg-[#052452] text-white hover:bg-red-700 border-[#052452]"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             );

//             /*
//             // === COMBO 2: Beige Active / Maroon Inactive ===
//             return (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-serif font-medium rounded-md shadow-lg border transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-[#fdf3e7] text-red-900 border-[#fdf3e7]"
//                       : "bg-red-900 text-white hover:bg-red-700 border-red-900"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             );
//             */

//             /*
//             // === COMBO 3: Light Yellow Active / Indigo Inactive ===
//             return (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-serif font-medium rounded-md shadow-lg border transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-[#fff8dc] text-red-900 border-[#fff8dc]"
//                       : "bg-[#4434b4] text-white hover:bg-red-700 border-[#4434b4]"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             );
//             */

//             /*
//             // === COMBO 4: Pink Active / Gray Inactive ===
//             return (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-serif font-medium rounded-md shadow-lg border transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-[#ffe5e5] text-red-900 border-[#ffe5e5]"
//                       : "bg-[#4b5563] text-white hover:bg-red-700 border-[#4b5563]"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             );
//             */

//             /*
//             // === COMBO 5: Cream Active / Teal Inactive ===
//             return (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`pointer-events-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-serif font-medium rounded-md shadow-lg border transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-[#faf3dd] text-red-800 border-[#faf3dd]"
//                       : "bg-[#2c3e50] text-white hover:bg-red-700 border-[#2c3e50]"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             );
//             */
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/group-session", label: "Group Sessions" },
  { href: "/individual-session", label: "Individual Sessions" },
  { href: "/college-counseling", label: "College Counseling" },
  { href: "/membership", label: "Membership" },
];

function Header() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Spacer for fixed header */}
      <div className="h-[130px] sm:h-[160px] md:h-[170px] bg-red-800" />

      {/* Header container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-800 px-4 py-4 flex flex-col items-center justify-center">
        {/* Logo Centered */}
        <div className="w-full flex justify-center relative">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-semibold uppercase tracking-wide">
            Litwits
          </h1>

          {/* Hamburger on the right */}
          <button
            className="absolute right-0 sm:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop nav below logo (centered) */}
        <div className="hidden sm:flex mt-4 flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pointer-events-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-serif font-medium rounded-md shadow-lg border transition-all duration-200
                  ${
                    isActive
                      ? "bg-white text-red-800 border-white"
                      : "bg-white text-black hover:bg-red-700 border-[#052452]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isNavOpen && (
        <div className="sm:hidden fixed top-[130px] left-0 right-0 bg-white z-40 shadow-md border-t">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsNavOpen(false)}
                  className={`block px-4 py-2 font-serif font-medium rounded-md transition-all duration-150 uppercase
                    ${
                      isActive
                        ? "text-red-800 bg-gray-100"
                        : "text-gray-800 hover:text-red-800"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
