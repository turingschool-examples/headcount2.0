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
		console.log(this.state.districtData)
	}

	selectLocation = (district) => {
		const selectedLocation = kinderDistrictData.findByName(district)
			selectedLocation.selected = !selectedLocation.selected
		
			
		if(!this.state.selectedCards.includes(selectedLocation) && this.state.selectedCards.length < 2) {
			const selectedCards = [...this.state.selectedCards, selectedLocation]
			this.setState({selectedCards})
		}

		if(this.state.selectedCards.length === 2) {

		}
		console.log(selectedLocation)
		
	}

	compareLocations = (findAverage, compareDistrictAverages) => {
		// const cardsToComapre = (this.state.selectedCards).
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
