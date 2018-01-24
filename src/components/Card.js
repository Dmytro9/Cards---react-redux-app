import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { front, deckId, id } = props.card;
  return (
    <div>
      <div style={{ background: "#eee", width: 200, marginBottom: 20 }}>
        {front}
      </div>
      <Link to={`/deck/${deckId}/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default Card;
