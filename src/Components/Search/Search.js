import React, { Component } from 'react'
import './search.css'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault()
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

export default Search