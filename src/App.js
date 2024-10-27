import React, { useState } from 'react';
import Header from './Components/Header';
import Home from './screens/Home';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';
import Members from './screens/Members';
import Content from './screens/Content'
import Community from './screens/Community'
import './styles.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Header onNavClick={setActiveSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about-us' && <AboutUs />}
      {activeSection === 'members' && <Members />}
      {activeSection === 'content' && <Content />}
      {activeSection === 'community' && <Community />}
    </div>
  );
};

export default App;
