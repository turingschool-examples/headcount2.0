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
	}

	selectLocation = (district) => {
		const selectedLocation = kinderDistrictData.findByName(district)
			selectedLocation.selected = !selectedLocation.selected
		
			
		if(!this.state.selectedCards.includes(selectedLocation) && this.state.selectedCards.length < 2) {
			const selectedCards = [...this.state.selectedCards, selectedLocation]
			this.setState({selectedCards})
		}
	}

	compareLocations = (findAverage, compareDistrictAverages) => {
		console.log(this.state.selectedCards)
		if(this.state.selectedCards.length === 2) {
			kinderDistrictData.findAverage()
		}
	}

  render() {
    return (
      <div>
      	<h1 className="title">Headcount 2.0</h1>
      	<Search filterLocations = {this.filterLocations} />
      	<CardContainer
      		districtData = {this.state.selectedCards}
      		selectLocation = {this.selectedLocation}
      	/>
      	<CompareContainer 
					compareDistrictAverages = {kinderDistrictData.compareDistrictAverages}
      		findAverage = {kinderDistrictData.findAverage}
      		compareLocations = {this.compareLocations}
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
