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
      <div>
        <input type = "text" value = {this.state.search} onChange = {(e) =>{this.setState(e.target.value)}} />
      </div>
    )
  }
}
