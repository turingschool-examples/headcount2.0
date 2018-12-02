import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schoolName: ''
    }
  }

saveUserInput = (e) => {
  this.setState({
    schoolName: e.target.value
  })
  this.props.filterCards(this.state.schoolName)
}

render() { 
  return (
    <div>
      <form className="search-field">
        <input type="text" 
               placeholder="search for a school district..."
               onChange={(e) => {this.saveUserInput(e)}}
               />
      </form>
    </div>
   )
 }
}

SearchForm.propTypes = {
  filterCards: PropTypes.func
}


export default SearchForm; 