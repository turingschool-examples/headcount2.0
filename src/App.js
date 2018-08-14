import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import './App.css';
import CardContainer from './CardContainer';
import kinderData from './data/kindergartners_in_full_day_program.js';
const districtData = new DistrictRepository(kinderData);


class App extends Component {
	constructor() {
		super()
		this.state = {
			districtData
		}
	console.log(this.state.districtData.stats)
	}
  
  render() {
    return (
      <div>Headcount 2.0
      	<CardContainer districtData={this.state.districtData} />
      </div>
    );
  }
}

export default App;
