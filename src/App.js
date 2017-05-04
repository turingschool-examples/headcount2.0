import React, { Component } from 'react';
import DistrictRepository from './helper';
import { Cards } from './Cards';
import kinderData from '../data/kindergartners_in_full_day_program';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.schools = new DistrictRepository(kinderData);
    this.state = {
      data: {}
    }
  }

  handleSelect(e) {
    console.log('click! ' + event.target);
    if (document.querySelectorAll('.clicked').length < 2) {
      event.target.closest('.card').classList.toggle('clicked');
    } else {
      event.target.closest('.card').classList.remove('clicked');
    }
  }

  componentDidMount() {
      document.addEventListener('click', this.handleSelect);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
        </header>
        <Cards data={ this.schools.data }
               onClick={ this.handleSelect.bind(this) } />
      </div>
    );
  }
}

export default App;
