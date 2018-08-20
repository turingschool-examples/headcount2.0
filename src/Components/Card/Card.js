import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({location, stats, selectLocation, selected}) => {
	const displayStats = Object.entries(stats).map((stat, index) => 
		<h4 key={index} className={`lessThan ${stat[1] > 0.5 ? 'greaterThan' : 'lessThan'}`}>
			{stat[0]}: {stat[1]}
		</h4>)
	


	return(
		<div 
			className= 
			{`Card ${selected} ? 'selected' ? ''}`}
			onClick={()=> {selectLocation(location)}}
			className='cards'
			>
			<h2 className="location">{location}</h2>
			<p className="stats">{displayStats}</p>
		</div>
	) 
}

Card.propTypes = {
	location: PropTypes.string, 
	stats: PropTypes.object
}


export default Card;