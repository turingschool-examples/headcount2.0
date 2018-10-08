import React, { Component } from 'react';
import Header from '../Header'
import CardContainer from '../CardContainer'
import Comparator from '../Comparator'
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kinder: {},
      comparisons: []
    }
  }

  findAllMatches = (query) => {
    const kinder = new DistrictRepository(kinderData)
    const matchingNames = kinder.findAllMatches(query)
    const allMatches = {}

    matchingNames.forEach(name => {
      const district = kinder.findByName(name)

      allMatches[name] = district
    })

    this.setState({kinder: allMatches})
  }

  componentDidMount() {
    const kinder = new DistrictRepository(kinderData)

    this.setState({
      kinder: kinder.stats
    })
  }

  render() {
    const kinder = this.state.kinder
    const comps = this.state.comparisons

    return (
      <div className="App">
        <Header findAllMatches={this.findAllMatches}/>
        { (comps.length > 0 && comps.length > 3) ? <Comparator /> : null}
        <CardContainer districts={kinder} />
      </div>
    );
  }
}

export default App