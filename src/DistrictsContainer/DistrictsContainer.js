import React from 'react';
import './DistrictsContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types'

const DistrictsContainer = ({ districts }) => {
	// console.log(districts)
	// const districtKeys = Object.keys(districts)
	// const districtCards = districtKeys.map((district) => {
		const districtCards = districts.map((district) => {
	// console.log(district)
		return <DistrictCard  
							key={Math.random()} 
							schoolName={district.location}
							{...district}
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