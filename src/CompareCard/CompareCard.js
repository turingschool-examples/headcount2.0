import React from 'react';
import './CompareCard.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import Proptypes from 'prop-types';

const CompareCard = ({ districtsBeingCompared }) => {
	const districtCards = districtsBeingCompared.map((district) => {
		return <DistrictCard 
							key={Math.random()}
							schoolName={district.location}
							{...district}
						/>
	})

	return (
		<div className='CompareCard'>
			{ districtCards }
		</div>
	)
}

CompareCard.propTypes = {
	districtsBeingCompared: Proptypes.array.isRequired
}

export default CompareCard;