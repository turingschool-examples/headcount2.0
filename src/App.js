import React, { Component } from "react"

import "./styles/App.css"
import kinderData from "./data/kindergartners_in_full_day_program.js"
import DistrictRepository from "./helper.js"
import Landing from "./Landing"
import ResultsContainer from "./ResultsContainer"
import SearchArea from "./SearchArea"

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      query: "",
      resultsAlphabet: [],
      selectedResults: []
    }
  }

  componentDidMount() {
    this.setState({
      data: district.findAllMatches()
    })
  }

  query = query => {
    this.setState({
      query: query,
      results: district.findAllMatches(query),
      selectedResults: null
    })
  };

  alphabetQuery = letter => {
    this.setState({
      letter: letter,
      resultsAlphabet: district.findAllMatches(letter)
    })
  };

  findMultipleMatches = data => {
    this.setState({
      selectedResults: district.findMultipleMatches(data),
      results: null
    })
  };

  render() {
    return (
      <div className="body">
        <Landing query={this.query} />
        <main className="l-main">
          <SearchArea
            alphabetQuery={this.alphabetQuery}
            results={this.state.resultsAlphabet}
            multipleMatches={this.findMultipleMatches}
          />
          <ResultsContainer results={this.state.results || this.state.selectedResults} />
        </main>
      </div>
    )
  }
}

export default App

//Match algorithm to render
// {district.findAllMatches().map (entry => {
//   let x = Object.keys(entry.stats)
//   return x.map (stat => {
//     return <p> {entry.stats[stat]}</p>
//   })
// })}
