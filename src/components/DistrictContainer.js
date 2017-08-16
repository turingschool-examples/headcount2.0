import React from 'react';
import Controls from './Controls';
import { DistrictCard } from './DistrictCard';

export const DistrictContainer = props => {
	return (
		<div className="district-container">
			{props.foundData.map(location =>
				<DistrictCard location={location} data={props.fullData[location]} />
			)}
		</div>
	);
};
