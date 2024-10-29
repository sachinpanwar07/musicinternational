import React, { useState } from 'react';
import '../Style/searchBar.css';
import members from '../Data/members';
import MemberCard from './MemberCard';
import imagePath from '../constants/imagePath';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInput(e.target.value);

    const filteredResults = members.filter(member => {
      const name = member.name ? member.name.toLowerCase() : '';
      return name.includes(searchTerm);
    });

    setFilteredItems(filteredResults);
  };

  return (
    <div className="searchdiv">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name" 
          value={searchInput} 
          onChange={handleSearch} 
        />
        <img
          src={imagePath.ic_search_icon} 
          alt="Search"
          className="search-icon"
        />
      </div>

      {searchInput && (
        <div className="card-container">
          {filteredItems.map((member, index) => (
            <MemberCard 
              key={index} 
              name={member.name} 
              image={member.image} 
              social={member.social} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
