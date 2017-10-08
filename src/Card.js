import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardcss from './styles/Card.css';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      class: ''
    };
    this.classSwitch = this.classSwitch.bind(this);
  }

  classSwitch(value) {
    return value >= 0.5 ? 'blue' : 'red';
  }

  render() {
    let { districtName, districtObject, onCardClick } = this.props;
    return (
      <article onClick={() => onCardClick(districtName)}>
        <h3>{districtName}</h3>
        <ul>
          {
            Object.keys(districtObject).map( (item, index) =>
              <li key={index} className={this.classSwitch(districtObject[item])}>{item}: {districtObject[item]}</li> )
          }
        </ul>
      </article>
    )
  }
}

// const Card = ({districtName, districtObject, onCardClick}) => (
//   <article onClick={() => onCardClick(districtName)}>
//     <h3>{districtName}</h3>
//     <ul>
//       {
//         Object.keys(districtObject).map( (item, index) =>
//           <li key={index} className={() => this.classSwitch()}>{item}: {districtObject[item]}</li> )
//       }
//     </ul>
//   </article>
// );

Card.propTypes = {
  districtName: PropTypes.string,
  districtObject: PropTypes.object,
  onCardClick: PropTypes.func
};

// export default Card;
