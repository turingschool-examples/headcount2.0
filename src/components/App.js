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

  componentWillMount() {
    this.onLoad();
  }

  onLoad() {
    this.setState({
      district: district.data,
    })
    console.log(district.data);
  }

  handleSubmit(area) {
    const county = district.findByName(area);
    this.setState({
      district: {county},
    })
  }

  handleMatches(letters) {
    const matches = district.findAllMatches(letters);
    const found = matches.reduce((acc, key) => {
      acc[key] = district.data[key]
      return acc
    }, {})

    this.setState({
      district: found,
    })
  }

  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <Controls
          handleSubmit={this.handleSubmit.bind(this)}
          handleAutoComplete={this.handleMatches.bind(this)}
        />
        <CardContainer handleData={this.state}/>
      </div>
    );
  }
}

export default App;
