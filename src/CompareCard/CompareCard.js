import React from 'react';
import './CompareCard.css';
import DistrictCard from '../DistrictCard/DistrictCard.js';
import PropTypes from 'prop-types';

const CompareCard = ({ districtsBeingCompared, districtAverages }) => {
	if (districtsBeingCompared) {
	const districtCards = districtsBeingCompared.map((district) => {
		return <DistrictCard 
							key={district.location}
							schoolName={district.location}
							{...district}
						/>
	})

	if (districtsBeingCompared.length === 2 && districtAverages) {
		return (
			<div className='CompareCard'>
				{ districtCards[0] }
				<div className='average-card'>
					<h3 className='location'>{districtsBeingCompared[0].location}</h3>
					<p className='label-average'>Average:</p>
					<p className='average'>{districtAverages[districtsBeingCompared[0].location]}</p>
					<p className='label-compared'>Compared:</p>
					<h3 className='compared'>{districtAverages.compared}</h3>
					<h3 className='location'>{districtsBeingCompared[1].location}</h3>
					<p className='label-average'>Average:</p>
					<p className='average'>{districtAverages[districtsBeingCompared[1].location]}</p>
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
	districtsBeingCompared: PropTypes.array,
	districtAverages: PropTypes.object
}

export default CompareCard;