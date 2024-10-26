
import React from 'react';
import { Link } from 'react-scroll';
import '../../src/styles.css'
import imagePath from '../constants/imagePath';
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={imagePath.ic_logo}
         alt="Logo" className="logo-image"
         />
        <h1>Music Legacy International</h1>
      </div>
      <nav className="nav-links">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="cummunity" smooth={true} duration={500}>Community</Link>
        <Link to="content" smooth={true} duration={500}>Content</Link>
        <Link to="members" smooth={true} duration={500}>Members</Link>
      </nav>
      <div className="profile">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
