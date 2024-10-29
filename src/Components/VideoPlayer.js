import React from 'react';
import ReactPlayer from 'react-player';
import imagePath from '../constants/imagePath'; 
import '../Style/videoplayer.css';

const VideoPlayer = ({ src, publishtime,  like }) => {
  return (
    <div className="video-player">

      <div className="video-header">
        <p style={{color:"white"}}>{publishtime}</p>
      </div>
      <ReactPlayer
        url={src}
        controls
        width="100%"
        height="100%"
      />
      
      <div className="video-footer">
        <img src={imagePath.ic_like_icon} alt="Like Icon" className="like-icon" />
        <p style={{color:"white"}}>{like}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;