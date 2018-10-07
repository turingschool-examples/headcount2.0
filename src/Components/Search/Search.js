import React, { Component } from 'react';
import $ from 'jquery';
import './search.css'


class Search extends Component{
  constructor(){
    super();

    this.state={
      district: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.searchData(this.state);

    console.log('hellooooofsafoaofa')

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
      <button onSubmit={()=>{this.handleSubmit}} className="submit-button">Search</button>
      </form>
      </div>
    )
  }
}

export default Search;
