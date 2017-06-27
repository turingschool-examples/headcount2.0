import React, { Component } from 'react';


export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchInput : ''
    }
  }

  handleSearchInput(e) {
  }

  render() {
    const { filterSearch } = this.props;

    return (
      <div>
        <input type="text"
          placeholder="Search"
          onKeyDown={
            (e) => filterSearch(e.target.value)
          }/>
        <input type="submit" />
      </div>
    )
  }
}
