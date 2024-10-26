
import React from 'react';
import videos from '../Data/videos';
import VideoPlayer from '../Components/VideoPlayer';
const Content = () => {
  return (
    <section id="content">
      <h2>Content</h2>
      {videos.map((video)=>(
        <VideoPlayer key={video.id} src={video.src}   description={video.description}  title={video.title}/>
      ))}
    </section>
  );
};
export default Content;
