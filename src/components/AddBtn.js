import React from "react";

const AddBtn = props => {
  return (
    <span className="mr-10">
      <a className="btn btn-success" onClick={props.showAddDeck}>&#10010; New Deck</a>
    </span>
  )
};

export default AddBtn;
