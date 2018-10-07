import React, { Component } from "react"
import PropTypes from "prop-types"

import Result from "./Result"

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: "hidden",
      selectedResults: []
    }
  }

  giveMeSelected = (selected, boolean) => {
    if (boolean) {
      this.setState({
        selectedResults: [...this.state.selectedResults, selected]
      })
    } else {
      this.setState({
        selectedResults: this.state.selectedResults.filter(
          result => !result.location.includes(selected.location)
        )
      })
    }
  };

  render() {
    if (!this.props.results) return null
    return (
      <section className="results-section l-results">
        {this.props.results.map(entry => {
          return (
            <Result
              entry={entry}
              key={entry.location}
              selectedResults={this.giveMeSelected}
            />
          )
        })}
        <button className={`compare-btn ${this.state.hidden}`}>Compare</button>
      </section>
    )
  }
}

export default ResultsContainer

ResultsContainer.propTypes = {
  results: PropTypes.array
}
