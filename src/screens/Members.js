// Members.js
import React from "react";
import MemberCard from "../Components/MemberCard";
import members from "../Data/members";

const Members = () => {
  return (
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
