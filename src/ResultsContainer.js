import React, { Component } from "react"
import PropTypes from "prop-types"

import Result from "./Result"
import ComparedResults from './ComparedResults'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedResults: [],
      compared: true,
      results: null
    }
  }

  componentWillMount () {
    let results = this.props.results.map(entry => entry)
    this.setState({
      results: results
    })
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

  handleCompare = () => {
    this.setState({
      compared: true
    })
  }

  handleSelect = (entry, condition) => {
    if (condition) {
      let filtered = this.state.selectedResults.filter(result => {
        return !result.location.includes(entry.location)
      })
      this.setState({
        selectedResults: filtered
      })
    } else {
      this.setState({
        selectedResults: [...this.state.selectedResults.slice(-1), entry]
      })
    }
  }


  render() {
    if (!this.props.results) return null
    return (
      <section className="results-section l-results">
        {this.props.results.map(entry => {
          return (
            <Result
              entry={entry}
              key={entry.location}
              selectedResults={this.state.selectedResults}
              handleSelect={this.handleSelect}
            />
          )
        })}
        <ComparedResults dataset={this.state.selectedResults} compared={this.state.compared}/>
      </section>
    )
  }
}

export default ResultsContainer

ResultsContainer.propTypes = {
  results: PropTypes.array
}
