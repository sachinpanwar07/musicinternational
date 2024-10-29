import React from "react";
import SearchBar from "../Components/SearchBar";

const Home = ({ onCommunityClick }) => {
  return (
    <div>
      <section id="home">
       <div style={{marginBottom:"50px"}}> <SearchBar/></div>
        <h1>An International Music & Arts Organization</h1>
        <p>
          Dedicated to the advancement of independent musicians, artists, performers, and various talents in the music and arts industry.
        </p>
        <button onClick={onCommunityClick} className="home-button">
          Community ➔
        </button>
        <div className="home__mouse-scroll-cont">
          <div className="mouse">
            <div className="dot"></div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: "90px" }}></div>
    </div>
  );
};

export default Home;
