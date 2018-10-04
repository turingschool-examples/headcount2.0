import React, { Component } from 'react';
import './App.css';
import DistrictsContainer from './DistrictsContainer/DistrictsContainer.js';
import DistrictRepository from './helper.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			districts: []
		}
	}


	


  render() {
    return (
      <div>Welcome To Headcount 2.7
      	<DistrictsContainer districts={this.state.districts}/>
      </div>
    );
  }
}

export default App;
