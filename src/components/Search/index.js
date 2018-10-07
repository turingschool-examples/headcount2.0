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

  handleInputChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
    this.submitQuery()
  }

  submitQuery = () => {
    this.props.findAllMatches(this.state.query);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleInputChange(event)
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