/* eslint-disable */
import React, { Component } from 'react'
import '../Styles/normalize.css'
import '../Styles/App.css'
import Search from './Search.js'
import CardGrid from './CardGrid.js'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js'


class App extends Component {
  constructor(){
    super()
    this.schools=new DistrictRepository(kinderData)
    this.state={
      full: this.schools.data,
      searched : '',
    }
  }

  handleSearch(query){
    this.state.searched = query
    this.setState({searched : this.state.searched})
  }

  handleCardSelect(){
    console.log('YALL CLICKED THIS')
  }

  render() {
    return (
      <div>
        <Search handleSearch = {this.handleSearch.bind(this)}/>
        <CardGrid schools = {this.schools}
                  searched = {this.state.searched}
                  cardClick = {this.handleCardSelect.bind(this)}/>
      </div>
    )
  }
}

export default App
