import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchValue: ''
    }
  }

  handleState = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  
  render() {
    return (
      <form className="form">
        <input type="text" placeholder="Search School Districts" onKeyUp={this.handleState}/>
      </form>
    )
  }
}

export default Search;