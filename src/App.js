import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Container from './Container';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {data: {}};
  }

  componentDidMount() {
    const initialState = new DistrictRepository(kinderData)
    const data = initialState
    this.setState({data: initialState})
  }

  filterSearch(searchInput) {
    // console.log(this.state.data)
  }


  render() {
    this.filterSearch('Colorado')
    const {data} = this.state
    console.log(data);
    return (
      <div>
        <Search />
        <Container data={data}/>
      </div>
    )
  }
}

export default App;
