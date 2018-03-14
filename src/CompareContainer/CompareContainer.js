import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CompareContainer = ({searchValue, selectLocation, selectedLocations}) => {
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
		</div>
	);
}

CompareContainer.propTypes = {
	searchValue: PropTypes.string.isRequired,
	selectLocation: PropTypes.func.isRequired,
	selectedLocations: PropTypes.array.isRequired
};

export default CompareContainer;