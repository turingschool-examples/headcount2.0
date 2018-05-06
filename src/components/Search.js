import React, { Component } from 'react';
import DistrictRepository from '../helper';
import '../styles/Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props){
		super(props);
    this.state=  {
      userInput: ""
    };
	}

	handleChange =  (event) => {
		this.setState( {
			userInput: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.setLocationData(this.state);
		this.state.userInput = "";
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
          type= "text"
					onChange= {this.handleChange}
					placeholder="Search Districts"
					value= {this.state.userInput}
					className="search-input" 
				/>
				<button className="search-button">Submit</button> 
			</form>
		);
	}
}

Search.propTypes = {
	setLocationData: PropTypes.func
}


export default Search;