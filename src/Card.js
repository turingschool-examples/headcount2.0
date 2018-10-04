import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dataKeys = Object.keys(this.props.schoolInfo)
    const schoolData = dataKeys.map((year) => {
      if (this.props.schoolInfo[year] > 0.5) {
        return <li className="greater">{year}: {this.props.schoolInfo[year]}</li>
      } else if (this.props.schoolInfo[year] < 0.5) {
        return <li className="lesser">{year}: {this.props.schoolInfo[year]}</li>
      } else if (this.props.schoolInfo[year] === 0.5) {
        return <li className="equal">{year}: {this.props.schoolInfo[year]}</li>
      }
    })

    return(
      <div className="card">
        <h3 className="card-title">{this.props.schoolName}</h3>
        <ul className="data-list">
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