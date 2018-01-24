import React from "react";
import { Link } from "react-router-dom";

const EditBtn = props => {
  const { deckId } = props.match.params;
  return (
    <div className="btn-group">
      <Link className="btn btn-default" to={`/deck/${deckId}/new`}>
      &#10010; New Cards
      </Link>
      <Link className="btn btn-default" to={`/deck/${deckId}/study`}>
        Study Deck
      </Link>
    </div>
  );
};

export default EditBtn;
