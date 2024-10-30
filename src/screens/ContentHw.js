import React from 'react';
import videos from '../Data/videos';
import VideoPlayer from '../Components/VideoPlayer';
import '../Style/ContentHw.css';
const ContentHw = ({ showAll = false, onSeeMoreClick }) => {
  const displayedVideos = showAll ? videos : videos.slice(0, 6);
  return (
    <div className="contenthw">
      <h1>Posts</h1>
      <section style={{ marginTop: "0px" }}>
        <div className="scroll-container">
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
            Know More ➔
          </button>
        )}
      </section>
    </div>
  );
};

export default ContentHw;