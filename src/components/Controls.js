import React, { Component } from 'react';
import '../styles/Controls.css'

class Controls extends Component {
  constructor(){
    super()
    this.state = {
      district: ''
    }
  }

  render() {
    return (
      <header>
        <h1> HeadCount 2.0 </h1>
        <input type='text' placeholder='Enter District Name' /> 
        <button>Search</button>
      </header>
      )
  }

}

export default Controls