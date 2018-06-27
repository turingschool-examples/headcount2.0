import React, { Component } from 'react'
import './search.css'

class Search extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="search-container">
                <h3>Find A School</h3>
                <form>
                    <input
                    className="search-input"
                    type="text"
                    name="school"
                    placeholder="Search"
                    />
                    <button className="search-button">Submit</button>
                </form>
            </div>
        )
    }
}

export default Search