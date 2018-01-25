import React, { Component } from 'react';
import '../styles/Controls.css'

class Controls extends Component {
  constructor(props){
    super(props)
    this.state = {
      district: ''
    }
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({
      district: value
    })
    this.props.handleSearch(this.state.district)
  }

  render() {
    return (
      <header className='search-wrap'>
        <h1> HeadCount 2.0 </h1>
        <input onChange={this.handleInput} value={this.state.district} type='text' placeholder='Enter District Name' /> 
        
      </header>
      )
  }

}

export default Controls