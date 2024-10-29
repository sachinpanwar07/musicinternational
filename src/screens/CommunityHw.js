import React from 'react';
import Card from '../Components/card'; 
import cardData from '../Data/cardData.json';
import '../Style/cardHw.css';

const CommunityHw = ({ showAll = false, onSeeMoreClick }) => {
  const displayedCommunity = showAll ? cardData : cardData.slice(0, 5); 

  return (
    <section id="communityhw">
      <h1>Meet Our Community</h1>
      <div className="Ccard-scroll-container">
        {displayedCommunity.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {!showAll && (
        <button onClick={onSeeMoreClick} className="Csee-more-button">
          See More
        </button>
      )}

    </section>
  );
};

export default CommunityHw;