import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  getStats = () => {
    let result = Object.keys(this.props.cardInfo.stats).map((currStat) => {
      let classString = 'low';
      if (this.props.cardInfo.stats[currStat] > 0.5) {
        classString = 'high';
      }
      return <li><span className="year">{currStat}</span> <span className="percentage" id={classString}>{this.props.cardInfo.stats[currStat]}</span></li>
  
    })
    return result
  } 

  handleChange = () => {
    this.props.displaySelected(this.props.cardInfo)
    if (this.props.compareCard1 === null || this.props.compareCard2 === null )
    this.setState({
      selected: !this.state.selected
      })
    if (this.props.compareCard1 !== null && this.props.compareCard2 !== null) {
      this.setState({
        selected: false
      })
    }
  }

  render() {
    let classString;
    this.state.selected === true ? classString = "selected" : classString = "not-selected"
    return(
      <div className="card-wrapper" id={classString} key={this.props.cardInfo.id} onClick={this.handleChange}>
        <h1 className="location">{this.props.cardInfo.location}</h1>
          <p>
            <h3>YEAR</h3> 
            <h3>% ENROLLMENT</h3>
          </p>
        <ul className="stats">{this.getStats()}</ul>
      </div>
    )
  }

  }
  

// Card.propTypes = {
//   selected: PropTypes.boolean.isRequired 
// }

export default Card;