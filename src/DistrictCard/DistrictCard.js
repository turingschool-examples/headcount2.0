import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types'

const DistrictCard = ({ location, stats }) => {
	const statsKeys = Object.keys(stats)
	const schoolData = statsKeys.map((stat) => {
		
		return <p 
			className={(stats[stat] > 0.5) ? 'greater-than-point-5' : 'less-than-point-5'}>
			{stat}: {stats[stat]}</p>
	})
	console.log(schoolData)

	return (
		<div className='DistrictCard'>
			<h2 className='card-location'>{location}</h2>
			<p className='card-stats'>{schoolData}</p>
		</div>
	)
}

DistrictCard.proptypes = {
	location: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired
}

export default DistrictCard;

			// className={(stats[stat] > 0.5) ? '.greater-than-point-5' : '.less-than-point-5'}>
			// {stat}: {stats[stat]}</p>