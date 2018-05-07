import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: this.props.clickedState || false
    };
  }

  handleCardClick = () => {
    
    if (this.props.comparedCards.length === 2  && 
      !this.props.comparedCards.find(district => {
        return district.district.location === this.props.district.location;
      })) {
      return;
    }
    this.setState({ clicked: !this.state.clicked });
    this.props.updateCompareState(this.state.clicked, this.props);
  }

  render() {
    let districtKeys = Object.keys(this.props.district.stats);
    const listItems = districtKeys.map(( stat, index ) => {
      return (
        <li 
          key={ index }
          className={ this.props.district.stats[stat] > 0.5 ? 'greater-than' : 'less-than'}
        > { `${stat}: ${this.props.district.stats[stat]}` } </li>
      );
    });
  
    return (
      <div 
        className={this.state.clicked ? 'card clicked' : 'card'} 
        onClick={ this.handleCardClick }
      > 
        <h3>
          { this.props.district.location }
        </h3>
        <ul>
          { listItems }
        </ul>
      </div>
    );
  }
}

Card.propTypes = {
  district: PropTypes.object.isRequired,
  comparedCards: PropTypes.arrayOf(PropTypes.object),
  updateCompareState: PropTypes.func,
  clickedState: PropTypes.bool
};



export default Card;