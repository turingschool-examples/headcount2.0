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
      compareMessage: 'Click on two districts to compare'
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

  addDistrictToCompare = () => {
    
  }

  search = (searchValue) => {
    const data = new DistrictRepository(kinderData);
    const newData = data.findAllMatches(searchValue);
    
    this.setState({
        districtData: newData
    })
  }

  render() {
    const { districtData, searchInput, districtsToCompare, compareMessage } = this.state;

    return (
      <main className="App">
        <header>
          <h1>HeadCount 2.0</h1>
          <form>
            <input type="text" onChange={this.handleChange} name="search" value={searchInput} placeholder="Search for a district" autoFocus />
            <button>Search</button>
          </form>
        </header>
        <CardContainer  districtData={districtData}
                        compareMessage={compareMessage}
                        districtsToCompare={districtsToCompare} />
      </main>
    );
  }
}

export default App;