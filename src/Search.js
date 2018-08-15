import React, { Component } from 'react';
import './Search.css';
import kinderData from './data/kindergartners_in_full_day_program.js';

class Search extends Component {
	constructor() {
		super()
		this.state = {
			location: ''
		}
	}

	handleChange = (e) => {
		this.setState({location: e.target.value})
	}

	render() {
		return (
			<div>
				<input 
					className="search-input"
					name="search"
					onChange={this.handleChange}
					value={this.state.location}
				/>
				<button className="clear-button">Clear</button>
			</div>
		)
	}


}









export default Search;