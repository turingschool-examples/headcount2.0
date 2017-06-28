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
      activeCards: [],
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
    const newStateArr = [...activeCards, data[location]];
    this.setState({activeCards: newStateArr});
  }

  compareAverage(arr) {
    const { districtRepository } = this.state;
    let location1 = '';
    let location2 = ''
    let comparedAverages = '';
    let city1Avg = '';
    let city2Avg = '';
    let averageResults = '';
    
    if (arr.length === 2) {
      averageResults = districtRepository.compareDistrictAverages(arr[0].location, arr[1].location);
    }

    return {
      location1,
      location2,
      city1Avg,
      city2Avg,
      comparedAverages,
    }

    // let obj = {
    //   location1: '',
    //   location2: '',
    //   city1Avg: '',
    //   city2Avg: '',
    //   comparedAverages: '',
    // }
    //
    // if (Object.keys(activeCards).length === 2) {
    //   const cities = Object.keys(activeCards);
    //   console.log(averageResults);
    //   const city1Avg = averageResults[cities[0]];
    //   const city2Avg = averageResults[cities[1]];
    //   const comparedAverages = city1Avg / city2Avg;
    //   Object.assign(obj, {

    //   });
    // }
    // return obj;
  }


  render() {
    const { districtRepository: { data }, filteredData, activeCards } = this.state;
    const displayData = filteredData.map(e => data[e]);

    return (
      <div>
        <Search filterSearch={this.filterSearch.bind(this)}/>
        <CompareContainer data={activeCards}
          clickActive={this.clickActive.bind(this)}
          compareAverage={this.compareAverage.bind(this)}/>
        <Container data={displayData}
                   clickActive={this.clickActive.bind(this)}
                   className='card-container'/>
      </div>
    )
  }
}

export default App;
