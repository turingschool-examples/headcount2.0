import React, { Component } from "react"
import PropTypes from "prop-types"

import TableEntry from './TableEntry.js'

class FilteredResults extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  tableBody = () => {
    const tableData = this.props.results.map(entry => {
      return (
        <TableEntry key={entry.location} results={entry}/>        
      )
    })
    return tableData
  };

  render() {
    return (
      <table className="alphabet-results">
        <thead><tr><th>Results</th></tr></thead>
        <tbody>{this.tableBody()}</tbody>
      </table>
    )
  }
}

export default FilteredResults

FilteredResults.propTypes = {
  results: PropTypes.array
}
