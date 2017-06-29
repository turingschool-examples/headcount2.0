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

// TODO: Refactor compareAverage
  compareAverage(arr) {
    const { districtRepository } = this.state;
    let location1 = '';
    let location2 = ''
    let comparedAverages = '';
    let city1Avg = '';
    let city2Avg = '';

    if (arr.length === 2) {
      const averageResults = districtRepository.compareDistrictAverages(arr[0].location, arr[1].location);
      city1Avg = averageResults[arr[0].location.toUpperCase()];
      city2Avg = averageResults[arr[1].location.toUpperCase()];
      comparedAverages = averageResults.compared;
      location1 = arr[0].location;
      location2 = arr[1].location;
    } else if (arr.length === 1) {
      city1Avg = districtRepository.findAverage(arr[0].location);
      location1 = arr[0].location;
    }
    return {
      location1,
      location2,
      city1Avg,
      city2Avg,
      comparedAverages,
    }
  }

  render() {
    const { districtRepository: { data }, filteredData, activeCards } = this.state;
    const displayData = filteredData.map(e => data[e]);

    return (
        <section>
          <aside className='side-nav'>
            <Search filterSearch={this.filterSearch.bind(this)}/>
            <Container
              className='card-container'
              data={displayData}
              clickActive={this.clickActive.bind(this)}/>
          </aside>
          <main>
            <h1 className='title'>Headcount 2.0</h1>
            <CompareContainer
              data={activeCards}
              clickActive={this.clickActive.bind(this)}
              compareAverage={this.compareAverage.bind(this)}/>
          </main>
        </section>
    )
  }
}

export default App;
