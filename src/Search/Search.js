import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchedDistrict: ''
		}
	}

	handleChange = () => {

	}

	render() {
		return(
			<form className='Search'>
				<input 
					className='search-input'
					name='search'
					/>
			</form>
		)
	}
}



export default Search;