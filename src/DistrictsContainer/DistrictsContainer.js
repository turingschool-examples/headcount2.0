import React from 'react';
import './DistrictsContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types';

const DistrictsContainer = ({ districts, compareDistrict, districtsBeingCompared }) => {
		const districtCards = districts.map((district, i) => {
		return <DistrictCard  
							key={i} 
							{...district}
							district={district}
							compareDistrict={compareDistrict}
							districtsBeingCompared={districtsBeingCompared}
						/>
	})

	return (
		<div className='DistrictsContainer'>
			{ districtCards }
		</div>
	)
}

DistrictsContainer.propTypes = {
	districts: PropTypes.array.isRequired,
	compareDistrict: PropTypes.func,
	districtsBeingCompared: PropTypes.array
}

export default DistrictsContainer;