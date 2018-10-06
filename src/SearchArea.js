import React, { Component } from 'react'

import FilterResults from './FilterResults'
import FilteredResults from './FilteredResults';

class SearchArea extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() { 
    return ( 
      <section className="l-search search-area">
        <FilterResults alphabetQuery={this.props.alphabetQuery}/>
        <FilteredResults />
      </section>
    )
  }
}
 
export default SearchArea