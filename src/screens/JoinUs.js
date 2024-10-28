import React from 'react';

const JoinUs = ({ onJoinClick }) => {
  return (
    <section id="joinus">
      <h1>Join the MLI Community!</h1>
      <p>Our full-scale online community and social network!</p>
      <button onClick={onJoinClick} className="join-button">
        Join Us ➔
      </button>
    </section>
  );
};

export default JoinUs;
