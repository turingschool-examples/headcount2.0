import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  render() {
    return(
      <form className="Search">
        <input
          aria-label="Search for a specific district here"
          placeholder="Search for a specific district"
        />
      </form>
    )
  }
}

export default Search