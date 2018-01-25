import React from "react";

const AddBtn = props => {
  return (
    <span className="mr-9">
      <a className="btn btn-sm btn-success" onClick={props.showAddDeck}>&#10010; New Deck</a>
    </span>
  )
};

export default AddBtn;
