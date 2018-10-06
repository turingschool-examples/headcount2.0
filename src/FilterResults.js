import React, { Component } from "react"
import PropTypes from 'prop-types'


import NavLetter from "./NavLetter"

class FilterResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    }
  }


  render() {
    return (
      <nav className="search-nav">
        <ul className="alphabet-query">
          {this.state.alphabet.map(letter => (
            <NavLetter letter={letter} key={letter} alphabetQuery={this.props.alphabetQuery}/>
          ))}
        </ul>
        <form
          className="search-main "
          onSubmit={this.handleSubmit}
          href="#results-page"
        >
          <input
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search for a district"
            aria-label="Search field"
            type="text"
          />
        </form>
      </nav>
    )
  }
}

export default FilterResults

NavLetter.propTypes = {
  alphabetQuery: PropTypes.func
}