import React, { Component } from 'react'
import './search.css'
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        const search = event.target.value

        this.setState({search})

        this.props.submitSearch(this.state.search)
    }

    render(){
        return (
            <div className="search-container">
                <h3>Find A School</h3>
                    <input
                    className="search-input"
                    type="text"
                    name="school"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleChange}
                    />
            </div>
        )
    }
}

Search.propTypes = {
    submitSearch: PropTypes.func
}

export default Search