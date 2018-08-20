import './DistrictCard.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


class DistrictCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    this.props.addToCompare(this.props.location)
  }



  render() {
    return (
      <article onClick={ () => this.handleClick()} className={this.state.clicked ? 'clicked': 'not-clicked'}>
        <h3>{this.props.location}</h3>
        <ul>{Object.keys(this.props.stats).map(stat => (
    <p className={`${this.props.stats[stat] < .5 ? 'red-text': 'green-text'}`}>{stat}: {this.props.stats[stat]}</p>
  ))}</ul>
      </article>
    )
  }

}

DistrictCard.propTypes = {
  stats: PropTypes.object,
  location: PropTypes.string,
  addToCompare: PropTypes.func
}

export default DistrictCard;