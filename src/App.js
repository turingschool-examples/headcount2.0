import React, { Component } from 'react';
import './App.css';
import SelectedCards from './SelectedCards';
import CardArea from './CardArea';
import DistrictRepository from './helper';
import data from './data/kindergartners_in_full_day_program'

const district = new DistrictRepository(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: []
    }
  }



  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
        </header>
        <CardArea data={district.stats}/>
      </div>
    )
  }
}

export default App;
