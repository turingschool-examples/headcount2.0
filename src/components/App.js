import React, { Component } from 'react'; 

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper.js'

import CardContainer from './CardContainer'
import InputField from './InputField'
import Comparison from './Comparison'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: undefined,
      filter: undefined,
      selection: []
    }
  }

  componentDidMount() {
    this.setState({
      data: new DistrictRepository(kinderData)
    })
  }

  processFilter = (string) => {
    const filter = this.state.data.findAllMatches(string)
    const reducedFilter = filter.reduce((accu, location) => {
      accu[location.location] = location
      return accu;
    }, {});

    this.setState({
      filter: reducedFilter
    })
  }

  processSelection = (district) => {
    if (!this.state.selection.includes(district)) {
      this.setState({
        selection: [...this.state.selection, district]
      })
    } else {
      this.setState({
        selection: []
      })
    }

  }

  clearSelections = () => {
    this.setState({
      selection: [],
      filter: undefined
    })
  }

  render() {
    if (this.state.data && this.state.selection.length < 2) {
      return (
        <main className="app">
          <header>
            <img className='logo' src="./brain-and-head.svg" alt="logo" />
            <h1>Colorado Headcount</h1>
            <InputField 
              processFilter={this.processFilter}
              inputClass='text-input'
            />
          </header>
            <CardContainer 
              data={this.state.filter || this.state.data.stats} 
              processSelection={this.processSelection}
            />
        </main>
      );
    } else if (this.state.selection.length === 2) {
      return (
        <main className="app">
          <header>
            <img className='logo' src="./brain-and-head.svg" alt="logo" />
            <h1>Colorado Headcount</h1>
          </header>
          <Comparison
            compareDistrictAverages={this.state.data.compareDistrictAverages}
            selection={this.state.selection} 
            clearSelections={this.clearSelections}
          />
        </main>
      )
    } else {
      return (
        <main className="app">
          nuthin
        </main>
      )
    }
  }
}



export default App;
