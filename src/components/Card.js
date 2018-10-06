import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Score from './Score'

import '../css/Card.css'

class Card extends Component {
  constructor() {
    super()


}


  render() {
    return (
      <article 
        className={this.props.data.classLabel}
        onClick={() => {
          this.props.processSelection(this.props.data)
        }}
      >
        <h1 className="location">{this.props.data.location}</h1>
        <section className="score-container">
          {Object.keys(this.props.data.stats).map((year) => {
            return (
              <Score 
                data={this.props.data.stats[year]}
                year={year}
                key={year}
              />
            )
          })}
        </section>
      </article>
    ) 
  }
}

Card.propTypes = {
  selection: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  processSelection: PropTypes.func.isRequired
}

export default Card;