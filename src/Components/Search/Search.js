import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

class Search extends Component {
	render() {
		return (
			<div>
				<input 
					placeholder="Find district."
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

Search.propTypes = {
	filterLocations: PropTypes.func
}









export default Search;