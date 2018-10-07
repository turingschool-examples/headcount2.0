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
			compareDistricts: []
		};
	}

	searchDistrict = (searchTerm) => {
		this.setState({ searchTerm });
	}

	compareDistrict = (district) => {

	}

	render() {
		const { data, searchTerm } = this.state;
		// {console.log(data.findAllMatches(searchTerm))}
		return (
			<div className='App'>
				<div className='header'>
					<h1 className='app-site-title'>Headcount
						<span 
							className='icon-span'>
							<i className="fas fa-graduation-cap"></i>
						</span></h1>
				</div>
				<Search searchDistrict={this.searchDistrict}/>
				<DistrictsContainer 
					districts={data.findAllMatches(searchTerm)}/>
			</div>
		);
	}
}




export default App;
