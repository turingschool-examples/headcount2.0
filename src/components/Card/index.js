import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

class Card extends Component {
  constructor({location, stats, adjustComparisons}) {
    super()
    this.state = {
      location: location,
      stats: stats,
      isSelected: false
    }
  }

  makeCards = stats => {
    const isSelected = this.state.isSelected

    return Object.keys(stats).map((year, index) => {
      return (
        <li key={index}
            className={`Card-entry ${this.checkLow(stats, year)}`}
        >
          {year}: {stats[year]}
        </li>)
      }
    )
  }

  checkLow = (stats, year) => {
    if (stats[year] <= 0.5) return 'low'
  }

  checkSelected = isSelected => {
    if (isSelected) {
      return 'selected'
    } else {
      return ''
    }
  }

  toggleSelect = event => {
    const card = event.target.parentElement.find('.Card')

    debugger

    this.setState({ isSelected: !this.state.isSelected })
    this.props.adjustComparisons(card)
  }

  render() {
    const location = this.state.location
    const stats = this.state.stats
    const isSelected = this.state.isSelected

    return(
      <article
        className={`Card ${this.checkSelected(isSelected)}`}
        onClick={this.toggleSelect}
      >
        <h2 className="Card-title">{location}</h2>
        <ul className="Card-list">
          { stats ? this.makeCards(stats) : null}
        </ul>
      </article>
    )
  }
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object
}

export default Card