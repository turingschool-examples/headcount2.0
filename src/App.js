import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import Search from './Search'
import Districts from './Districts'
import './styles/App.css';

const schoolData = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()

    this.state = {
      searchArray: []
    }
  }

  searchedDistrict = (search) => {
    this.setState({
      searchArray: search
    })
  }

  componentDidMount() {
    const schoolArray = schoolData.findAllMatches()
    this.setState({ searchArray: schoolArray })
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search schoolData={schoolData} searchedDistrict={this.searchedDistrict} />
        <Districts schoolData={schoolData} searchArray={this.state.searchArray} />
      </div>
    );
  }
}

export default App;
