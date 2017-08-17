import React from 'react';
import { DistrictCard } from './DistrictCard';
import '../styles/DistrictRepository.css';

const DistrictContainer = props => {
	console.log('fullData', props.fullData);
	console.log('foundData', props.foundData);
	return (
		<div className="district-container">
			{props.foundData.map(place =>
				<DistrictCard
					location={place}
					data={props.fullData[place]}
					getData={props.getData}
					key={Math.random()}
				/>
			)}
		</div>
	);
};

export default DistrictContainer;
