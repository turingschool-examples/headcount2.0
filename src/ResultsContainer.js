import React, { Component } from "react"
import PropTypes from 'prop-types' 

import Result from './Result'

class ResultsContainer extends Component {



  render() {
    if (!this.props.results) return null
    return (
      <section className="results-section l-results">
        {this.props.results.map(entry => {
          return <Result entry={entry} key={entry.location}/>
        })}
      </section>
    )
  }
}

export default ResultsContainer

ResultsContainer.propTypes = {
  results: PropTypes.array
}