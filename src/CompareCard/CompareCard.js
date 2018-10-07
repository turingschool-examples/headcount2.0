import React from 'react';
import './CompareCard.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types';

const CompareCard = ({ districtsBeingCompared, districtAverages }) => {
	if (districtsBeingCompared) {
	const districtCards = districtsBeingCompared.map((district) => {
		return <DistrictCard 
							key={Math.random()}
							schoolName={district.location}
							{...district}
						/>
	})

	if (districtsBeingCompared.length === 2 && districtAverages) {
		console.log(districtAverages)
		return (
			<div className='CompareCard'>
				{ districtCards[0] }
				<div className='average-card'>
					<h3>{districtsBeingCompared[0].location}</h3>
					<p>{districtAverages[districtsBeingCompared[0].location]}</p>
					<h3>{districtAverages.compared}</h3>
					<p>{districtAverages[districtsBeingCompared[1].location]}</p>
					<h3>{districtsBeingCompared[1].location}</h3>
				</div>
				{ districtCards[1] }
			</div>
		)
	} else {
			return (
				<div className='CompareCard'>
					{ districtCards }
				</div>
			)
		}

	} 
}

CompareCard.propTypes = {
	districtsBeingCompared: PropTypes.array
}

export default CompareCard;