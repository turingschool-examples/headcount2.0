import React, { Component } from 'react';
import Header from '../Header'
import CardContainer from '../CardContainer'
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kinder: {}
    }
  }

  findAllMatches = (query) => {
    const kinder = new DistrictRepository(kinderData)
    const matchingNames = kinder.findAllMatches(query)
    console.log(`query: ${query}, matchingName: ${matchingNames}`)
    matchingNames.forEach(name => {
      const district = kinder.findByName(name)
      this.setState({kinder: district})
    })

  }

  componentDidMount() {
    const kinder = new DistrictRepository(kinderData)

    this.setState({
      kinder: kinder.stats
    })
  }

  render() {
    const kinder = this.state.kinder

    return (
      <div className="App">
        <Header findAllMatches={this.findAllMatches}/>
        <CardContainer districts={kinder} />
      </div>
    );
  }
}

export default App