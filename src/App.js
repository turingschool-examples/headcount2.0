import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import Search from './Search.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      DistrictRepository: {}
    };
  }

  searchForDistrict = (word) => {
    let repo = new DistrictRepository(kinderData);
    console.log(repo.findAllMatches(word));
    // this.setState({
    //   DistrictRepository: repo.findAllMatches(word)
    // })
  }

  componentDidMount() {
    let repo = new DistrictRepository(kinderData);
    this.setState({
      DistrictRepository: repo.stats
    });
  }

  render() {
    const cardInfo = Object.keys(this.state.DistrictRepository);
    const cards = cardInfo.map((schoolDistrict) => {
      return <Card key={schoolDistrict} schoolName={schoolDistrict} schoolInfo={this.state.DistrictRepository[schoolDistrict]}/>;
    });

    return (
      <div>
        <h1 className="title">Welcome To Headcount 2.0</h1>
        <Search searchForDistrict={this.searchForDistrict} />
        <div className="card-container">
          { cards }
        </div>
      </div>
    );
  }
}

export default App;
