import React, { Component } from 'react';
import './App.scss';
import CardContainer from '../CardContainer/CardContainer.js';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtData: [],
      searchInput: '',
      districtsToCompare: [],
      compareMessage: 'Select two districts to compare',
      districtAverages: {}
    }
  }

    componentDidMount() {
    const data = new DistrictRepository(kinderData);
    const keyArray = Object.keys(data.stats);
    const dataArray = keyArray.map((key) => {
      return data.stats[key];
    })

    this.setState({
      districtData: dataArray
    });
  }

  handleChange = (event) => {
    let { value } = event.target;
    if (!value) {
      value = ''
    }
    this.search(value)
    this.setState({
      searchInput: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      searchInput: ''
    })
  }

  addDistrictToCompare = (location) => {
    const { districtsToCompare } = this.state
    const data = new DistrictRepository(kinderData);
    let currentDistrict = data.findByName(location);

    if (districtsToCompare.length < 1) {
      this.setState({
        districtsToCompare: [currentDistrict],
        compareMessage: 'Select another district'
      })
    } else if (districtsToCompare.length === 1) {
      this.setState({
        districtsToCompare: [...districtsToCompare, currentDistrict],
        districtAverages: data.compareDistrictAverages(districtsToCompare[0].location, currentDistrict.location)
      })
    }
  }

  resetComparison = () => {
    this.setState({
      districtsToCompare: [],
      compareMessage: 'Select two districts to compare',
      districtAverages: {},
      searchInput: ''
    })
  }

  search = (searchValue) => {
    const data = new DistrictRepository(kinderData);
    const newData = data.findAllMatches(searchValue);
    
    this.setState({
        districtData: newData
    })
  }

  render() {
    const { 
      districtData, 
      searchInput, 
      districtsToCompare, 
      compareMessage,
      districtAverages,
    } = this.state;

    return (
      <main className="App">
        <header>
          <h1>HeadCount 2.0</h1>
          <form>
            <input type="text" onChange={this.handleChange} name="search" value={searchInput} placeholder="Search for a district" autoFocus />
            <button onClick={this.handleClick}>Clear</button>
          </form>
        </header>
        <CardContainer  districtData={districtData}
                        compareMessage={compareMessage}
                        districtsToCompare={districtsToCompare}
                        addDistrictToCompare={this.addDistrictToCompare}
                        districtAverages={districtAverages}
                        resetComparison={this.resetComparison} />
      </main>
    );
  }
}

export default App;