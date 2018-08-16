import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({districtData}) => {
	const districtValues = Object.values(districtData)
	
	const displayCards = districtValues.map((district, index) => (
		// let location = districtData.stats[district].location
		<Card
			location = {district.location}
			stats = {district.stats}
			key = {index}
		/>
	))

	

	return(
		<div>
			{displayCards}
		</div>
	)
}

CardContainer.propTypes = {
 	districtData: PropTypes.array.isRequired
}

export default CardContainer;