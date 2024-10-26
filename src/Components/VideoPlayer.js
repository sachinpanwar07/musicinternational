import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ src, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ReactPlayer url={src} controls={true} width="100%" />
    </div>
  );
};

export default VideoPlayer;
