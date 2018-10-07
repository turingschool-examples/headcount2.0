import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types';

const DistrictCard = ({ location, stats }) => {
	const statsKeys = Object.keys(stats)
	const schoolData = statsKeys.map((stat) => {
		// console.log(stat)
		return <p 
			key={Math.random()}
			className={(stats[stat] > 0.5) ? 'greater-than-point-5' : 'less-than-point-5'}>
			{stat}: {stats[stat]} 
		</p>
	})
	

	return (
		<div className='DistrictCard' onClick=''>
			<h3 className='card-location'>{location}</h3>
			{schoolData}
		</div>
	)
}

DistrictCard.proptypes = {
	location: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired
}

export default DistrictCard;
