import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types'

const DistrictCard = ({ location, stats }) => {
	const statsKeys = Object.keys(stats)
	const schoolData = statsKeys.map((stat) => {
		
		return <p>{stat}: {stats[stat]}</p>
	})
	console.log(schoolData)

	return (
		<div className='DistrictCard'>
			<h3 className='card-location'>{location}</h3>
			<p className='card-stats'>{schoolData}</p>
		</div>
	)
}

DistrictCard.proptypes = {
	location: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired
}

export default DistrictCard;