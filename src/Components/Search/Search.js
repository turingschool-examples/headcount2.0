import React, { Component } from 'react';
import $ from 'jquery';
import './search.css'
import PropTypes from 'prop-types';

class Search extends Component{
  constructor(){
    super();

    this.state={
      district: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.searchData(this.state.district);
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div className="search-container" onChange={(event)=>{this.handleSubmit(event)}}>
      <form className="submit-form">
      <input
      name="district"
      className="search-input"
      placeholder="Search Districts"
      onChange={this.handleInput} />
      <button className="submit-button">Search</button>
      </form>
      </div>
    )
  }
}

Search.propTypes = {
  searchData: PropTypes.func
}

export default Search;
