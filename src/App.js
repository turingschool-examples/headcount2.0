import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer'
import DistrictRepository from './helper';
import Header from './Header';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super()

    this.state = {
      districts: [],
    }
  }

  componentDidMount = () => {
    const districts = new DistrictRepository(kinderData)
    const districtData = districts.findAllMatches()

    this.setState({
      districts: districtData
    })
  }

  search = (query) => {
    const districts = new DistrictRepository(kinderData)
    const filteredData = districts.findAllMatches(query)

    this.setState({
      districts: filteredData
    })
  }

  render() {
    return (
      <div>
        <Header search={this.search}/>
        <CardContainer districts={this.state.districts}/>
      </div>
    );
  }
}

export default App;