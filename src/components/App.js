import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import '../styles/App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      districtRepository: null,
      districtsArray: null
    }
  }

  componentDidMount() {
    this.retrieveSchoolData(kinderData)
  }

  retrieveSchoolData = (schoolData) => {
    const districtRepository = new DistrictRepository(schoolData)
    const districtsArray = districtRepository.findAllMatches()
    this.setState({ districtRepository, districtsArray })
  }

  handleSearch = (userInput) => {
    const userSearch = this.state.districtRepository.findAllMatches(userInput)
    this.setState({
      districtsArray: userSearch
    })
  }

  render() {
    return (
      <div>
        <Header search={this.handleSearch}/>
        {this.state.districtRepository && <Main districts={this.state.districtsArray} />}
      </div>
    );
  }
}

export default App;
