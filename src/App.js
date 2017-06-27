import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Container from './Container';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtRepository: {},
      filteredData: [],
      activeCards: {}
    };
  }

  componentWillMount() {
    const initialState = new DistrictRepository(kinderData);
    const filteredData = initialState.findAllMatches()
    this.setState({
      districtRepository: initialState,
      filteredData
    });
  }

  filterSearch(searchInput) {
    const filteredData = this.state.districtRepository.findAllMatches(searchInput);
    this.setState({filteredData})
  }

  clickActive(location) {
    const { districtRepository: { data }, activeCards } = this.state
    const newStateObj = Object.assign({}, { [location]: data[location] }, activeCards)
    console.log(data)
    console.log(newStateObj);
    this.setState({activeCards: newStateObj})
  }


  render() {
    const { districtRepository: { data }, filteredData, activeCards } = this.state;
    const displayData = filteredData.map(e => data[e]);

    return (
      <div>
        <Search filterSearch={this.filterSearch.bind(this)}/>
        <Container data={activeCards}
                   clickActive={this.clickActive.bind(this)} />
        <Container data={displayData}
                   clickActive={this.clickActive.bind(this)} />
      </div>
    )
  }
}

export default App;
