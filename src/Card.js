import React from 'react';

const Card = ({location, stats}) => {
	const displayStats = Object.entries(stats).map( stat => <h4>{stat[0]}: {stat[1]}</h4>)
	return(
		<div>
			<h2>{location}</h2>
			<p>{displayStats}</p>

		</div>

	) 


}

export default Card;