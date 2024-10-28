import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/login.css'
import imagePath from '../constants/imagePath';

const LogIn = () => {
  return (
    <section id="login" className="login-container">
      <div className="login-section">
      <div class="login-section-header">
        <h2>Sign In</h2>
        <div className="login-social">
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="login-icon1">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="login-icon1">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        </div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <button className="login-button">Sign In</button>
        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
      </div>

      <div className="login-welcome-section">
        <h2>Welcome to login</h2>
        <p>Don't have an account?</p>
        <a href="#" className="signup-button">Sign Up</a>
      </div>
    </section>

  );
};

export default AboutUs;