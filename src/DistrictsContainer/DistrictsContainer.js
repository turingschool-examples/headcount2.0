import React from 'react';
import './DistrictsContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types'

const DistrictsContainer = ({ districts }) => {
	const districtKeys = Object.keys(districts)
	const districtCards = districtKeys.map((district) => {
	// console.log(districts[district].stats)
		return <DistrictCard  

							key={district} 
							schoolName={district}
							{...districts[district]}/>
	})

	return (
		<div className='DistrictsContainer'>
			{ districtCards }
		</div>
	)
}

DistrictsContainer.propTypes = {
	districts: PropTypes.object.isRequired
}

export default DistrictsContainer;