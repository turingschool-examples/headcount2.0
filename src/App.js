import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      DistrictRepository: {}
    }
  }

  componentDidMount() {
    let repo = new DistrictRepository(kinderData)
    this.setState({
      DistrictRepository: repo.stats
    })
  }

  render() {
    const cardInfo = Object.keys(this.state.DistrictRepository)
    const cards = cardInfo.map((schoolDistrict) => {
      return <Card key={schoolDistrict} schoolName={schoolDistrict} schoolInfo={this.state.DistrictRepository[schoolDistrict]}/>
    }) 

    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        { cards }
      </div>
    );
  }
}

export default App;
