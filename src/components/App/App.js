import React, { Component } from 'react';
import Control from '../Control/Control';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolData: {},
    }
  }

  componentDidMount() {
    let district = this.getCleanData(kinderData);
    this.setState({
      schoolData: district,
    })
  }

  getCleanData(schoolData) {
    return new DistrictRepository(schoolData).data
  }

  render() {
    return (
      <div>
        <Control />
        <CardContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

export default App;


//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts