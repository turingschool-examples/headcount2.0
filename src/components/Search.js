import React, { Component } from 'react';
import DistrictRepository from '../helper'

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
				<button>Submit</button> 
			</form>
		);
	}
}


export default Search