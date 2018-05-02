import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './../helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictsContainer from './../DistrictsContainer/DistrictsContainer';
import Search from './../Search/Search';

const allDistricts = new DistrictRepository(kinderData)
class App extends Component {
  constructor() {
    super();

    this.state = {
      districts: ''
    }
  }

  componentDidMount() {
    const districts = allDistricts.stats;
    this.setState({ districts });
  }

  handleSearchEvent = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const districts = allDistricts.findAllMatches(value);
    this.setState({districts});
  }

  render() {
    return (
      <div className='app'>
        <Search 
          handleSearchEvent={this.handleSearchEvent}
        />
        {
          this.state.districts &&
          <DistrictsContainer 
            districts={this.state.districts} 
          />
        }
      </div>
    );
  }
}

export default App;
