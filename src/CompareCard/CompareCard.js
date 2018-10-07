import React from 'react';
import './CompareCard.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types';

const CompareCard = ({ districtsBeingCompared }) => {
	if (districtsBeingCompared) {
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
}

CompareCard.propTypes = {
	districtsBeingCompared: PropTypes.array
}

export default CompareCard;