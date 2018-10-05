import React, { Component } from "react";

import Result from './Result'

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.results) return null
    return (
      <section className="results-section">
        {this.props.results.map(entry => {
          return <Result entry={entry} key={entry.location}/>;
        })}
      </section>
    );
  }
}

export default ResultsContainer;

