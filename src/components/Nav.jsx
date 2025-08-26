import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Navbar from "react-bootstrap/Navbar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/session", label: " SESSIONS" },
  { href: "/World Scholars Cup", label: " World Scholars Cup" },
  { href: "/college-counseling", label: "College Counseling" },
  { href: "/membership", label: "Membership" },
];

function Header() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Spacer for fixed header */}
      <div className="h-[120px] sm:h-[130px] md:h-[100px]  bg-red-800" />

      {/* Header container */}
      <div className="fixed top-0 left-0 right-0 z-50  bg-red-800 px-4 py-[40px] flex items-center justify-between sm:justify-center ">
        {/* Logo Left on mobile, Center on desktop */}
        <div className="flex items-center w-full sm:justify-center relative">
          <Navbar.Brand
            href="/"
            style={{
              fontFamily: "Noto Serif, serif",
              fontWeight: 400,
              color: "#890C25",
              fontSize: "clamp(1.2rem, 4vw, 1.7rem)",
            }}
            className="sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <span
              className="uppercase  font-light font-noto-serif text-white"
              style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
            >
              Litwits
            </span>
          </Navbar.Brand>

          {/* Hamburger on the right (mobile only) */}
          <button
            className="ml-auto sm:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Floating Navigation Tabs (half in navbar, half out) */}
      {/* <div className="hidden sm:block fixed left-1/2 transform -translate-x-1/2 z-40 top-[100px] w-full max-w-6xl px-4 pointer-events-none "> */}
      <div className="hidden sm:block fixed left-1/2 transform -translate-x-1/2 z-40 top-[80px] w-full pointer-events-none bg-red-800 shadow-md h-[22px] border-b border-white">
        <div className="flex justify-center flex-wrap gap-4 sm:gap-3 md:gap-6 pointer-events-auto w-full max-w-6xl mx-auto px-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex-1 text-center uppercase py-2 sm:py-2.5 md:py-3 
          text-sm sm:text-base font-serif font-medium shadow-lg border transition-all duration-200
          ${
            isActive
              ? "bg-red-900 text-white"
              : "bg-red-900 text-white hover:bg-red-700"
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
        <div className="sm:hidden fixed top-[90px] left-0 right-0 bg-[#6a071a] z-40 shadow-md border-t">
          <nav className="flex flex-col px-4 py-3 space-y-1 mt-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsNavOpen(false)}
                  className={`block px-4 py-2  font-serif font-medium rounded-md transition-all duration-150 uppercase
              ${
                isActive
                  ? "bg-white text-red-900"
                  : " text-white hover:bg-red-700"
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
