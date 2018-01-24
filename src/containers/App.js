import React from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Toolbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
