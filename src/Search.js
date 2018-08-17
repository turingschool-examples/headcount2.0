import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component { 

handleChange = (e) => {
  this.props.filterDistricts(e.target.value)
}

  render() {
    return(
      <form>
        <input
        type="text"
        onChange={this.handleChange}
        />
      </form>
    )
  }
}

Search.propTypes = {
  filterDistricts: PropTypes.func
}



export default Search 