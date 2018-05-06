import React, { Component } from 'react';
import '../styles/ComparisonCard.css';
import PropTypes from 'prop-types';

class ComparisonCard extends Component {
  constructor({ selectedCards, districts }) {
    super();
  }

  averageSelected = () => {
    const combinedAverage = (this.props.districts.findAverage(this.props.selectedCards[0].location) / this.props.districts.findAverage(this.props.selectedCards[1].location));
    const roundedAvg = Math.round(1000 * combinedAverage) / 1000;
    return roundedAvg;
  }

  render() {
    if (this.props.selectedCards && this.props.selectedCards.length === 2) {
      return <article className="comparisonCard card">
        <div>
          <h2>{this.props.selectedCards[0].location}</h2>
          <hr />
          <h3>{this.props.districts.findAverage(this.props.selectedCards[0].location)}</h3>
        </div>
        <div>
          <h4>{'<'} + {this.averageSelected(this.props.selectedCards)} {'>'}</h4>
        </div>
        <div>
          <h2>{this.props.selectedCards[1].location}</h2>
          <hr />
          <h3>{this.props.districts.findAverage(this.props.selectedCards[1].location)}</h3>
        </div>
      </article>;
    }
    return null;
  };
}

ComparisonCard.propTypes = {
  districts: PropTypes.string.isRequired,
  selectedCards: PropTypes.array.isRequired
};

export default ComparisonCard;
