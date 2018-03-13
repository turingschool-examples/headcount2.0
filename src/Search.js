import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ value: e.target.value })
    let found = this.props.schoolData.findAllMatches(this.state.value)
    this.props.searchedDistrict(found);
  }

  render() {
    return (
      <form>
        <input
          type="search"
          className="search-bar"
          list="search"
          value={this.state.value}
          placeholder="Search for a district"
          onChange={this.handleChange}
        />
        <datalist id="search"></datalist>
      </form>
    )
  }
}

export default Search