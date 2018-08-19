import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import Search from '../Search/Search';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const kinderDistrictData = new DistrictRepository(kinderData);
 
class App extends Component {
	constructor() {
		super()
		// this.kinderDistrictData = new DistrictRepository(kinderData);
		this.state = {
			districtData: [],
			selectedCards: []
		}
	}

	componentDidMount = () => {
		this.filterLocations();
	}

	filterLocations = (input) => {
		let filteredDistricts = kinderDistrictData.findAllMatches(input);
		this.setState({districtData: filteredDistricts})
		// console.log(kinderDistrictData.findAverage)
	}

	selectLocation = (district) => {
		const selectedLocation = kinderDistrictData.findByName(district)
		this.setState({selectedCards: selectedLocation})
		console.log(this.state.selectedCards)
	}

	compareLocations = (findAverage, compareDistrictAverages) => {

	}

  
  render() {
    return (
      <div>
      	<h1 className="title">Headcount 2.0</h1>
      	<Search filterLocations = {this.filterLocations} />
      	<CompareContainer 
      	
      		compareDistrictAverages = {kinderDistrictData.compareDistrictAverages}
      		findAverage = {kinderDistrictData.findAverage}
      		selectedCards = {this.state.selectedCards}
      	/>	 
      	<CardContainer 
      		districtData = {this.state.districtData} 
      		selectLocation = {this.selectLocation}
      	/>
      </div>
    );
  }
}

export default App;
