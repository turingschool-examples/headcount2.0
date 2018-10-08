import React, { Component } from "react"
import PropTypes from "prop-types"

import TableEntry from './TableEntry.js'

class FilteredResults extends Component {
    
  tableBody = () => {
    const tableData = this.props.results.map(entry => {
      return (
        <TableEntry key={entry.location} results={entry} handleSelected={this.props.handleSelected}/>        
      )
    })
    return tableData
  };

  render() {
    return (
      <table className="alphabet-results">
        <thead><tr><th>DATA</th></tr></thead>
        <tbody>{this.tableBody()}</tbody>
      </table>
    )
  }
}

export default FilteredResults

FilteredResults.propTypes = {
  results: PropTypes.array,
  handleSelected: PropTypes.func
}
