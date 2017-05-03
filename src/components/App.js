import React, { Component } from 'react';
import '../App.css';
import Controls from './Controls';
import CardContainer from './CardContainer';
import DistrictRepository from '../helper';
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
    this.setState({
      district: county,
    })
  }

  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <Controls handleSubmit={this.handleSubmit.bind(this)}/>
        <CardContainer handleData={this.state}/>
      </div>
    );
  }
}

export default App;
