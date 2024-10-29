import React from 'react';
import Card from '../Components/card';
import cardData from '../Data/cardDataHw.json'
import '../Style/cardHw.css';

const CommunityHw = () => {
  
  return (
    <section id="communityhw">
      <h1>Meet Our Community</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>

  );
};

export default CommunityHw;