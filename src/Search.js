import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchString: ''
    }
  }

  handleImputChange = (e) => {
    const { name, value } = e.target;
    // value = value.toUppercase();
    this.setState( {[name]: value.toUpperCase()})
    this.props.searchForDistrict(value.toUpperCase())
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchString = this.state.searchString;
    // console.log(searchForDistrict);
    this.props.searchForDistrict(searchString)
    this.setState({searchString : ''})
  }

  render() {
    return(
      <div className='search'>
        <h3>Enter the district you want to search</h3>
        <form 
          onSubmit={this.handleSubmit}>
          <input 
            className='inputField'
            name='searchString'
            placeholder='Enter District You Want To Search'
            value={this.state.searchString}
            onChange={this.handleImputChange} />
          <button
            className='inputButton'>Submit</button>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  searchForDistrict: PropTypes.func.isRequired
}

export default Search;