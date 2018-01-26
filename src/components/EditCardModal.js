import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCard } from "../actions/index";
import { updateCard } from "../actions/index";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";

class EditCardModal extends Component {
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
    let currentCard = this.props.card.filter(
      card => this.props.location.pathname.indexOf(card.id) !== -1
    );
    if (front.value.trim().length && back.value.trim().length) {
      this.props.onUpdate(
        Object.assign({}, currentCard[0], {
          front: front.value,
          back: back.value
        })
      );
      this.props.history.push(`/deck/${this.props.deckId}`);
    } else {
      alert("Please, fill two Front and Back fields...");
      e.preventDefault();
    }
  }
  onDelete() {
    let deletedCard = this.props.card.filter(
      card => this.props.location.pathname.indexOf(card.id) !== -1
    );
    this.props.onDelete(deletedCard[0].id);
    this.props.history.push(`/deck/${this.props.deckId}`);
  }

  render() {
    let editedCard = this.props.card.filter(
      card => this.props.location.pathname.indexOf(card.id) !== -1
    );

    return (
      <div className="cardModel-layout">
        <div className="cardModel" style={{ background: "#eee" }}>
          <h3>Edit Card</h3>
          <label>Card Front:</label>
          <textarea
            ref={textarea => {
              this.textFront = textarea;
            }}
            defaultValue={`${editedCard[0].front}`}
          />
          <label>Card Back:</label>
          <textarea
            ref={textarea => {
              this.textBack = textarea;
            }}
            defaultValue={`${editedCard[0].back}`}
          />
          <p>
            <button
              className="btn btn-sm btn-default"
              onClick={this.onSave.bind(this)}
            >
              Save Changes
            </button>
            <Link
              className="btn btn-sm btn-default"
              to={`/deck/${this.props.deckId}`}
            >
              Cancel
            </Link>
            <button
              className="btn btn-sm btn-default pull-right"
              onClick={this.onDelete.bind(this)}
            >
              Delete Card
            </button>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    deckId: props.match.params.deckId,
    card: state.cardsReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: bindActionCreators(deleteCard, dispatch),
    onUpdate: bindActionCreators(updateCard, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditCardModal)
);
