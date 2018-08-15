import React, { Component } from 'react';
import './Search.css';
import kinderData from './data/kindergartners_in_full_day_program.js';

class Search extends Component {
	
	

	render() {
		return (
			<div>
				<input 
					type="text"
					className="search-input"
					name="search"
					onChange={ (e) => this.props.filterLocations(e.target.value) }
				/>
				<button className="clear-button">Clear</button>
			</div>
		)
	}


}









export default Search;