import React, { Component } from 'react';
import './styles/card.css';
import PropTypes from 'prop-types'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  
  cleanYears = (data) => {
    return Object.keys(data).map(year => {
      let roundedPerc = parseFloat(data[year].toFixed(2));
      if (roundedPerc < 0.5) {
        return <p key={year}>{year}: {roundedPerc}</p>
      } else {
        return <p key={year} className="goodSchool">{year}: {roundedPerc}</p>
      }       
    })
  }

  handleClick = (event) => {
    event.target.closest('div').classList.toggle('clicked');
    this.setState({selected: !this.state.selected})
    this.props.selectCard(this.props)
  }

  render(){
    return (
      <div className="card" onClick={this.handleClick}>
        <h2>{this.props.location}</h2>
        {this.cleanYears(this.props.data)}
      </div>
    )
  }
}


Card.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  selectCard: PropTypes.func
}

export default Card