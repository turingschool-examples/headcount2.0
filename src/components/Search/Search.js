import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  handleInput = (event) => {
    this.setState({query: event.target.value});
    this.props.handleSubmit(this.state.query);
  }

  submitHelper = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHelper}>
          <input
            id="search-input" 
            type="text" 
            placeholder="Search District"
            value={this.state.query}
            onChange={this.handleInput} />
          <input 
            id="button"
            type="submit" />
        </form>
      </div>
    );
  }
}

export default Search;