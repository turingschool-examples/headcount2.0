import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({districtData, selectLocation, selected}) => {
	const districtValues = Object.values(districtData)
	
	const displayCards = districtValues.map((district, index) => (
		<Card
			location = {district.location}
			stats = {district.stats}
			key = {index}
			selectLocation = {selectLocation}
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