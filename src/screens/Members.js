// Members.js
import React from "react";
import MemberCard from "../Components/MemberCard";
import members from "../Data/members";
import SearchBar from "../Components/SearchBar";
import Footer from '../Components/Footer';
import ContactUs from '../screens/ContactUs';

const Members = () => {
  return (
    <div>
      <div style={{ marginTop: "1%", marginRight: "1%" }}>
        <SearchBar />
      </div>
      <div style={styles.container}>
        {members && members.length > 0 ? (
          members.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              image={member.image}
              social={member.social}
            />
          ))
        ) : (
          <p>No members found.</p>
        )}
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default Members;
