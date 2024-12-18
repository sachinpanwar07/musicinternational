import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../../src/styles.css";
import imagePath from "../constants/imagePath";

const Header = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-logo">
        <h1>MLI</h1>
        <h2>Music Legacy</h2>
        <h3>International</h3>
      </div>
      <div
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div class="search-bar">
        <span class="search-icon">
        <img src={imagePath.ic_searchsym} alt="Search Icon" />
        </span>
        <input type="text" placeholder="Search..." />

      </div>

      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => {
            onNavClick("home");
            closeMenu();
          }}
        >
          Home
        </Link>
        <Link
          to="event-screen"
          smooth={true}
          duration={500}
          onClick={() => {
            onNavClick("event-screen");
            closeMenu();
          }}
        >
          Events
        </Link>
        <Link
          to="members"
          smooth={true}
          duration={500}
          onClick={() => {
            onNavClick("members");
            closeMenu();
          }}
        >
          Members
        </Link>
        <Link
          to="content"
          smooth={true}
          duration={500}
          onClick={() => {
            onNavClick("content");
            closeMenu();
          }}
        >
          Content
        </Link>
        <Link
          to="community"
          smooth={true}
          duration={500}
          onClick={() => {
            onNavClick("community");
            closeMenu();
          }}
        >
          Community
        </Link>

        <Link
          to="profile"
          smooth={true}
          duration={500}
          onClick={() => {
            onNavClick("profile");
            closeMenu();
          }}
        >
          Profile
        </Link>

      </nav>
      <nav className={`nav-link1 ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
        <Link
          to="login"
          smooth={true}
          duration={500}
          onClick={() => {
            onNavClick("login");
            closeMenu();
          }}
        >
          Sign In/Sign Up
        </Link>

      </nav>
    </header>
  );
};

export default Header;
