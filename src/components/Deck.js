import React from "react";
import { NavLink } from "react-router-dom";

const Deck = props => {
  return (
    <li>
      <NavLink to={`/deck/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default Deck;
