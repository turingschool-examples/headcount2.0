import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <form>
                <input
                type="text"
                name="school"
                placeholder="Search"
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default Search