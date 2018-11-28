import React, { Component } from 'react';
import './styles/Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
    }
    handleSearch = (event) => {
        const search = event.target.value;
        console.log(search)
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