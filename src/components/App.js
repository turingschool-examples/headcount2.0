import React, { Component } from 'react';
import '../App.css';
import DistrictRepository from '../helper';
import Controls from './Controls';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      district: {},
    }
  }

  componentDidMount() {
    this.setState({
      district: district.data,
    })
  }

  handleSubmit(area) {
    const county = district[area.location].data;
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
