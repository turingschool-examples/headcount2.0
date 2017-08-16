import React from 'react';
import { DistrictCard } from './DistrictCard';
import '../styles/DistrictRepository.css';

const DistrictContainer = ({ location, fullData, foundData, getData }) => {
	return (
		<div className="district-container">
			{foundData.map(place =>
				<DistrictCard
					location={place}
					data={fullData[place]}
					getData={getData}
				/>
			)}
		</div>
	);
};

export default DistrictContainer;
