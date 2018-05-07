import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor( props ){
    super( props );
    this.state = {
      userInput: ''
    };
  }
updateUserInput = (event) => {
  this.setState({ userInput: event.target.value });
}

updateFilterInfo = () => {
  this.props.searchFilter( this.state.userInput );
}

render(){
  return (
    <form className="search">
      <input 
        type="text" 
        placeholder="Search for a district" 
        onKeyUp={ this.updateFilterInfo } 
        onChange={ this.updateUserInput } 
        value={  this.state.userInput } 
      />
    </form>   
  );
}
}

Search.propTypes = {
  searchFilter: PropTypes.func
};
 
export default Search;