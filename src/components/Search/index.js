import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor({findAllMatching}) {
    super()
    this.state = {
      query: ''
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
    this.props.findAllMatching();
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return(
      <form className="Search" onSubmit={this.handleSubmit} >
        <input
          className="search-input"
          aria-label="Search for a specific district here"
          placeholder="Search for a specific district"
          name="query"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

export default Search