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
      selected: []
    }
  }

  handleSearch(query){
    this.state.searched = query
    this.setState({searched : this.state.searched})
  }

  handleCardSelect(id){
    if(this.state.selected.length < 2){
      if(this.state.selected[0] === id){
        return
      }
      this.state.selected.push(id)
    } else {
      this.handleCardDeselect(id)
    }
    this.setState({selected: this.state.selected})
  }

  handleCardDeselect(id){
    if(!this.state.selected.includes(id)){
      return
      }

    if(this.state.selected[0] == id){
      console.log("At Zero", this.state.selected[0])
      this.state.seleted.splice(0, 1)

    } else if (this.state.selected[1] == id) {
      console.log("At One", this.state.selected[1])
      this.state.selected.splice(1, 1)
    }

    this.setState({selected: this.state.selected})
  }

  render() {
    return (
      <div>
        <Search handleSearch = {this.handleSearch.bind(this)}/>
        <CardGrid schools = {this.schools}
                  searched = {this.state.searched}
                  cardClick = {this.handleCardSelect.bind(this)}
                  cardUnclick = {this.handleCardDeselect.bind(this)}/>
      </div>
    )
  }
}

export default App
