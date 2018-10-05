import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
  this.state=({
    query: ''
  })
}

handleChange = (event) => {
  this.setState({
    query: event.target.value
  }, this.addQueryToState) 
}

  addQueryToState = () => {
    this.props.search(this.state.query);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.query}/>
          <button>Search</button>
        </form>
      </div>
      )
  }
}

export default Search;