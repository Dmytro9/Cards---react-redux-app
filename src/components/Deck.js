import React from "react";
import { NavLink } from "react-router-dom";

const Deck = props => {
  console.log(props)
  return (
    <li>
      <NavLink to={`/deck/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default Deck;
