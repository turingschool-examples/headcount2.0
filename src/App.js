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
		const clickedDistrict = {...district};
		const districtsBeingCompared = 
			[...this.state.districtsBeingCompared, clickedDistrict];
		
		if (this.state.districtsBeingCompared.length === 2) {
			this.state.districtsBeingCompared.shift();
		} else if (this.state.districtsBeingCompared.length <= 2) {
			this.setState({ districtsBeingCompared });
		}
	}

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
