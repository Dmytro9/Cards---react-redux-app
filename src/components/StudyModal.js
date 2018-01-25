import React from "react";
import { connect } from "react-redux";
import { updateCard, setShowBack } from "../actions";
import { Link } from "react-router-dom";

const MS_IN_DAY = 86400000;

const StudyModal = props => {
  let card = props.card.filter(card => {
    return (
      card.deckId === props.deckId &&
      (!card.lastStudiedOn ||
        (new Date() - card.lastStudiedOn) / MS_IN_DAY >= card.score)
    );
  })[0];

  let body = (
    <div className="no-cards">
      <p>
        You have no cards to study in this deck right now. <br /> Good job!
      </p>
    </div>
  );

  if (card) {
    body = (
      <div className="cardModel-layout">
        <div className="cardModel">
          <div className={props.showBack ? "front hide" : "front"}>
            <div>
              <Link className="close" to={`/deck/${props.deckId}`}>
                &times;
              </Link>
              <p>{card.front}</p>
            </div>
            <button
              className="btn btn-default pull-right flip"
              onClick={props.onFlip}
            >
              Flip
            </button>
          </div>

          <div className={props.showBack ? "back" : "back hide"}>
            <div>
              <Link className="close" to={`/deck/${props.deckId}`}>
                &times;
              </Link>
              <p className="asc">{card.back}</p>
            </div>
            <p>How did you do?</p>
            <p className="back-btn">
              <button
                className="btn btn-default"
                onClick={e =>
                  props.onStudied(card.id, Math.max(card.score - 1, 1))
                }
              >
                Poorly
              </button>
              <button
                className="btn btn-default"
                onClick={e => props.onStudied(card.id, card.score)}
              >
                Okay
              </button>
              <button
                className="btn btn-default"
                onClick={e =>
                  props.onStudied(card.id, Math.min(card.score + 1, 3))
                }
              >
                Great
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cardModel-layout">
      <div className="cardModel">
        <Link className="close" to={`/deck/${props.deckId}`}>
          &times;
        </Link>
        {body}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    card: state.cardsReducer,
    deckId: props.match.params.deckId,
    showBack: state.showBackReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStudied: (cardId, score) => {
      let now = new Date();
      now.setHours(0, 0, 0, 0);
      dispatch(updateCard({ id: cardId, score, lastStudiedOn: +now }));
      dispatch(setShowBack());
    },
    onFlip: () => dispatch(setShowBack(true))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudyModal);
