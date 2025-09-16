// // import React, { useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { Menu, X } from "lucide-react";
// // import Navbar from "react-bootstrap/Navbar";

// // const navLinks = [
// //   { href: "/", label: "Home" },
// //   { href: "/session", label: " SESSIONS" },
// //   { href: "/world-scholars-cup", label: " World Scholars Cup" },
// //   { href: "/college-counseling", label: "College Counseling" },
// //   { href: "/membership", label: "Membership" },
// //   { href: "/blog", label: "blog" },
// // ];

// // function Header() {
// //   const location = useLocation();
// //   const [isNavOpen, setIsNavOpen] = useState(false);

// //   return (
// //     <>
// //       {/* Spacer for fixed header */}
// //       <div className="h-[120px] sm:h-[130px] md:h-[100px]  bg-red-800" />

// //       {/* Header container */}
// //       <div className="fixed top-0 left-0 right-0 z-50  bg-red-800 px-4 py-[30px] flex items-center justify-between sm:justify-center ">
// //         {/* Logo Left on mobile, Center on desktop */}
// //         <div className="flex items-center w-full sm:justify-center relative">
// //           <Navbar.Brand
// //             href="/"
// //             style={{
// //               fontFamily: "Noto Serif, serif",
// //               fontWeight: 400,
// //               color: "#890C25",
// //               fontSize: "clamp(1.2rem, 4vw, 1.7rem)",
// //             }}
// //             className="sm:absolute sm:left-1/2 sm:-translate-x-1/2"
// //           >
// //             <span
// //               className="uppercase  font-light font-noto-serif text-white"
// //               style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
// //             >
// //               Litwits
// //             </span>
// //           </Navbar.Brand>

// //           {/* Hamburger on the right (mobile only) */}
// //           <button
// //             className="ml-auto sm:hidden text-white"
// //             onClick={() => setIsNavOpen(!isNavOpen)}
// //           >
// //             {isNavOpen ? <X size={28} /> : <Menu size={28} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Floating Navigation Tabs (half in navbar, half out) */}
// //       {/* <div className="hidden sm:block fixed left-1/2 transform -translate-x-1/2 z-40 top-[100px] w-full max-w-6xl px-4 pointer-events-none "> */}
// //       <div className="hidden sm:block fixed left-1/2 transform -translate-x-1/2 z-40 top-[60px] w-full bg-red-800 shadow-md h-[50px]">
// //         <div className="flex justify-center gap-6 w-full max-w-6xl mx-auto px-4">
// //           {navLinks.map((link) => {
// //             const isActive = location.pathname === link.href;

// //             return link.subLinks ? (
// //               <div key={link.href} className="relative group">
// //                 <span
// //                   className={`flex items-center gap-1 uppercase py-2 px-3 cursor-pointer text-sm sm:text-base font-serif font-medium transition-all duration-200 ${
// //                     isActive
// //                       ? "text-white border-b-2 border-white"
// //                       : "text-white hover:border-b-2 hover:border-gray-300"
// //                   }`}
// //                 >
// //                   {link.label}
// //                   <ChevronDown
// //                     size={16}
// //                     className="transition-transform duration-200 group-hover:rotate-180"
// //                   />
// //                 </span>
// //                 {/* Dropdown */}
// //                 <div
// //                   className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-50 min-w-[200px]
// //           opacity-0 invisible group-hover:opacity-100 group-hover:visible
// //           group-hover:pointer-events-auto pointer-events-none
// //           transition-all duration-200"
// //                 >
// //                   {link.subLinks.map((sub) => (
// //                     <Link
// //                       key={sub.href}
// //                       to={sub.href}
// //                       className="block px-4 py-2 text-sm text-red-900 hover:bg-red-100 font-serif transition"
// //                     >
// //                       {sub.label}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             ) : (
// //               <Link
// //                 key={link.href}
// //                 to={link.href}
// //                 className={`uppercase py-2 px-3 text-sm sm:text-base font-serif font-medium transition-all duration-200 ${
// //                   isActive
// //                     ? "text-white border-b-2 border-white"
// //                     : "text-white hover:border-b-2 hover:border-gray-300"
// //                 }`}
// //               >
// //                 {link.label}
// //               </Link>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       {/* Mobile nav dropdown */}
// //       {isNavOpen && (
// //         <div className="sm:hidden fixed top-[90px] left-0 right-0 bg-[#6a071a] z-40 shadow-md border-t">
// //           <nav className="flex flex-col px-4 py-3 space-y-1 mt-5">
// //             {navLinks.map((link) => {
// //               const isActive = location.pathname === link.href;

// //               return link.subLinks ? (
// //                 <div key={link.href} className="flex flex-col">
// //                   <button
// //                     onClick={() =>
// //                       setMobileDropdown(
// //                         mobileDropdown === link.href ? null : link.href
// //                       )
// //                     }
// //                     className={`flex justify-between items-center px-4 py-2 font-serif font-medium rounded-md transition-all duration-150 uppercase ${
// //                       isActive
// //                         ? "bg-white text-red-900"
// //                         : "text-white hover:bg-red-700"
// //                     }`}
// //                   >
// //                     {link.label}
// //                     <ChevronDown
// //                       size={16}
// //                       className={`transition-transform ${
// //                         mobileDropdown === link.href ? "rotate-180" : ""
// //                       }`}
// //                     />
// //                   </button>
// //                   {mobileDropdown === link.href && (
// //                     <div className="pl-6 bg-red-900">
// //                       {link.subLinks.map((sub) => (
// //                         <Link
// //                           key={sub.href}
// //                           to={sub.href}
// //                           onClick={() => setIsNavOpen(false)}
// //                           className="block px-4 py-2 text-sm text-white hover:bg-red-700"
// //                         >
// //                           {sub.label}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ) : (
// //                 <Link
// //                   key={link.href}
// //                   to={link.href}
// //                   onClick={() => setIsNavOpen(false)}
// //                   className={`block px-4 py-2 font-serif font-medium rounded-md transition-all duration-150 uppercase ${
// //                     isActive
// //                       ? "bg-white text-red-900"
// //                       : "text-white hover:bg-red-700"
// //                   }`}
// //                 >
// //                   {link.label}
// //                 </Link>
// //               );
// //             })}
// //           </nav>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default Header;


// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Navbar from "react-bootstrap/Navbar";

// const navLinks = [
//   { href: "/", label: "Home" },
//   {
//     href: "/session",
//     label: "SESSIONS",
//     subLinks: [
//       { href: "/group-session", label: "Group Session" },
//       { href: "/individual-session", label: "Individual Session" },
//       { href: "/adult-session", label: "Individual for Adult" },
//     ],
//   },
//   { href: "/world-scholars-cup", label: "World Scholars Cup" },
//   { href: "/college-counseling", label: "College Counseling" },
//   { href: "/membership", label: "Membership" },
//   { href: "/blog", label: "Blog" },
// ];

// function Header() {
//   const location = useLocation();
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   return (
//     <>
//       {/* Spacer for fixed header */}
//       <div className="h-[120px] sm:h-[130px] md:h-[100px] bg-red-800" />

//       {/* Header container */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-red-800 px-4 py-[30px] flex items-center justify-between sm:justify-center">
//         {/* Logo */}
//         <div className="flex items-center w-full sm:justify-center relative">
//           <Navbar.Brand
//             href="/"
//             style={{
//               fontFamily: "Noto Serif, serif",
//               fontWeight: 400,
//               color: "#890C25",
//               fontSize: "clamp(1.2rem, 4vw, 1.7rem)",
//             }}
//             className="sm:absolute sm:left-1/2 sm:-translate-x-1/2"
//           >
//             <span
//               className="uppercase font-light font-noto-serif text-white"
//               style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
//             >
//               Litwits
//             </span>
//           </Navbar.Brand>

//           {/* Hamburger */}
//           <button
//             className="ml-auto sm:hidden text-white"
//             onClick={() => setIsNavOpen(!isNavOpen)}
//           >
//             {isNavOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Desktop Navigation */}
//       <div className="hidden sm:block fixed left-1/2 transform -translate-x-1/2 z-40 top-[60px] w-full bg-red-800 shadow-md h-[50px]">
//         <div className="flex justify-center gap-6 w-full max-w-6xl mx-auto px-4">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.href;

//             return link.subLinks ? (
//               <div key={link.href} className="relative group">
//                 <span
//                   className={`flex items-center gap-1 uppercase py-2 px-3 cursor-pointer text-sm sm:text-base font-serif font-medium transition-all duration-200 ${
//                     isActive
//                       ? "text-white border-b-2 border-white"
//                       : "text-white hover:border-b-2 hover:border-gray-300"
//                   }`}
//                 >
//                   {link.label}
//                   <ChevronDown
//                     size={16}
//                     className="transition-transform duration-200 group-hover:rotate-180"
//                   />
//                 </span>
//                 {/* Dropdown */}
//                 <div
//                   className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-50 min-w-[200px] transition-all duration-200"
//                 >
//                   {link.subLinks.map((sub) => (
//                     <Link
//                       key={sub.href}
//                       to={sub.href}
//                       className="block px-4 py-2 text-sm text-red-900 hover:bg-red-100 font-serif transition"
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`uppercase py-2 px-3 text-sm sm:text-base font-serif font-medium transition-all duration-200 ${
//                   isActive
//                     ? "text-white border-b-2 border-white"
//                     : "text-white hover:border-b-2 hover:border-gray-300"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isNavOpen && (
//         <div className="sm:hidden fixed top-[90px] left-0 right-0 bg-[#6a071a] z-40 shadow-md border-t">
//           <nav className="flex flex-col px-4 py-3 space-y-1 mt-5">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.href;

//               return link.subLinks ? (
//                 <div key={link.href} className="flex flex-col">
//                   <button
//                     onClick={() =>
//                       setMobileDropdown(
//                         mobileDropdown === link.href ? null : link.href
//                       )
//                     }
//                     className={`flex justify-between items-center px-4 py-2 font-serif font-medium rounded-md transition-all duration-150 uppercase ${
//                       isActive
//                         ? "bg-white text-red-900"
//                         : "text-white hover:bg-red-700"
//                     }`}
//                   >
//                     {link.label}
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform ${
//                         mobileDropdown === link.href ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   {mobileDropdown === link.href && (
//                     <div className="pl-6 bg-red-900">
//                       {link.subLinks.map((sub) => (
//                         <Link
//                           key={sub.href}
//                           to={sub.href}
//                           onClick={() => setIsNavOpen(false)}
//                           className="block px-4 py-2 text-sm text-white hover:bg-red-700"
//                         >
//                           {sub.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.href}
//                   to={link.href}
//                   onClick={() => setIsNavOpen(false)}
//                   className={`block px-4 py-2 font-serif font-medium rounded-md transition-all duration-150 uppercase ${
//                     isActive
//                       ? "bg-white text-red-900"
//                       : "text-white hover:bg-red-700"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;


import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Mock Link component for demo - replace with actual react-router-dom Link
const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/session",
    label: "SESSIONS",
    subLinks: [
      { href: "/group-session", label: "Group Session" },
      { href: "/individual-session", label: "Individual Session" },
      { href: "/individual-adult", label: "Individual for Adult" },
    ],
  },
  { href: "/world-scholars-cup", label: "World Scholars Cup" },
  { href: "/college-counseling", label: "College Counseling" },
  { href: "/membership", label: "Membership" },
  { href: "/blog", label: "Blog" },
];

function Header() {
  // Mock location for demo - replace with useLocation() in actual implementation
  const location = { pathname: "/session" };
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Handle dropdown hover for desktop
  const handleMouseEnter = (href) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdown(href);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 150); // Small delay to prevent flickering
  };

  // Handle mobile navigation
  const closeMobileNav = () => {
    setIsNavOpen(false);
    setMobileDropdown(null);
  };

  return (
    <>
      {/* Spacer for fixed header */}
      <div className="h-[120px] sm:h-[130px] md:h-[100px]" />

      {/* Header container */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-800 px-4 py-[30px] flex items-center justify-between sm:justify-center shadow-lg">
        {/* Logo */}
        <div className="flex items-center w-full sm:justify-center relative">
          <a
            href="/"
            style={{
              fontFamily: "Noto Serif, serif",
              fontWeight: 400,
              color: "#890C25",
              fontSize: "clamp(1.2rem, 4vw, 1.7rem)",
            }}
            className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-decoration-none"
          >
            <span
              className="uppercase font-light font-noto-serif text-white"
              style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
            >
              Litwits
            </span>
          </a>

          {/* Hamburger */}
          <button
            className="ml-auto sm:hidden text-white hover:text-gray-200 transition-colors duration-200"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:block fixed left-1/2 transform -translate-x-1/2 z-40 top-[60px] w-full bg-red-800 shadow-md h-[50px]">
        <div className="flex justify-center gap-6 w-full max-w-6xl mx-auto px-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const hasDropdown = link.subLinks && link.subLinks.length > 0;
            const isDropdownOpen = desktopDropdown === link.href;

            return hasDropdown ? (
              <div 
                key={link.href} 
                className="relative dropdown-container"
                onMouseEnter={() => handleMouseEnter(link.href)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={`flex items-center gap-1 uppercase py-2 px-3 cursor-pointer text-sm sm:text-base font-serif font-medium transition-all duration-200 select-none ${
                    isActive || isDropdownOpen
                      ? "text-white border-b-2 border-white"
                      : "text-white hover:border-b-2 hover:border-gray-300"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-0 bg-white shadow-xl rounded-lg z-50 min-w-[220px] transition-all duration-300 transform ${
                    isDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                  style={{
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1), 0 6px 10px rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="py-2">
                    {link.subLinks.map((sub, index) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className={`block px-4 py-3 text-sm text-red-900 hover:bg-red-50 hover:text-red-700 font-serif transition-colors duration-150 text-decoration-none ${
                          index === 0 ? "rounded-t-lg" : ""
                        } ${
                          index === link.subLinks.length - 1 ? "rounded-b-lg" : ""
                        } ${
                          location.pathname === sub.href ? "bg-red-100 text-red-800 font-medium" : ""
                        }`}
                        onClick={() => setDesktopDropdown(null)}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`uppercase py-2 px-3 text-sm sm:text-base font-serif font-medium transition-all duration-200 hover:scale-105 text-decoration-none ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-white hover:border-b-2 hover:border-gray-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Backdrop */}
      {isNavOpen && (
        <div 
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-[90px]"
          onClick={closeMobileNav}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={`sm:hidden fixed top-[90px] left-0 right-0 bg-[#6a071a] z-40 shadow-xl border-t transition-all duration-300 transform ${
          isNavOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 space-y-1 mt-5 max-h-[calc(100vh-200px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const hasDropdown = link.subLinks && link.subLinks.length > 0;
            const isDropdownOpen = mobileDropdown === link.href;

            return hasDropdown ? (
              <div key={link.href} className="flex flex-col">
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === link.href ? null : link.href
                    )
                  }
                  className={`flex justify-between items-center px-4 py-3 font-serif font-medium rounded-md transition-all duration-200 uppercase ${
                    isActive
                      ? "bg-white text-red-900 shadow-md"
                      : "text-white hover:bg-red-700 hover:shadow-sm active:scale-95"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {/* Mobile Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 mt-1 space-y-1">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        onClick={closeMobileNav}
                        className={`block px-4 py-2 text-sm rounded-md transition-all duration-150 ${
                          location.pathname === sub.href
                            ? "bg-white text-red-900 font-medium shadow-sm"
                            : "text-white hover:bg-red-700 hover:translate-x-1"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileNav}
                className={`block px-4 py-3 font-serif font-medium rounded-md transition-all duration-200 uppercase text-decoration-none ${
                  isActive
                    ? "bg-white text-red-900 shadow-md"
                    : "text-white hover:bg-red-700 hover:shadow-sm active:scale-95"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .dropdown-container {
            position: static;
          }
        }
        
        /* Smooth scrollbar for mobile menu */
        nav::-webkit-scrollbar {
          width: 4px;
        }
        
        nav::-webkit-scrollbar-track {
          background: transparent;
        }
        
        nav::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        
        nav::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
}

export default Header;
