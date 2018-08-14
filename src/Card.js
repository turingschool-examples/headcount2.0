import React from 'react';

const Card = ({location, stats}) => {
	const displayStats = stats.map( stat => <h4>{stat}</h4>)
	return(
		<div>
			<h2>{location}</h2>
			<p>{displayStats}</p>

		</div>

	) 


}

export default Card;