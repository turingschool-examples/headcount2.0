import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({districtData}) => {
	const districtKeys = Object.values(districtData)
	
	const displayCards = districtKeys.map(district => (
		// let location = districtData.stats[district].location
		<Card
			location = {district.location}
			stats = {district.stats}
		/>
	))

	

	return(
		<div>
			{displayCards}
		</div>
	)
}

export default CardContainer;