import React, { Component } from "react"
import PropTypes from "prop-types"

import Result from "./Result"
import ComparedResults from './ComparedResults'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: "hidden",
      selectedResults: [],
      compared: true
    }
  }

  giveMeSelected = (selected, boolean) => {
    let className = ''
    if (this.state.selectedResults.length === 1) className = 'hidden'
    if (boolean) {
      this.setState({
        selectedResults: [...this.state.selectedResults, selected],
        hidden: ""
      })
    } else {
      this.setState({
        selectedResults: this.state.selectedResults.filter(
          result => !result.location.includes(selected.location)
        ),
        hidden: className
      })
    }
  };

  checkBtn = () => {
    if (this.state.selectedResults.length === 0){
      this.setState({ hidden: "hidden" })
    }
  };

  handleCompare = () => {
    this.setState({
      compared: true
    })
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
              selectedResults={this.giveMeSelected}
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
