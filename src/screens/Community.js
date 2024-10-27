
import React from 'react';
import Card from '../Components/card';
import cardData from '../Data/cardData.json'
const Community = () => {
  return (
    <section id="community">
      <h2 style={{ margin: "10px", textAlign: "center",marginTop:"30px",fontSize:"30px"}}>Meet Our Community</h2>
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

