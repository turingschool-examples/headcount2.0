import React, { Component } from 'react';
import './App.css';
import 'normalize.css';
import DistrictRepository from './DistrictRepository';
import SchoolList from './SchoolList';
import Search from './Search';
import kinderData from '../data/kindergartners_in_full_day_program';
import Comparison from './Comparison';

const districtInfo = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      compareCards: []
    }
  }

  componentDidMount() {
    this.setState({
      data: districtInfo.data
    })
  }

  updateData(location) {
    this.setState({
      data: districtInfo.findAllMatches(location)
    })
  }

  clickedCard(item, info) {
    // item.classList.toggle('clicked-card');


    if (this.state.compareCards.length < 2) {

      const chosenCard = this.state.compareCards.push(info);
      const newArray = [...this.state.compareCards]
      console.log(newArray);

      this.setState({
        compareCards: newArray
      });

      item.classList.toggle('clicked-card');
    }
  }

  render() {
    const data = this.state.data;
    return (
      <div>
        <Search findSchool={this.updateData.bind(this)}/>
        <SchoolList data={data}
             findAverage={districtInfo.findAverage.bind(districtInfo)}
             clickedCard={this.clickedCard.bind(this)} />
        <Comparison />
      </div>
    );
  }
}

export default App;
