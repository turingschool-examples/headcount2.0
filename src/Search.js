import React, { Component } from 'react';


export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchInput : ''
    }
  }

  handleSearchInput(e) {
    this.setState({searchInput: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Search"
          onKeyDown={this.handleSearchInput.bind(this)}/>
        <input type="submit" />
      </div>
    )
  }
}
