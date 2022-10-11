import React from "react";

function CardList({ Item: { id, email } }) {
  return (
    <div key={id}>
      <img
        src={`https://robohash.org/${id}.png`}
        alt="robo.png"
        width="200px"
      />

      <h4>Email:{email}</h4>
    </div>
  );
}

export default CardList;
