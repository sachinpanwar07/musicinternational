import React from 'react';
import imagePath from '../constants/imagePath';

const ContactUs = () => {
  return (
    <section id="contactus">
      <div className="contact-column">
        <h2>MLI</h2>
        <h3> (Music Legacy International)</h3>
        <div>Feel free to contact us on these handles and we will get back to you as soon as possible.</div>
        <p>------------------------------</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={imagePath.ic_instlogo} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={imagePath.ic_facebookicon} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={imagePath.ic_linkicon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={imagePath.ic_xicon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="contact-column">
      <h1>Quick Links</h1>
        <p>Home</p>
        <p>Events</p>
        <p>Members</p>
        <p>Content</p>
        <p>Community</p>
      </div>
      <div className="contact-column">
        <h1>Contact Us</h1>
        <p>1-631-352-7934</p>
        <p>info@musiclegacyinternational.com</p>
        
      </div>
    </section>
  );
};

export default ContactUs;
