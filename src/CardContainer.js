import React from 'react';
import Card from './Card';

const CardContainer = ({districtData}) => {
	const districtKeys = Object.keys(districtData.stats)
	
	const displayCards = districtKeys.map(district => (
		// let location = districtData.stats[district].location
		<Card
			location = {districtData.stats[district].location}
			stats = {Object.entries(districtData.stats[district].stats)}
		/>
	))

	

	return(
		<div>
			{displayCards}
		</div>
	)
}

export default CardContainer;