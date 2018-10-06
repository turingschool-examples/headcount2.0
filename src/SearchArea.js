import React, { Component } from 'react'
import PropTypes from 'prop-types' 

import FilterResults from './FilterResults'
import FilteredResults from './FilteredResults'

class SearchArea extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  
  render() { 
    return ( 
      <section className="l-search search-area">
        <FilterResults alphabetQuery={this.props.alphabetQuery} />
        <FilteredResults results={this.props.results}/>
      </section>
    )
  }
}
 
export default SearchArea


SearchArea.propTypes = {
  results: PropTypes.array,
  alphabetQuery: PropTypes.func
}