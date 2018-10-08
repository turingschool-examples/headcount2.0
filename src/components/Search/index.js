import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Search.css'

class Search extends Component {
  constructor({findAllMatches}) {
    super()
    this.state = {
      query: ''
    }
  }

  handleInputChange = event => {
    const { value } = event.target

    this.setState({query: value})
    this.props.findAllMatches(value);
  }

  handleSubmit = event => {
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

Search.propTypes = {
  findAllMatches: PropTypes.func.isRequired
}

export default Search