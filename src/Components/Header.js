import React from 'react';
import { Link } from 'react-scroll';
import '../../src/styles.css';

const Header = ({ onNavClick }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>MLI</h1>
        <h2>Music Legacy</h2>
        <h3>International</h3>
      </div>
      <nav className="nav-links">
        <Link to="home" smooth={true} duration={500} onClick={() => onNavClick('home')}>Home</Link>
        <Link to="about-us" smooth={true} duration={500} onClick={() => onNavClick('about-us')}>About Us</Link>
        <Link to="members" smooth={true} duration={500} onClick={() => onNavClick('members')}>Members</Link>
        <Link to="content" smooth={true} duration={500} onClick={() => onNavClick('content')}>Content</Link>
        <Link to="contactus" smooth={true} duration={500} onClick={() => onNavClick('contactus')}>Contact Us</Link>
      </nav>

      <div className="profile-container">
        <div className="profile-sub">
          <a href="#" className="profile-link">My Profile</a>
        </div>
        <div className="profile-img-cont">
          <img src="/profile.jpg" alt="Profile" className="profile-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
