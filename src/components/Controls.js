import React, { Component } from 'react';
import '../styles/Controls.css'

class Controls extends Component {
  constructor(props){
    super(props)
    this.state = {
      district: ''
    }
  }

  render() {
    return (
      <header>
        <h1> HeadCount 2.0 </h1>
        <input type='text' placeholder='Enter District Name' /> 
        <button onClick={props.handleSearch}>Search</button>
      </header>
      )
  }

}

export default Controls