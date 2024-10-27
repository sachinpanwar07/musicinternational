import React from 'react'
import '../Style/profile.css'
function Profile() {
  return (
    <section id="profile" className="profile-section">
   <div className="profile-container">
    <img src="path/to/your/profile-image.jpg" alt="Profile" className="profile-image" />
    <div className="profile-text">
      <h2>myProfile</h2>
      <p>Your profile description goes here.</p>
    </div>
  </div>
</section>

  )
}

export default Profile