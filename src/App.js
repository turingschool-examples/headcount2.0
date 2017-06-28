import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Container from './Container';
import CompareContainer from './CompareContainer';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtRepository: {},
      filteredData: [],
      activeCards: {},
    };
  }

  componentWillMount() {
    const initialState = new DistrictRepository(kinderData);
    const filteredData = initialState.findAllMatches()
    this.setState({
      districtRepository: initialState,
      filteredData,
    });
  }

  filterSearch(searchInput) {
    const filteredData = this.state.districtRepository.findAllMatches(searchInput);
    this.setState({filteredData});
  }

  clickActive(location) {
    const { districtRepository: { data }, activeCards } = this.state;
    let newStateObj = Object.assign({}, { [location]: data[location] }, activeCards);

    if (activeCards[location] || Object.keys(activeCards).length >= 2) {
      delete newStateObj[location];
    }
    console.log('clickactive');
    this.setState({activeCards: newStateObj}, this.compareAverage);
  }

  compareAverage() {
    const { districtRepository, activeCards } = this.state;
    let obj = {
      location1: '',
      location2: '',
      city1Avg: '',
      city2Avg: '',
      comparedAverages: '',
    }

    if(Object.keys(activeCards).length === 2) {
      const cities = Object.keys(activeCards);
      const averageResults = districtRepository.compareDistrictAverages(cities[0], cities[1]);
      console.log(averageResults);
      const city1Avg = averageResults[cities[0]];
      const city2Avg = averageResults[cities[1]];
      const comparedAverages = city1Avg / city2Avg;
      Object.assign(obj, {
        location1: cities[0],
        location2: cities[1],
        city1Avg,
        city2Avg,
        comparedAverages,
      });
    }
    return obj;
  }


  render() {
    const { districtRepository: { data }, filteredData, activeCards } = this.state;
    const displayData = filteredData.map(e => data[e]);

    return (
      <div>
        <Search filterSearch={this.filterSearch.bind(this)}/>
        <Container data={activeCards}
                   clickActive={this.clickActive.bind(this)}
                   compareAverage={this.compareAverage.bind(this)}
                   className='compare-container'/>
        <Container data={displayData}
                   clickActive={this.clickActive.bind(this)}
                   className='card-container'/>
      </div>
    )
  }
}

export default App;
