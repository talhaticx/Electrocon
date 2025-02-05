import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../lib/constants";
import styled from "styled-components";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={` fixed top-0 left-0 w-full backdrop-blur-md bg-transparent px-2 py-3 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } overflow-x-hidden h-16 items-center`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/home" style={{color:COLORS.econPurpleLight}} className={`TitleFontCustom text-xl md:text-2xl font-bold ${isMenuOpen ? "hidden" : "block"}`}>
          <img src="IET (Purple).png" alt="Electrocon" width={110} />
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links for Desktop and Mobile */}
        <div
          className={` space-x-6 md:flex ${isMenuOpen ? "block" : "hidden"} md:block p-2`}
        >
         <StyledLink to="/">Home</StyledLink>
         <StyledLink to="/">Event</StyledLink>
         <StyledLink to="/">About</StyledLink>
         <StyledLink to="/">Contact</StyledLink>
        </div>
      </div>
    </nav>
  );
};

const StyledLink = styled(Link)`
  color: white;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${COLORS.econPurpleLight};
  }
`;

export default Navbar;