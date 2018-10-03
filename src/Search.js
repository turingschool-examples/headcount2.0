import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
        <input className="search-field" placeholder="search" />
        <button className="submit-button">submit</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
