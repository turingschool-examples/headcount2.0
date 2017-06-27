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
      filteredData: []
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


  render() {
    const { districtRepository: {data}, filteredData } = this.state;
    const displayData = filteredData.map(e => data[e]);

    return (
      <div>
        <Search filterSearch={this.filterSearch.bind(this)}/>
        <Container data={displayData}/>
      </div>
    )
  }
}

export default App;
