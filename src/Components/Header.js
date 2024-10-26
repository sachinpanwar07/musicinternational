
import React from 'react';
import { Link } from 'react-scroll';
import '../../src/styles.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Music Legacy International</h1>
      </div>
      <nav className="nav-links">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about-us" smooth={true} duration={500}>About Us</Link>
        <Link to="members" smooth={true} duration={500}>Members</Link>
        <Link to="content" smooth={true} duration={500}>Content</Link>
      </nav>
      <div className="profile">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
