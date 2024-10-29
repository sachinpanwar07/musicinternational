import React from 'react';
import videos from '../Data/videos';
import VideoPlayer from '../Components/VideoPlayer';
import '../Style/ContentHw.css';
const ContentHw = ({ showAll = false, onSeeMoreClick }) => {
  const displayedVideos = showAll ? videos : videos.slice(0, 6); 
  return (
    <section style={{marginTop:"0px"}}>
      <div className="scroll-container">
        <h1>Home Event</h1>
        {displayedVideos.map((video) => (
          <div key={video.id} className="card">
            <h3>{video.title}</h3>
            <VideoPlayer
              src={video.src}
              publishtime={video.publishtime}
              like={video.like}
            />
          </div>
        ))}
      </div>
      
      {!showAll && (
        <button onClick={onSeeMoreClick} className="see-more-button">
          See More
        </button>
      )}

    

    </section>
  );
};

export default ContentHw;