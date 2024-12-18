import React from 'react';
import videos from '../Data/videos';
import VideoPlayer from '../Components/VideoPlayer';
import '../Style/content.css';
import SearchBar from "../Components/SearchBar";
import Footer from '../Components/Footer';
import ContactUs from '../screens/ContactUs';

const Content = () => {
  return (
    <section id="content">
      <div style={{ marginTop: "1%", marginRight: "1%" }}>
        <SearchBar />
      </div>
      <h2 style={{ margin: "10px", textAlign: "center", marginTop: "30px", fontSize: "30px" }}>
        Discover What's New!
      </h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoPlayer
            key={video.id}
            src={video.src}
            publishtime={video.publishtime}
            like={video.like}
          />
        ))}
      </div>
      <ContactUs />
      <Footer />
    </section>
  );
};


export default Content;