/* eslint-disable */
import React, { Component } from 'react';
import '../Styles/App.css';
import Search from './Search.js'
import CardGrid from './CardGrid.js'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor(){
    super()
    this.schools=new DistrictRepository(kinderData);
    this.state={
      full: this.schools.data,
      searched : '',
    }
  }

  render() {
    return (
      <div>
        <Search/>
        <CardGrid schools={this.schools}/>
      </div>
    );
  }
}

export default App;
