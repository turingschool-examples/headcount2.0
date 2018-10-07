import React from 'react';
import './DistrictsContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types';

const DistrictsContainer = ({ districts, compareDistrict }) => {
		const districtCards = districts.map((district) => {
		return <DistrictCard  
							key={Math.random()} 
							schoolName={district.location}
							{...district}
							district={district}
							compareDistrict={compareDistrict}
						/>
	})

	return (
		<div className='DistrictsContainer'>
			{ districtCards }
		</div>
	)
}

DistrictsContainer.propTypes = {
	districts: PropTypes.array.isRequired
}

export default DistrictsContainer;