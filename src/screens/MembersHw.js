// Members.js
import React from "react";
import MemberCard from "../Components/MemberCardHw";
import members from "../Data/membersHw";

const MembersHw = () => {
  return (
    <section id="membersHw">
      <h1>Explore Members</h1>
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
    <button>Know More ➔</button>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default MembersHw;
