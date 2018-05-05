import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true
    }

  }

  handleCardClick = () => {
    this.setState({ clicked: !this.state.clicked });
    console.log(this.props)
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
      )
    });
  
    return (
      <div className="card" onClick={ this.handleCardClick }> 
        <h3>
          { this.props.district.location }
        </h3>
        <ul>
          { listItems }
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object)
}



export default Card;