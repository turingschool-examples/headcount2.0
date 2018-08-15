import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({location, stats}) => {
	const displayStats = Object.entries(stats).map(stat => <h4 className={`lessThan ${stat[1] > 0.5 ? 'greaterThan' : 'lessThan'}`}>{stat[0]}: {stat[1]}</h4>)
	return(
		<div className="cards">
			<h2 className="location">{location}</h2>
			<p className="stats">{displayStats}</p>

		</div>
	) 
}

Card.propTypes = {
	location: PropTypes.string.isRequired, 
	stats: PropTypes.object.isRequired
}


export default Card;