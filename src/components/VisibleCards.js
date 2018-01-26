import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from "./Card";
import { receiveCardData } from "../actions";
import { matches } from "../utils/index";

class VisibleCards extends Component {
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("cards"));
    if (data) this.props.receiveData(data);
  }

  componentDidUpdate() {
    localStorage.setItem("cards", JSON.stringify(this.props.card));
  }

  render() {
    // console.log(this.props)
    let filteredCards = this.props.card.filter(card => {
      return (
        card.deckId === this.props.match.params.deckId &&
        matches(this.props.searchFilter, card)
      );
    });
    return (
      <div>
        {filteredCards.map(card => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    card: state.cardsReducer,
    searchFilter: state.searchReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    receiveData: bindActionCreators(receiveCardData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCards);
