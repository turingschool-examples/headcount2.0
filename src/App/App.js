import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js';
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js'
import Compare from '../Compare/Compare.js';
import Search from '../Search/Search.js';

const data = new DistrictRepository(kinderData);

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        districtsData: [],
        comparedCards: []
    }
  }

  searchFilter = ( userInput ) => {
    const sanitizedUserInput = userInput.toUpperCase();
  
    const filteredDistricts = Object.keys(data.stats)
      .map( districtKey => data.stats[districtKey])
      .filter( district => district.location.includes( sanitizedUserInput ))

      if(filteredDistricts.length >= 1) {
        const newCompared = this.state.comparedCards
        .map( district =>  district.district);          
        this.setState({ districtsData: [...newCompared, ...filteredDistricts]})
      }
  }

  updateCompareState = ( clickedState, comparedCard ) => {
      if(!clickedState) {
        if(this.state.comparedCards.length <2) {
          this.addComparedCard(comparedCard);
        } 

    } else {
        this.removeComparedCard(comparedCard);
      }
  }

  addComparedCard(cardInfo) {
    this.setState({comparedCards: [ ...this.state.comparedCards, cardInfo] })
  }
  
  removeComparedCard(cardInfo) {
    const comparedCards = this.state.comparedCards
    .filter(card => card.district.location !== cardInfo.district.location);
    this.setState({ comparedCards });
  }

  componentDidMount() {
    this.setState({
      districtsData: data.stats
    })
  }

  render() {
    if(this.state.districtsData.length === 0) {
      return(
        <p>Please Wait</p>
      )
    }
    return (
      <div className="app"> 
        <Compare 
          comparedCards={ this.state.comparedCards }
          updateCompareState = { this.updateCompareState }
          />
        <Search
          searchFilter={ this.searchFilter } />
        <CardContainer 
          districtsData={ this.state.districtsData }
          updateCompareState={ this.updateCompareState }
          comparedCards={ this.state.comparedCards }
        />
      </div>
    );
  }
}


export default App;
