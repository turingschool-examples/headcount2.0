import React, { Component } from 'react';
import './App.css';
import CompareCard from './CompareCard/CompareCard';
import DistrictsContainer from './DistrictsContainer/DistrictsContainer';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Search from './Search/Search.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: new DistrictRepository(kinderData),
			searchTerm: '',
			districtsBeingCompared: []
		};
	}

	searchDistrict = (searchTerm) => {
		this.setState({ searchTerm });
	}

	compareDistrict = (district) => {
		console.log(district)
		const districtsInState = this.state.districtsBeingCompared;	

		const compareArr = districtsInState.map(district => district.location)
		if (compareArr.includes(district.location)) {
			const districtsBeingCompared = districtsInState.filter(comparedDistrict => {
			return !comparedDistrict.location.includes(district.location)
		})
			console.log(districtsBeingCompared)
			this.setState({districtsBeingCompared})
		} else if (districtsInState.length <= 1) {
			this.setState({ districtsBeingCompared: [district, ...districtsInState]})
		}

		// if (districtsInState.length > 1) {
		// 	districtsInState.shift();
		// 	this.setState({ districtsBeingCompared: districtsInState });			
		// } else if (districtsInState.length <= 2) {
		// // console.log('compareDistrict set up for ' + district)
		// 	this.setState({ districtsBeingCompared: districtsInState });
		// }

		// const clickedDistrict = {...district};
		// const districtsBeingCompared = 
		// 	[...districtsInState, clickedDistrict];
			// console.log(clickedDistrict.selected)

		// if (districtsBeingCompared.includes(clickedDistrict)) {
		// 	this.stopComparingDistrict(clickedDistrict)
		// 	return
		// }	


	}

	// stopComparingDistrict = (comparedDistrict) => {
	// 	console.log('stopComparingDistrict set up for ' + comparedDistrict.location)
	// 	const districtsInState = this.state.districtsBeingCompared;
	// 	if (2 >= districtsInState.length >= 1) {
	// 		const districtsBeingCompared = districtsInState.filter((district) => {
	// 			return district.location !== comparedDistrict.location
	// 		})
	// 		this.setState({ districtsBeingCompared })
	// 		// console.log(districtsBeingCompared)
	// 	}
	// }

	// handleComparison = (district) => {
	// 	// console.log(district)
	// 	this.compareDistrict(district);
	// 	this.stopComparingDistrict(district)
	// }

	render() {
		const { data, searchTerm, districtsBeingCompared } = this.state;
		// {console.log(districtsBeingCompared)}
		return (
			<div className='App'>
				<div className='header'>
					<h1 className='app-site-title'>Headcount
						<span 
							className='icon-span'>
							<i className="fas fa-graduation-cap"></i>
						</span></h1>
				</div>
				<CompareCard 
					districtsBeingCompared={districtsBeingCompared}
				/>
				<Search searchDistrict={this.searchDistrict}/>
				<DistrictsContainer 
					districts={data.findAllMatches(searchTerm)}
					compareDistrict={this.compareDistrict}					
				/>
			</div>
		);
	}
}

export default App;