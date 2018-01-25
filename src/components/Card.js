import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { front, deckId, id } = props.card;
  return (
    <div className="col-md-4">
      <div className="card">
        {front}
        <Link
          className="btn btn-xs btn-default"
          to={`/deck/${deckId}/edit/${id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Card;
