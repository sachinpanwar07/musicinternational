import React, { useState } from 'react';
import Header from './Components/Header';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Members from './screens/Members';
import Content from './screens/Content';
import Community from './screens/Community';
import Profile from './screens/Profile';
import './styles.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Header onNavClick={setActiveSection} />

      {activeSection === 'home' && (
        <div>
          <Home />
          <AboutUs />
          <ContactUs />
        </div>
      )}

      {activeSection === 'about-us' && <AboutUs />}
      {activeSection === 'contact-us' && <ContactUs />}
      {activeSection === 'members' && <Members />}
      {activeSection === 'content' && <Content />}
      {activeSection === 'community' && <Community />}
      {activeSection === 'profile' && <Profile />}
    </div>
  );
};

export default App;
