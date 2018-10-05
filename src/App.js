import React, { Component } from 'react';
import './App.css';
import DistrictsContainer from './DistrictsContainer/DistrictsContainer.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';


class App extends Component {
	constructor() {
		super();
		this.state = {
			data: {}
		}

	}

	componentDidMount() {
		const district = new DistrictRepository(kinderData)
		const allDistricts = district.stats
		this.setState({ data: allDistricts })
	}


  render() {
    return (
      <div>Headcount 2.7
      	<DistrictsContainer districts={this.state.data}/>
      </div>
    );
  }
}




export default App;
