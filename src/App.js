import React, { Component } from 'react';
import './App.css';
import CardArea from './CardArea';
import Search from './Search';
import DistrictRepository from './helper';
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

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <Search changeData={this.changeData} />
        </header>
        <CardArea data={this.state.cleanData} />
      </div>
    )
  }
}

export default App;
