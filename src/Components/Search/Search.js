import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
	render() {
		return (
			<div>
				<input 
					placeholder="District Name"
					type="text"
					className="search-input"
					name="search"
					onChange={ (e) => this.props.filterLocations(e.target.value) }
				/>
			</div>
		)
	}
}

Search.propTypes = {
	filterLocations: PropTypes.func
}









export default Search;