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

	handleInputChange = (event) => {
		const search = event.target.value
		// console.log(search)
		this.props.searchDistrict(search)
		this.setState({ search })
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return(
			<form 
				className='Search'
				onSubmit={this.handleSubmit}
			>
				<input 
					className='search-input'
					name='search'
					placeholder='Search for district'
					value={this.state.search}
					onChange={this.handleInputChange}
					/>
			</form>
		)
	}
}

Search.propTypes = {
	searchDistrict: PropTypes.func.isRequired
}


export default Search;