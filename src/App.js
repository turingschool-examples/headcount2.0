import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Container from './Container';

class App extends Component {
  constructor() {
    super();
    this.state = {data: {}};
  }

  componentDidMount() {
    const initialState = new DistrictRepository(kinderData)
    const data = initialState.data
    this.setState({data})
  }




  render() {
    const {data} = this.state
    return (
      <div>
        Hello
        <Container data={data}/>
      </div>
    )
  }
}

export default App;
