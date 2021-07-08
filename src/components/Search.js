import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  updateQuery = (e) => {
    const { name, value } = e.target;
    value 
      ? this.setState( { [name]: value } )
      : this.props.displayAllCards()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.filterDistricts(this.state.query)
    this.setState({ query: '' });
    // this.props.filterDistricts(this.state.query)
  }

  render() {
    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.query} 
            placeholder="Search School Districts" 
            name="query"
            onChange={this.updateQuery}
          />
          <button>Search</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}

export default Search;
