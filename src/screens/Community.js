
import React from 'react';
import Card from '../Components/card';
import cardData from '../Data/cardData.json'
import SearchBar from "../Components/SearchBar";
import Footer from '../Components/Footer';
import ContactUs from '../screens/ContactUs';
const Community = () => {
  return (
    <section id="community">
      <div style={{ marginTop: "1%", marginRight: "1%" }}>
        <SearchBar />
      </div>
      <h2 style={{ margin: "10px", textAlign: "center", marginTop: "30px", fontSize: "30px" }}>Meet Our Community</h2>
      <div className="card-container">


        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Community;

