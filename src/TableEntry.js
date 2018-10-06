import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TableEntry extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      location: ''
     }
  }

  componentDidMount () {
    this.setState({
      location: this.props.results.location
    })
  }

  handleCompare = (event) => {
    console.log (event.target.value)
  }

  render() { 
    return ( 
      <tr>
        <td onClick={this.handleCompare} value={this.state.location}>{this.state.location}</td>
      </tr>
    )
  }
}
 
export default TableEntry


TableEntry.propTypes = {
  results: PropTypes.object
}