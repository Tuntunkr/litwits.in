import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

// Navigation menu items
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/group-session", label: "Group Sessions" },
  { href: "/individual-session", label: "Individual Sessions" },
  { href: "/college-counseling", label: "College Counseling" },
  { href: "/membership", label: "Membership" },
];

function CollapsibleExample() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div style={{ height: "80px" }}></div> {/* Spacer div */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        style={{
          fontFamily: "Noto Serif, serif",
          padding: "10px 20px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Container fluid="lg">
          {/* Logo */}
          <Navbar.Brand
            href="/"
            style={{
              fontFamily: "Noto Serif, serif",
              fontWeight: 400,
              color: "#890C25",
              fontSize: "clamp(1.2rem, 4vw, 1.7rem)", // Responsive font size
            }}
          >
            <span className="uppercase font-light font-noto-serif text-red-800" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>
              Litwits
            </span>
          </Navbar.Brand>

          {/* Hamburger Menu Toggle for Mobile */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />

          {/* Collapsible Navigation Menu */}
          <Navbar.Collapse id="responsive-navbar-nav" in={isNavOpen}>
            <Nav className="ms-auto">
              {navLinks.map((link, index) => (
                <Nav.Item 
                  key={index} 
                  className="nav-item-responsive"
                >
                  <Link
                    to={link.href}
                    style={{
                      textDecoration: "none",
                      fontFamily: "Noto Serif, serif",
                      color:
                        location.pathname === link.href ? "#890C25" : "#262626",
                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                      padding: "8px 12px",
                      display: "block",
                      borderRadius: location.pathname === link.href ? "8px" : "0",
                      backgroundColor: "transparent",
                      transition: "color 0.3s, border-radius 0.3s",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap", // Prevent text wrapping
                    }}
                    onMouseEnter={(e) => {
                      // Change text color on hover
                      e.currentTarget.style.color = "#890C25";
                    }}
                    onMouseLeave={(e) => {
                      // Reset text color on mouse leave
                      e.currentTarget.style.color =
                        location.pathname === link.href ? "#890C25" : "#262626";
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
    </>
  );
}

export default CollapsibleExample;
