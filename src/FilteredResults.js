import React, { Component } from "react"
import PropTypes from "prop-types"

import TableEntry from './TableEntry.js'

class FilteredResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: []
    }
  }

  tableBody = () => {
    const tableData = this.props.results.map(entry => {
      return (
        <TableEntry key={entry.location} results={entry} handleSelected={this.handleSelected}/>        
      )
    })
    return tableData
  };

  handleSelected = (selection, boolean) => {
    if (boolean) {
      this.setState({
        selected: [...this.state.selected, selection]
      })
    } else {
      const cleanedArray = this.state.selected.filter(entry => {
        if (!entry.includes(selection)) return entry
        return
      })
      this.setState({
        selected: cleanedArray
      })
    }
    // if (this.state.selected.length < 4) {
    //   this.setState({
    //     selected: [...this.state.selected, selection]
    //   })
    // } else {
    //   this.setState({
    //     selected: [...this.state.selected.slice(1, 4), selection]
    //   })
    // }
  }

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
