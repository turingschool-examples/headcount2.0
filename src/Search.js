import React, { Component } from 'react';
import './styles/Search.css'

class Search extends Component {
    handleSearch = (event) => {
        const search = event.target.value;
        this.props.displaySearch(search);
    }

    render() {
        return (
            <form>
                <input placeholder="Search for a school.." onChange={this.handleSearch}/>
            </form>
        )
    }
}

export default Search;