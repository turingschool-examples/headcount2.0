import React, { Component } from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types';

class DistrictCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false
    }
  }

  selectCard = (location, stats) => {
    this.setState({selected: !this.state.selected}, 
      () => this.props.addSelectedDistrict(location, stats, this.state))
  }

  render() {
    const { stats, location } = this.props;
    const info = 
      Object.keys(stats.data).map(year => {
        return <p 
          className={stats.data[year] < .5 ? 'lower-half' : 'upper-half'}
          key={year}>{year} : {stats.data[year]}</p>;
      });

  return (
    <div 
      className='card' 
      onClick={() => this.selectCard(location, stats)}>
      <p>{location}</p>
      { info }
    </div>
    );
  }
}

DistrictCard.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  addSelectedDistrict: PropTypes.func.isRequired
};

export default DistrictCard;