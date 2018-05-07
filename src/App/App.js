import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../helper';
import CardArea from '../CardArea/CardArea';
import Search from '../Search/Search';
import SelectedCards from '../SelectedCards/SelectedCards';
import sampleData from '../data/kindergartners_in_full_day_program';

const district = new DistrictRepository(sampleData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanData: district.stats,
      selectedCards: []
    };
  }

  changeData = (event) => {
    let results = district.findAllMatches(event.target.value);

    this.setState({
      cleanData: results
    });
  }

  selectCard = (location) => {
    const newSelection = this.state.selectedCards.filter(locationName =>
      location !== locationName);

    if (this.state.selectedCards.length === 2) {
      this.setState({
        selectedCards: [...newSelection]
      });
    } else {
      this.setState({
        selectedCards: [location, ...this.state.selectedCards]
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <Search changeData={this.changeData} />
        </header>
        <SelectedCards
          cleanData={this.state.cleanData}
          selectCard={this.selectCard}
          selectedCards={this.state.selectedCards}
        />
        <CardArea
          cleanData={this.state.cleanData}
          selectCard={this.selectCard}
          selectedCards={this.state.selectedCards}
        />
      </div>
    );
  }
}

export default App;
