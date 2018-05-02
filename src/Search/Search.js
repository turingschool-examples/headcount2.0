import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor( props ){
    super( props );
    this.state = {
      userInput: ''
    }
  }
updateUserInput = (e) => {
  this.setState({ userInput: e.target.value })
}

  render(){
    return(
      <form className="search">
        <input type="text" placeholder="Search Yo skuuurls hurr..." onChange={ this.updateUserInput } value={this.state.userInput} />
      </form>   
    )
  }
}
 
export default Search;