import React, { Component } from "react";

import Result from './Result'
import { access } from "fs";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    // const data = new Array(this.props.results.length()).fill(0).reduce((prev, curr) => [...prev, {
    //   x: prev.slice(-1)[0].x + 1,
    //   y: prev.slice(-1)[0].y * (1 + Math.random() * 0.2)
    // }], [{ x: 0, y: 2000 }])
  }


  render() {
    if (!this.props.results) return null
    return (
      <section className="results-section l-results">
        {this.props.results.map(entry => {
          return <Result entry={entry} key={entry.location}/>;
        })}
      </section>
    );
  }
}

export default ResultsContainer;

