import React from 'react';
import Card from '../Card/Card.js';
import ComparisonCard from '../ComparisonCard/ComparisonCard.js'
import PropTypes from 'prop-types';

const CompareContainer = ({searchValue, selectLocation, selectedLocations, comparedAverage}) => {
	const comparedDistricts = selectedLocations.map(
		(district, index) => { 
		return <Card {...district} 
			key={index}
			className={index < 1 ? 'left' : 'right'}
			searchValue={searchValue} 
      selectLocation={selectLocation}
			selectedLocations={selectedLocations} />
	});


	return (
		<div className="Compared-container">
			{comparedDistricts}
			{
				selectedLocations.length === 2 && 
				<ComparisonCard comparedAverage={comparedAverage} />
			}		
		</div>
	);
}

CompareContainer.propTypes = {
	searchValue: PropTypes.string.isRequired,
	selectLocation: PropTypes.func.isRequired,
	selectedLocations: PropTypes.array.isRequired,
	comparedAverage: PropTypes.object
};

export default CompareContainer;