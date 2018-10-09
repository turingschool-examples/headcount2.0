import React, { Component } from 'react';
import './App.css';
import './Card.css';
import './CardContainer.css';
import './CardComparison.css';
import './SearchForm.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer';
import SearchFrom from './SearchForm';
import CardComparison from './CardComparison';

// const allSchools = new DistrictRepository(kinderData);

//allschools.stats---> change tp this.state.stats

//this.stats.data===> change to STATS

class App extends Component {
  constructor(){
    super();
    this.state = { 
      repository: {},
      stats: [],
      compareData: [],
      analysis: {}
    };
  }

  componentDidMount = () => {
    this.populateDistrict()
  }

  populateDistrict = () => {
    let repository = new DistrictRepository(kinderData)
    let districtStats = repository.findAllMatches()

    this.setState({
      repository: repository,
      stats: districtStats
    })
  }

  clearComparison = () => {
    this.populateDistrict()

    this.setState({
      compareData: [],
      analysis: {}
    });
  }
  
  compareDistrictData = (selectedCard) => {
    if (selectedCard.selected){
      this.removeCardComparison(selectedCard);
      return;
    }

    const newSelectedCard = {...selectedCard, selected: true};
    
    if (this.state.compareData.length === 2){
      this.state.compareData.pop();
    }

    this.setState({
      compareData: [newSelectedCard, ...this.state.compareData]
    }, () => this.makeAnalysis());
  }

  displayAll = () => {
    // this.setState({ data: allSchools.stats });
    this.populateDistrict()
  }

  filterData = (query) => {
    const filteredData = this.state.repository.findAllMatches(query.search)
    // const filteredData = allSchools.findAllMatches(query.search);
    this.setState({ stats: filteredData });
  }

  makeAnalysis = () => {
    let distrA;
    let distrB;
    let analysis;

    if (this.state.compareData.length === 2){
      distrA = this.state.compareData[0].location;
      distrB = this.state.compareData[1].location;
      // analysis = allSchools.compareDistrictAverages(distrA, distrB);
      analysis = this.state.repository.compareDistrictAverages(distrA, distrB);

      
      this.setState({ analysis: analysis });
    }
  }

  removeCardComparison = (selectedCard) => {
    const updatedCompare = this.state.compareData.filter( district => {
      return district.location !== selectedCard.location;
    }); 

    this.setState({
      compareData: updatedCompare });
  }

  render() {

    return (
      <div>
        <div className="header-container">
          <h1 className="header">COLORADO Headcount 2.0</h1>
          <SearchFrom 
            filterData={this.filterData} 
            displayAll={this.displayAll}
            data={this.state.stats} 
          />
        </div>
        { this.state.compareData.length > 0 &&
          <CardComparison 
            compareData={this.state.compareData} 
            analysis={this.state.analysis} 
            compareDistrictData={this.compareDistrictData} 
            clearComparison={this.clearComparison} />
        }
        <CardContainer 
          data={this.state.stats} 
          compareDistrictData={this.compareDistrictData} />
      </div>
    );
  }
}

export default App;
