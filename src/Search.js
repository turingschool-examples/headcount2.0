import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }

  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value})
    this.props.filterData(event.target.value)
  }

  render() {
    return (
      <input  type="search"
              placeholder="Search for a district"
              onChange={this.handleChange}
      />
    )
  }
}

export default Search;