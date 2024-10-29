import React, { useState } from 'react';
import Header from './Components/Header';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import EventScreen from './screens/EventScreen';
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
import EventsHw from './screens/EventsHw';
import MembersHw from './screens/MembersHw';
import ContentHw from './screens/ContentHw';
import CommunityHw from './screens/CommunityHw';
import UCEvent from './screens/UCEvent';


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

          <UCEvent onSeeMoreClick={() => setActiveSection('event-screen')} />
          <EventsHw />
          <MembersHw />
         
          <ContentHw onSeeMoreClick={() => setActiveSection('content')} /> 
          <CommunityHw onSeeMoreClick={() => setActiveSection('community')} />
          <JoinUs onJoinClick={() => setActiveSection('login')} />

          <ContactUs />
          <Footer />
        </div>
      )}

      {activeSection === 'event-screen' && <EventScreen />}
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