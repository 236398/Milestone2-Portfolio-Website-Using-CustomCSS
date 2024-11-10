import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../app/styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">Hasan</div>

        {/* Large Screen Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-link">
            <a href="#hero">Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about">About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-link">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
