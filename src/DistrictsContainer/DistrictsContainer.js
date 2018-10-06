import React from 'react';
import './DistrictsContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types'

const DistrictsContainer = ({ districts }) => {
	// const districtKeys = Object.keys(districts)
	// const districtCards = districtKeys.map((district) => {
		const districtCards = districts.map((district) => {
	// console.log(districts[district].stats)
		return <DistrictCard  

							key={district.location} 
							schoolName={district.location}
							{...district}/>
	})

	return (
		<div className='DistrictsContainer'>

		</div>
	)
}

// DistrictsContainer.propTypes = {
// 	districts: PropTypes.object.isRequired
// }

export default DistrictsContainer;