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
  };

  componentDidMount() {
    this.setState({
      data: districtInfo.data
    })
  };

  updateData(location) {
    this.setState({
      data: districtInfo.findAllMatches(location)
    })
  };

  clickedCard(item, info) {

    if ( this.state.compareCards.length !== 2 ) {
      this.state.compareCards.push(info);

      const newArray = [...this.state.compareCards];

      this.setState({
        compareCards: newArray
      });

      item.classList.toggle('clicked-card');

    } else if ( this.state.compareCards.includes(info) ) {
      const indexNum = this.state.compareCards.indexOf(info);

      const newArray = this.state.compareCards.splice(indexNum, 1);
      //do I need to set state here with new array?
      item.classList.toggle('clicked-card');

    }
  };

  render() {
    const data = this.state.data;
    return (
      <div>
      
        <Search findSchool={this.updateData.bind(this)} />

        <SchoolList data={data}
             findAverage={districtInfo.findAverage.bind(districtInfo)}
             clickedCard={this.clickedCard.bind(this)} />

        <Comparison cardData={this.state.compareCards}
                 findAverage={districtInfo.findAverage.bind(districtInfo)} />

      </div>
    );
  };
};

export default App;
