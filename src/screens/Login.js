import React from "react";

import imagePath from "../constants/imagePath";
import '../Style/login.css'
const Login = () => {
  return (
    <section id="login" className="login-container">
      <div className="login-section">
        <div className="login-header">
          <h2>Sign In</h2>
          <div className="login-social">
            <img src={imagePath.ic_facebookicon} alt="Facebook" className="social-icon"/>
            <img src={imagePath.ic_xicon} alt="Twitter" className="social-icon"/>
          </div>
        </div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <button className="login-btn">Sign In</button>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
      </div>

      <div className="login-welcome-section">
        <h2>Welcome to login</h2>
        <p>Don't have an account?</p>
        <a href="#" className="signup-btn">Sign Up</a>
      </div>
    </section>
  );
};

export default Login;
