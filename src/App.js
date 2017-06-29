import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import CardList from './CardList';
import Input from './Input';
// import ComparisonCard from './ComparisonCard';
import kinderData from '../data/kindergartners_in_full_day_program';



class App extends Component {
  constructor () {
    super()
    this.helper = new DistrictRepository(kinderData)
    this.state = {
      selectedCards: [],
      filteredCards: []
    };
  };

  submitSearch(searchInput) {
    const newState = this.helper.findAllMatches(searchInput)
    this.setState({filteredCards: newState})
  };

  selectCard(id) {
    console.log(id)
    const newArray = this.state.selectedCards
    newArray.push(this.helper.findByName(id))
    // const newArray = this.helper.findAllMatches().map(obj => {
    //   obj.location = obj.location.toLowerCase()
    //   return obj
    // }).filter(obj => obj.location.includes(id.toLowerCase()) )
    console.log(newArray)
    this.setState({
      selectedCards: newArray
    })
  }

  render() {
    return (
      <div>
        <Input helper={this.helper}
               submitSearch={this.submitSearch.bind(this)}/>
        <CardList selectedCards={this.selectCard.bind(this)}
                  filteredCards={this.state.filteredCards}
                  helper={this.helper}
                  id={Date.now()}/>
      </div>
    );
  }
}

export default App;
