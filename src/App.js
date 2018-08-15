import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import './App.css';
import CardContainer from './CardContainer';
import Search from './Search';
import kinderData from './data/kindergartners_in_full_day_program.js';


class App extends Component {
	constructor() {
		super()
		this.kinderDistrictData = new DistrictRepository(kinderData);
		this.state = {
			districtData: this.kinderDistrictData.stats
		}
	console.log(this.state.districtData.stats)
	}

	componentDidMount() {
		this.filterLocations();
	}

	filterLocations = (location) => {
		let filteredDistricts = this.kinderDistrictData.findAllMatches(location);
		this.setState({districtData: filteredDistricts})
	}
  
  render() {
    return (
      <div>
      	<h1 className="title">Headcount 2.0</h1>
      	<Search />
      	<CardContainer districtData={this.state.districtData} />
      </div>
    );
  }
}

export default App;
