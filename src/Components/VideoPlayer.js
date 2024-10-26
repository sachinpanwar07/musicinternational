import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import '../Style/videoplayer.css';

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start playing when the video is in view, stop when it's out of view
        setIsPlaying(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Play when 50% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="video-player" ref={videoRef}>
      <ReactPlayer
        url={src}
        playing={isPlaying}
        controls
        width="100%" // Set to 100% for responsiveness
        height="100%" // Set to 100% for responsiveness
        style={{ position: 'absolute', top: 0, left: 0 }} 
      />
    </div>
  );
};

export default VideoPlayer;
