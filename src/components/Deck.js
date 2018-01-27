import React from "react";
import { NavLink } from "react-router-dom";

const Deck = props => {
  return (
    <li>
      <NavLink className={props.location === props.id ? 'active' : ''}  to={`/deck/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default Deck;
