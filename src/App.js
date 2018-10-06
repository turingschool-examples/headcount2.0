import React, { Component } from 'react';
import './App.css';
import DistrictsContainer from './DistrictsContainer/DistrictsContainer.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Search from './Search/Search.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: {}
		}
	}

	searchDistrict(string) {
		const district = new DistrictRepository(kinderData)
		district.findAllMatches(string)	
	}

	componentDidMount() {
		const district = new DistrictRepository(kinderData)
		const allDistricts = district.stats
		this.setState({ data: allDistricts })
	}


  render() {
    return (
      <div className='App'>
      	<h1 className='app-header'>Headcount 2.7</h1>
      	<Search searchDistrict={this.searchDistrict}/>
      	<DistrictsContainer districts={this.state.data}/>
      </div>
    );
  }
}




export default App;
