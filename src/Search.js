import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

class Search extends Component {
	constructor() {
		super()
		this.state = {
			location: ''
		}
	}

	handleChange = () => {
		
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({location: e.target.value})
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit>
				<input 
					className="search-input"
					name="search"
					onChange={this.handleChange}
					value={this.state.location}
				/>
				<button>Search</button>
			</form>

		)
	}


}









export default Search;