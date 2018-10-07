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
			districtsBeingCompared: [],
			districtAverages: {}
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
			this.setState({ districtsBeingCompared: [district, ...districtsInState]},
				() => this.compareAverages())
		}
	}

	compareAverages = () => {
		const districtsBeingCompared = this.state.districtsBeingCompared;			
		let district1;
		let district2;

		if (districtsBeingCompared.length === 2) {
			district1 = districtsBeingCompared[0].location
			district2 = districtsBeingCompared[1].location
			let districtAverages = this.state.data.compareDistrictAverages(district1, district2)
			this.setState({ districtAverages })
		}
	}

	render() {
		const { data, searchTerm, districtsBeingCompared, districtAverages } = this.state;
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
					districtAverages={districtAverages}
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