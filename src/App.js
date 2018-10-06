import React, { Component } from 'react';
import './App.css';
import './Card.css';
import './CardContainer.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer';
import SearchFrom from './SearchForm';

const allSchools = new DistrictRepository(kinderData);

class App extends Component {
  constructor(){
    super();
    this.state = { data: allSchools.stats };
    // console.log(this.state)
  }
  

  // componentDidMount = () => {
  //   const allSchools = new DistrictRepository(kinderData)
  //   this.setState({
  //     data: allSchools.stats
  //   })

  // }
  filterData = (query) => {
    const filteredData = allSchools.findAllMatches(query.search)
    this.setState({ data: filteredData })
  }

  displayAll = () => {
    this.setState({ data: allSchools.stats })
  }
  
  render() {
    const {data} = this.state;
    return (
      <div>
        <h1 className="header">Headcount 2.0</h1>
        <SearchFrom 
          filterData={this.filterData} 
          displayAll={this.displayAll} 
          />
        <CardContainer data={data} />
      </div>
    );
  }
}

export default App;
