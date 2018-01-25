import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../actions/index";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";

class CardModal extends Component {
  constructor() {
    super();

    this.textFront = null;
    this.textBack = null;
  }
  componentDidMount() {
    this.textFront.focus();
  }
  onSave(e) {
    let front = this.textFront;
    let back = this.textBack;

    if (front.value.trim().length && back.value.trim().length) {
      this.props.onSave(
        Object.assign({}, this.props.card, {
          front: front.value,
          back: back.value,
          deckId: this.props.deckId,
          id: +new Date()
        })
      );
      this.props.history.push(`/deck/${this.props.deckId}`);
    } else {
      alert("Please, fill two Front and Back fields...");
      e.preventDefault();
    }
  }

  render() {
    let { card } = this.props;

    return (
      <div className="cardModel-layout">
      <div className="cardModel">
        <h3>New Card</h3>
        <label>Card Front:</label>
        <textarea
          ref={textarea => {
            this.textFront = textarea;
          }}
          defaultValue={card.front}
        />
        <label>Card Back:</label>
        <textarea
          ref={textarea => {
            this.textBack = textarea;
          }}
          defaultValue={card.back}
        />
        <p>
          <button className='btn btn-sm btn-default' onClick={this.onSave.bind(this)}>Add Card</button>
          <Link className='btn btn-sm btn-default' to={`/deck/${this.props.deckId}`}>Cancel</Link>
        </p>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    deckId: props.match.params.deckId,
    decks: state.decksReducer,
    card: state.cardsReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSave: bindActionCreators(addCard, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CardModal)
);
