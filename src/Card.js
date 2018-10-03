import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const dataKeys = Object.keys(this.props.schoolInfo)
    const schoolData = dataKeys.map((year) => {
      return <li>{year}: {this.props.schoolInfo[year]}</li>
    })

    return(
      <div>
        <h2>{this.props.schoolName}</h2>
        <ul>
          { schoolData }
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  schoolName: PropTypes.string.isRequired,
  schoolInfo: PropTypes.object.isRequired
}


export default Card;