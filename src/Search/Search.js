import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}

	handleChange = (event) => {
		const search = event.target.value
		this.setState({ search }, this.props.searchDistrict(search))
	}

	render() {
		return(
			<form className='Search'>
				<input 
					className='search-input'
					name='search'
					placeholder='Search for district'
					value={this.state.search}
					onChange={this.handleChange}
					/>
			</form>
		)
	}
}



export default Search;