import React from 'react';
import '../Style/profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

import imagePath from '../constants/imagePath';

function Profile() {
  return (
    <div className="app">
      <header className="header">
        <div className="overlay">
          <h1>Welcome to My Website</h1>
        </div>
      </header>

      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-left">
            <img
              src={imagePath.ic_profile} 
              alt="Profile"
              className="profile-pic"
            />
            <h2>Alex Harmony</h2>
            <p>Professional Music Producer and Composer</p>

            <div className="social-icons">
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon1">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon1">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" className="icon1">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon1">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>

            <div className="social-stats">
              <span className="social-stats-content">20 Following</span>
              <span className="social-stats-content">3.5M Followers</span>
              <span className="social-stats-content">9.6M Views</span>
            </div>
          </div>

          <div className="profile-right">
            <div className="bio">
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores enim quidem eum sed dicta hic nihil possimus deserunt illo!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="recent-posts-section">
        <h1>Posts</h1>
        <div className="posts">
          <div className="post-card">
            <img src={imagePath.ic_post1} alt="Post 1" className="post-image" />
            <p>Post 1</p>
          </div>
          <div className="post-card">
            <img src={imagePath.ic_post2} alt="Post 2" className="post-image" />
            <p>Post 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;