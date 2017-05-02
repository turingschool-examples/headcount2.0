import React, { Component } from 'react';
import '../App.css';
import DistrictRepository from '../helper';
// import CardContainer from './CardContainer';
import Controls from './Controls';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kinderData).data;

class App extends Component {
  constructor() {
    super()
    this.state = {
      district: {},
    }
  }

  handleSubmit(area) {
    const county = district[area.location].data;
    console.log(county);
    // this.setState({districts: county})
    // console.log(this.state.districts)
  }

  render() {
    return (
      <div>
        <Controls handleSubmit={this.handleSubmit.bind(this)}/>
        Welcome To Headcount 2.0
      </div>
    );
  }
}

export default App;
