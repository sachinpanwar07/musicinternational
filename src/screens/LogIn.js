import React from 'react';

const LogIn = () => {
  return (

    <section id="login" className="login-container">
      {/* Sign In Section */}
      <div className="login-section">
        <h2>Sign In</h2>
        <div className="login-social">
          <img src="facebook-icon.png" alt="Facebook" />
          <img src="twitter-icon.png" alt="Twitter" />
        </div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <button className="login-btn">Sign In</button>
        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="login-welcome-section">
        <h2>Welcome to login</h2>
        <p>Don't have an account?</p>
        <a href="#" className="signup-btn">Sign Up</a>
      </div>
    </section>
  );
};

export default LogIn;
