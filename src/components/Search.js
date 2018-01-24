import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchCard } from "../actions/index";

const Search = props => {
  return (
    <div className="pull-right">
      <input
        className="form-control"
        type="search"
        onChange={e => props.onSearch(e.target.value)}
        placeholder="Search card..."
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: bindActionCreators(searchCard, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Search);
