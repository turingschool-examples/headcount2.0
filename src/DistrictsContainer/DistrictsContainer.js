import React from 'react';
import './DistrictsContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';

const DistrictsContainer = ({districts}) => {
	const districtCards = districts.map((district) => {
		return <DistrictCard {...district}/>
	})

	return (
		<div className='DistrictsContainer'>
			{ districtCards }
		</div>
	)
}

export default DistrictsContainer;