import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavLetter extends Component {

  handleClick = () => {
    this.props.alphabetQuery(this.props.letter)
  }

  render() { 
    return ( 
      <li onClick={this.handleClick} >{this.props.letter}</li>
    )
  }
}
 
export default NavLetter

NavLetter.propTypes = {
  letter: PropTypes.string,
  alphabetQuery: PropTypes.func
}