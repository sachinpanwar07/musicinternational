import React from "react";
import '../Style/memberCardHw.css';
const MemberCard = ({ name, image, social }) => {
  const socialLinks = Object.entries(social); 
  return (
    <div className="mcard">
      <div className="imageContainer">
        <img src={image} alt={name} className="image" />
        <div className="overlay">
          {socialLinks.map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
      <p className="name">{name}</p>
    </div>
  );
};

export default MemberCard;
