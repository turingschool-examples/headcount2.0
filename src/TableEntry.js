import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TableEntry extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      location: '',
      selected: '',
      class: ''
    }
  }

  componentDidMount () {
    this.setState({
      location: this.props.results.location
    })
  }

  handleCompare = () => {
    if (this.state.selected) {
      this.props.handleSelected(this.state.location, false)
      this.setState({
        class: '',
        selected: !this.state.selected
      })
    } else {
      this.props.handleSelected(this.state.location, true)
      this.setState({
        class: 'selected',
        selected: !this.state.selected
      })
    }
  }

  render() { 
    return ( 
      <tr>
        <td className={this.state.class} onClick={this.handleCompare} value={this.state.location}>{this.state.location}</td>
      </tr>
    )
  }
}
 
export default TableEntry


TableEntry.propTypes = {
  results: PropTypes.object,
  handleSelected: PropTypes.func
}