import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types';

const DistrictCard = ({ location, stats, district, compareDistrict }) => {

	const statsKeys = Object.keys(stats)
	const schoolData = statsKeys.map((stat) => {
		// console.log(stat)
		return <p 
			key={Math.random()}
			className={(stats[stat] > 0.5) ? 'greater-than-point-5' : 'less-than-point-5'}>
			{stat}: {stats[stat]} 
		</p>
	})
	
if (compareDistrict) {
		return (
		<div className='DistrictCard' onClick={ () => compareDistrict(district) }>
			<h3 className='card-location'>{location}</h3>
			{schoolData}
		</div>
	)
	} else {
		return (
			<div className='DistrictCard'>
				<h3 className='card-location'>{location}</h3>
				{schoolData}
			</div>
		)
	}

}

DistrictCard.proptypes = {
	location: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
	district: PropTypes.object.isRequired,
	compareDistrict: PropTypes.func
}

export default DistrictCard;
