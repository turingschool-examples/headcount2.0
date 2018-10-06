import React, { Component } from 'react';
import './search.css'

class Search extends Component{
  constructor(){
    super();

    this.state={
      district: ''
    }
  }


  handleSubmit(){

  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div className="search-container">
      <form className="submit-form">
      <input
      name="district"
      className="search-input"
      placeholder="Search Districts"
      onChange={this.handleInput} />
      </form>
      </div>
    )
  }
}

export default Search;
