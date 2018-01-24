import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newDeck, hideAddDeck } from "../actions";
import Deck from "../components/Deck";

class Sidebar extends Component {
  constructor() {
    super();

    this.input = null;
  }

  componentDidUpdate() {
    if (this.input) this.input.focus();
  }

  addDeck(e) {
    const deckName = this.input.value;

    if (e.which === 13 && deckName.trim().length) {
      this.input.value = "";
      this.props.newDeck(deckName, +new Date());
      this.props.hideAddDeck(deckName);
    }

    return false;
  }

  render() {
    let field = this.props.toggleDeckField;

    return (
      <div className="col-sm-3 col-md-2 sidebar">
      <div></div>
        <h2 className="page-header">All Decks</h2>
        <ul className="nav nav-sidebar">
          {this.props.decks.length
            ? this.props.decks.map(deck => {
                return <Deck key={deck.id} name={deck.name} id={deck.id} />;
              })
            : null}
        </ul>
        <input
          onKeyPress={this.addDeck.bind(this)}
          ref={input => (this.input = input)}
          className={field ? "block form-control" : "none"}
          type="text"
          placeholder="Enter new deck"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decksReducer,
    toggleDeckField: state.toggleDeckField
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newDeck: bindActionCreators(newDeck, dispatch),
    hideAddDeck: bindActionCreators(hideAddDeck, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
