import React, { Component } from 'react'

import Score from './Score'

import '../css/Card.css'

class Card extends Component {
  constructor() {
    super()

    this.state = {
      classLabel: 'card'
    }
  }

  selectCard = () => {
    if (this.state.classLabel === 'card') {
      this.setState({
        classLabel: 'card selected'
      })
    } else {
      this.setState({
        classLabel: 'card'
      })
    }
    this.props.processSelection(this.props.data)
  }

  render() {
    return (
      <article 
        className={this.state.classLabel}
        onClick={() => {
          this.selectCard()
        }}
      >
        <h1 className="location">{this.props.data.location}</h1>
        {Object.keys(this.props.data.stats).map((year) => {
          return (
            <Score 
              data={this.props.data.stats[year]}
              year={year}
              key={year}
            />
          )
        })}
      </article>
    ) 
  }
}

export default Card;