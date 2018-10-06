import React, { Component } from "react";

import FilteredResults from "./FilteredResults";

class FilterResults extends Component {
  constructor(props) {
    super(props);
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    this.state = {};
  }
  render() {
    return (
      <nav className="search-nav">
        <ul className="alphabet-query" />
      </nav>
    );
  }
}

export default FilterResults;
