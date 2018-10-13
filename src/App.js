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

    const currentComparison = this.state.compareData
    const newSelectedCard = {...selectedCard, selected: true};
    
    if (currentComparison.length === 2){
      currentComparison.pop();
    }

    this.setState({
      compareData: [newSelectedCard, ...currentComparison]
    }, () => this.makeAnalysis());
  }

  displayAll = () => {
    this.populateDistrict()
  }

  filterData = (query) => {
    const filteredData = this.state.repository.findAllMatches(query.search)
    this.setState({ stats: filteredData });
  }

  makeAnalysis = () => {
    let distrA;
    let distrB;
    let analysis;

    if (this.state.compareData.length === 2){
      distrA = this.state.compareData[0].location;
      distrB = this.state.compareData[1].location;
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
    const { stats, analysis, compareData } = this.state
    return (
      <div>
        <div className="header-container">
          <h1 className="header">COLORADO Headcount 2.0</h1>
          <SearchFrom 
            filterData={this.filterData} 
            displayAll={this.displayAll}
            data={stats} 
          />
        </div>
        { compareData.length > 0 &&
          <CardComparison 
            compareData={compareData} 
            analysis={analysis} 
            compareDistrictData={this.compareDistrictData} 
            clearComparison={this.clearComparison} />
        }
        <CardContainer 
          data={stats} 
          compareDistrictData={this.compareDistrictData} />
      </div>
    );
  }
}

export default App;
