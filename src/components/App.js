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
      districts: null
    }
  }

  componentDidMount() {
    this.retrieveSchoolData(kinderData)
  }

  retrieveSchoolData = (schoolData) => {
    const districtRepository = new DistrictRepository(schoolData)
    this.setState({districts: districtRepository})
  }

  render() {

  return (
      <div>
        <Header />
        {this.state.districts && <Main districts={this.state.districts}/>}
      </div>
    );
  }
}

export default App;
