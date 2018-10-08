import React, { Component } from 'react';
import './App.css';
import CardContainer from './Components/CardContainer/CardContainer';
import Search from './Components/Search/Search';
import DistrictRepository from './helper.js';
import kinderdata from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      districtData: {}
    };

  }

  componentDidMount(){
    const districts = new DistrictRepository(kinderdata);
    const stats = districts.stats;
    this.setState({
      districtData: stats
    });
  }

  searchData = (userInput) => {

    const districts = new DistrictRepository(kinderdata);

    const newData = districts.findAllMatches(userInput);

    this.setState({
      districtData: {...newData}
    });
  }

  render() {

    const { districtData } = this.state;

    return (

      <div>
        <span className="welcome">Welcome To Headcount 2.0!!!!!</span>
        <Search searchData={(userInput) => this.searchData(userInput)}/>
        <CardContainer stats={districtData} />
      </div>

    );
  }
}

export default App;
