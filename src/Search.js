import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <input className="search-field" placeholder="search" />
      </div>
    );
  }
}

export default Search;
