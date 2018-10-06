import React, { Component } from 'react';
import './App.css';
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
			// compareDistricts: [],
		}
	}

	searchDistrict = (searchTerm) => {
		// console.log(this.state.data.stats)
		// const district = new DistrictRepository(kinderData)
		// const searchTerm = district.findAllMatches(string)	
		this.setState({ searchTerm })
	}


	// componentDidMount() {
	// 	const district = new DistrictRepository(kinderData)
	// 	const allDistricts = district.stats
	// 	this.setState({ data: allDistricts })
	// }

// compare component stateless
// method compare districts on app, send method to cards, send back
// logic in method that compares two cards once they're entered
// logic that can only take 2
// If there's 2, don't accept anymore, then run method to give object with comparison of 2
// Assign it to another state

  render() {
  	const { data, searchTerm } = this.state
  	// {console.log(data.findAllMatches(searchTerm))}
    return (
      <div className='App'>
      	<div className='header'>

      		<h1 className='app-site-title'>Headcount
      			<span className='icon-span'><i className="fas fa-graduation-cap"></i>
      			</span></h1>
      	</div>
      	<Search searchDistrict={this.searchDistrict}/>
      	<DistrictsContainer districts={data.findAllMatches(searchTerm)}/>
      </div>
    );
  }
}




export default App;
