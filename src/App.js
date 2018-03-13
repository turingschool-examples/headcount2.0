import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.district = new DistrictRepository(kinderData);
    this.state={
      data: {}
    }
    console.log(this.district)
  }

  getData = () => {
    this.setState({
      data: this.district.stats
    })
  }

  componentDidMount(){
    this.getData()
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
