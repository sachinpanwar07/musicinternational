
import React from 'react';
import Card from '../Components/card';
import cardData from '../Data/cardData.json'
const Community = () => {
  return (
    <section id="about-us">
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

export default Community;

