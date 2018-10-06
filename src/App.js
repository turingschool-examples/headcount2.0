import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import KinderData from './data/kindergartners_in_full_day_program.js';
import DistrictSearch from './DistrictSearch.js';
import CompareContainer from './CompareContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      display: [],
    }

  }

  componentDidMount = () => {
    const district = new DistrictRepository(KinderData);
    const districtData = district.findAllMatches()
    this.setState((state) => {
      return {data: districtData};
    });
  }

  handleSearch = (searchString) => {
    const district = new DistrictRepository(KinderData);
    const districtSearch = district.findAllMatches(searchString);
    // let spread = {...districtSearch}

    this.setState((state) => {
      return {data: districtSearch}
    })
  }

  handleCompare = (card) => {
    

    if(this.state.data[card]) {
      this.state.display.push(this.state.data[card]);
    }
    else{
      let schoolToCompare = this.state.data.find(school => {
      return school.location === card
      })
    this.state.display.push(schoolToCompare);
    }
    if(this.state.display.length > 2){
      this.state.display.shift()
    }
    this.setState((state) => {
      return {display : this.state.display }
    })

  }

  render() {
    const { data, display } = this.state
    return (
      <div className="app">
        <DistrictSearch handleSubmit={this.handleSearch} />
        <CompareContainer display={ display }/>
        <CardContainer data={ data } handleCompare={this.handleCompare} />
      </div>
    );
  }
}

export default App;
