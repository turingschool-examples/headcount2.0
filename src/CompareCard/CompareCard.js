import React from 'react';
import './CompareCard.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types';

const CompareCard = ({ districtsBeingCompared, stopComparingDistrict }) => {
	const districtCards = districtsBeingCompared.map((district) => {
		return <DistrictCard 
							key={Math.random()}
							schoolName={district.location}
							{...district}
							stopComparingDistrict={stopComparingDistrict}
						/>
	})

	return (
		<div className='CompareCard'>
			{ districtCards }
		</div>
	)
}

CompareCard.propTypes = {
	districtsBeingCompared: PropTypes.array.isRequired
}

export default CompareCard;