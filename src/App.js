import React, { Component } from 'react';
import './App.css';
import './Card.css';
import './CardContainer.css';
import './CardComparison.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer';
import SearchFrom from './SearchForm';
import CardComparison from './CardComparison';

const allSchools = new DistrictRepository(kinderData);

class App extends Component {
  constructor(){
    super();
    this.state = { 
      data: allSchools.stats,
      compareData: [],
      analysis: []
    };
    // console.log(this.state)
  }
  
  compareDistrictData = (selectedCard) => {
    if (selectedCard.selected){
      this.removeCardComparison(selectedCard)
      return
    }

    //add selected property to cardData
    const newSelectedCard = {...selectedCard, selected: true}
    
    if(this.state.compareData.length === 2){
      this.state.compareData.pop()
    }

    this.setState({
      compareData: [newSelectedCard, ...this.state.compareData]
    }, () => this.makeAnalysis())
  }

  makeAnalysis = () => {
    let distrA;
    let distrB;
    let analysis;

    if(this.state.compareData.length === 2){
      distrA = this.state.compareData[0].location
      distrB = this.state.compareData[1].location
      analysis = allSchools.compareDistrictAverages(distrA, distrB)
      
      this.setState({ analysis: analysis })
    }
  }

  removeCardComparison = (selectedCard) => {
    const updatedCompare = this.state.compareData.filter( district => {
      return district.location !== selectedCard.location
    }) 

    this.setState({
      compareData: updatedCompare })
  }
  // componentDidMount = () => {
  //   const allSchools = new DistrictRepository(kinderData)
  //   this.setState({
  //     data: allSchools.stats
  //   })

  // }
  filterData = (query) => {
    const filteredData = allSchools.findAllMatches(query.search);
    this.setState({ data: filteredData });
  }

  displayAll = () => {
    this.setState({ data: allSchools.stats });
  }
  
  render() {

    return (
      <div>
        <h1 className="header">Headcount 2.0</h1>
        <SearchFrom 
          filterData={this.filterData} 
          displayAll={this.displayAll}
          data={this.state.data} 
        />
        <CardComparison compareData={this.state.compareData} analysis={this.state.analysis} compareDistrictData={this.compareDistrictData} />
        <CardContainer data={this.state.data} compareDistrictData={this.compareDistrictData} />
      </div>
    );
  }
}

export default App;
