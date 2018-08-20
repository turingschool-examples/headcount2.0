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
			selectedCards: [],
			matchedCards: {}
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
			// selectedLocation.selected = !selectedLocation.selected
		
		if(!this.state.selectedCards.includes(selectedLocation) && this.state.selectedCards.length < 2) {
			const selectedCards = [...this.state.selectedCards, selectedLocation]
			this.setState({selectedCards}, () => this.compareLocations(this.state.selectedCards))
			// this.compareLocations();
		}
	}

	compareLocations = (cards) => {
		if(this.state.selectedCards.length > 1) {

			const district1 = cards[0].location
			const district2 = cards[1].location
			const matchedCards = kinderDistrictData.compareDistrictAverages(district1, district2)
			this.setState({matchedCards})
			console.log(Object.keys(matchedCards))
		}	
			
		
	}

  render() {
    return (
      <div>
      	<h1 className="title">Headcount 2.0</h1>
      	<Search filterLocations = {this.filterLocations} />
      	<CompareContainer 
					matchedCards = {this.state.matchedCards}
				/>	 
      	<CardContainer
      		districtData = {this.state.selectedCards}
      		selectLocation = {this.selectLocation}
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
