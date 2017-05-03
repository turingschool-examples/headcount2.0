/* eslint-disable */
import React, { Component } from 'react'

export default class Search extends Component {
  constructor(){
    super()
    this.state ={
      search : '',
    }
  }

  render(){
    return(
      <div className = "search">
        <input type = "text"
              value = {this.state.search}
              onChange = {(e) =>{
                this.setState({search: e.target.value})
                this.props.handleSearch(this.state.search)
              }}/>
      </div>
    )
  }
}
