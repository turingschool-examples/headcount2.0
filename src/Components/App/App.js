import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js';
import Search from '../Search/Search.js';
import Compare from '../Compare/Compare.js';
import DistrictRepository from '../../helper.js';
import data from '../../data/kindergartners_in_full_day_program.js';
const repoHelper = new DistrictRepository(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: repoHelper.findAllMatches(),
      compareCards: [],
      compareData: null
    };
  }

  updateRepoInState = (value) => {
    let filteredDistricts = repoHelper.findAllMatches(value);
    this.setState({ repo: filteredDistricts });
  }

  getCompareData = () => {
    if(this.state.compareCards.length === 2) {
      const comparison = repoHelper.compareDistrictAverages(Object.keys(this.state.compareCards[0])[0], Object.keys(this.state.compareCards[1])[0])
      this.setState({compareData: comparison})
    }
  }

  addCompareCard = (title) => {
    if(this.state.compareCards.length < 2) {
      const matchingDistrict = this.state.repo.find(district => {
        return Object.keys(district)[0] === title 
      }) 
      this.setState({compareCards: [...this.state.compareCards, matchingDistrict]}, this.getCompareData)
    }
  }

  render() {
    return (
      <div>
        <h1 className="header">Welcome To Headcount 2.0</h1>
        <Search updateRepoInState={ this.updateRepoInState } />
        <Compare compareCards={this.state.compareCards}
                  compareData={this.state.compareData} />
        <CardContainer repo={ this.state.repo } 
                       addCompareCard={this.addCompareCard}/>
      </div>
    );
  }

}

export default App;
