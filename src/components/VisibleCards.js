import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { matches } from "../utils/index";

const VisibleCards = props => {
  let filteredCards = props.card.filter(card => {
    return (
      card.deckId === props.match.params.deckId &&
      matches(props.searchFilter, card)
    );
  });
  return (
    <div>
      {filteredCards.map(card => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    card: state.cardsReducer,
    searchFilter: state.searchReducer
  };
};

export default connect(mapStateToProps)(VisibleCards);
