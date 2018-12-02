import React, { Component } from 'react';
import './Search.css';

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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchString = this.state.searchString;
    // console.log(searchForDistrict);
    this.props.searchForDistrict(searchString)
  }

  render() {
    return(
      <div className='search'>
        <h3>Enter the district you want to search</h3>
        <form 
          onSubmit={this.handleSubmit}>
          <input 
            name='searchString'
            placeholder='Enter District You Want To Search'
            value={this.state.searchString}
            onChange={this.handleImputChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Search;