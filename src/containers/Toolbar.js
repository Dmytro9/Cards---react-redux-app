import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddBtn from "../components/AddBtn";
import Search from "../components/Search";
import EditBtn from "../components/EditBtn";
import { showAddDeck } from "../actions";
import { Route, withRouter } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <AddBtn showAddDeck={this.props.showAddDeck} />
          <Route path="/deck/:deckId" component={EditBtn} />
          <Route path="/deck/:deckId" component={Search} />
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
    showAddDeck: bindActionCreators(showAddDeck, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Toolbar)
);
