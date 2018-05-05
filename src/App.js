import React, { Component } from 'react';
import './App.css';
import CardArea from './CardArea';
import Search from './Search';
import DistrictRepository from './helper';
import SelectedCards from './SelectedCards';
import data from './data/kindergartners_in_full_day_program';

const district = new DistrictRepository(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanData: district.stats,
      selectedCards: []
    }
  }

  changeData = (event) => {
    let results = district.findAllMatches(event.target.value);

    this.setState({
      cleanData: results
    });
  }

  selectCard = (event) => {
    const locationText = event.target.closest('div').children[0].innerText;
    const newSelection = this.state.selectedCards.filter(locationName => 
      locationText !== locationName);

    if(this.state.selectedCards.length === 2) {
      this.setState({
        selectedCards: [...newSelection]
      });
    } else {
      this.setState({
        selectedCards: [locationText, ...this.state.selectedCards]
      });
    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <Search changeData={this.changeData} />
        </header>
        <SelectedCards selectedCards={this.state.selectedCards} data={this.state.cleanData}/>
        <CardArea data={this.state.cleanData} selectCard={this.selectCard} selectedCards={this.state.selectedCards}/>
      </div>
    )
  }
}

export default App;
