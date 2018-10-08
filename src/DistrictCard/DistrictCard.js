import React, {Component} from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types';

class DistrictCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false
		}
	}

	selectCard = (district) => {
		this.setState({ selected: !this.state.selected})
		this.props.compareDistrict(district)
	}

	render() {
		const { location, stats, district, compareDistrict, districtsBeingCompared } = this.props;
		const statsKeys = Object.keys(stats)
		const schoolData = statsKeys.map((stat) => {

		return <p 
			key={Math.random()}
			className={(stats[stat] > 0.5) ? 'greater-than-point-5' : 'less-than-point-5'}
			>
			{stat}: {stats[stat]} 
		</p>
	})

	if (compareDistrict) {
			return (
			<div 
				className={ (this.state.selected) ? 'card-highlight' : 'DistrictCard'} 
				onClick={() => this.selectCard(district)}>
				<h3 className='card-location'>{location}</h3>
				{schoolData}
			</div>
		)
		} else {
			return (
				<div className='card-highlight'>
					<h3 className='card-location'>{location}</h3>
					{schoolData}
				</div>
			)
		}

	}
}




DistrictCard.proptypes = {
	location: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
	district: PropTypes.object.isRequired,
	compareDistrict: PropTypes.func,
	districtsBeingCompared: PropTypes.array
}

export default DistrictCard;
