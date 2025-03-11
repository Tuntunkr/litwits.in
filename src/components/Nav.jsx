import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import ltlogo from "../assets/images/logo.png";

// Navigation menu items
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/group-session", label: "Group Sessions" },
  { href: "/individual-session", label: "Individual Sessions" },
  { href: "/college-counseling", label: "College Counseling" },
  { href: "/membership", label: "Membership" },
];

function CollapsibleExample() {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  // Add sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation link click
  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`bg-body-tertiary ${isSticky ? "sticky-navbar animate-navbar" : ""}`}
      style={{
        fontFamily: "Noto Serif, serif",
        padding: isSticky ? "10px 20px" : "20px 30px",
        transition: "padding 0.3s ease",
        zIndex: 1000,
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="/"
          style={{
            fontFamily: "Noto Serif, serif",
            fontWeight: 400,
            color: "#890C25",
            fontSize: "1.7rem",
          }}
        >

              <h4   className=" uppercase font-light text-[36px] font-noto-serif text-red-800">Litwits</h4>


        </Navbar.Brand>

        {/* Hamburger Menu Toggle for Mobile */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />

        {/* Collapsible Navigation Menu */}
        <Navbar.Collapse id="responsive-navbar-nav" in={isNavOpen}>
          <Nav className="ms-auto text-center">
            {navLinks.map((link, index) => (
              <Nav.Item key={index}>
                <Link
                  to={link.href}
                  onClick={handleLinkClick}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Noto Serif, serif",
                    color: location.pathname === link.href ? "#890C25" : "#262626",
                    margin: "0 10px",
                    fontSize: "1rem",
                    padding: "10px 15px",
                    display: "block",
                    borderRadius: location.pathname === link.href ? "8px" : "0",
                    backgroundColor: "transparent",
                    transition: "color 0.3s, border-radius 0.3s",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    // Change text color on hover
                    e.currentTarget.style.color = "#890C25";
                  }}
                  onMouseLeave={(e) => {
                    // Reset text color on mouse leave
                    e.currentTarget.style.color = location.pathname === link.href ? "#890C25" : "#262626";
                  }}
                >
                  {link.label}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
