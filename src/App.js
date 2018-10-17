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
      analysis: {},
      selected: false,
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
      analysis: {},
      selected: false
    });
  }
  
  checkComparison = (selectedCard) => {
    this.setState({ selected: false })

    if (selectedCard.selected){
      this.removeCardComparison(selectedCard);
      return;
    } else if (this.state.compareData.find( district => district.location === selectedCard.location)) {
      this.setState({ selected: true })
      return 
    } else {
      this.compareDistrictData(selectedCard)
    }
  }

  compareDistrictData = (selectedCard) => {

    const currentComparison = this.state.compareData;
    const newSelectedCard = {...selectedCard, selected: true};
    let analysis = {}
    
    if (currentComparison.length === 2){
      currentComparison.pop();
    }
    
    const updatedCompareData = [newSelectedCard, ...currentComparison]
    
    if (currentComparison.length === 1){
      analysis = this.makeAnalysis(updatedCompareData)
    }

    this.setState({
      compareData: updatedCompareData,
      analysis: analysis
    })
  }

  makeAnalysis = (compareData) => {
    console.log('in')
    let distrA;
    let distrB;
    let analysis;
    const { repository } = this.state

    if (compareData.length === 2){
      distrA = compareData[0].location;
      distrB = compareData[1].location;
      analysis = repository.compareDistrictAverages(distrA, distrB);
    }
    return analysis
  }

  displayAll = () => {
    this.setState({ selected: false })
    this.populateDistrict()
  }

  filterData = (query) => {
    const filteredData = this.state.repository.findAllMatches(query.search)
    this.setState({ stats: filteredData });
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
      <div className='main'>
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
            checkComparison={this.checkComparison} 
            clearComparison={this.clearComparison} />
        }

        { this.state.selected && 
          <h3 className="error-message">Card already selected</h3>
        }

        <CardContainer 
          compareData={compareData} 
          data={stats} 
          checkComparison={this.checkComparison} />
      </div>
    );
  }
}

export default App;
