import React, { Component } from "react";
import VisibleCards from "../components/VisibleCards";
import AddCardModal from "../components/AddCardModal";
import EditCardModal from "../components/EditCardModal";
import StudyModal from "../components/StudyModal";
import { Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <Route path="/deck/:deckId" component={VisibleCards} />
        <Route path="/deck/:deckId/new" component={AddCardModal} />
        <Route path="/deck/:deckId/edit" component={EditCardModal} />
        <Route path="/deck/:deckId/study" component={StudyModal} />
      </div>
    );
  }
}

export default Main;
