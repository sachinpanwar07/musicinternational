import React from "react";
import ReactPlayer from "react-player";
import "../Style/videoContant.css";

const VideoContent = () => {
  return (
    <div className="video-content">
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=vG2n6ZphoWI"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <div className="description-container">
        <p>
          Music Legacy International (MLI) is an International Music and Arts
          organization and Media Production company, dedicated to the
          advancement of independent Musicians, Artists, Performers, and various
          talents in the music and arts industry. Artists, and businesses
          self-promoting and collaborating, while creating and embracing the
          arts. Cultivating each step of their career, both independently, and
          collectively while maintaining their rights and
          ownership of their work.
        </p>
      </div>
    </div>
  );
};

export default VideoContent;
