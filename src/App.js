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
import VideoContent from './screens/VIdeoContant';
import JoinUs from './screens/JoinUs';
import Footer from './Components/Footer';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Header onNavClick={setActiveSection} />

      {activeSection === 'home' && (
        <div>
          <Home onCommunityClick={() => setActiveSection('community')} />
          <AboutUs />
          <VideoContent />
          <JoinUs  onJoinClick={()=>setActiveSection('login')}/>
          <ContactUs />
          <Footer />
        </div>
      )}

      {activeSection === 'about-us' && <AboutUs />}
      {activeSection === 'contact-us' && <ContactUs />}
      {activeSection === 'members' && <Members />}
      {activeSection === 'content' && <Content />}
      {activeSection === 'community' && <Community />}
      {activeSection === 'profile' && <Profile />}
      {activeSection === 'login' && <LoginScreen />}
    </div>
  );
};

export default App;
