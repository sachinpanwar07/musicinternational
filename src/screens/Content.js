
import React from 'react';
import videos from '../Data/videos';
import VideoPlayer from '../Components/VideoPlayer';
const Content = () => {
  return (
    <section id="content">
      <h2 style={{ margin: "10px", textAlign: "center",marginTop:"30px",fontSize:"30px"}}>Discover What's New!</h2>
      {videos.map((video)=>(
        <VideoPlayer key={video.id} src={video.src}   description={video.description} />
      ))}
    </section>
  );
};
export default Content;
