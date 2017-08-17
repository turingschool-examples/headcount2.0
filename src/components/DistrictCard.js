import React from 'react';
// import { DistrictContainer } from './DistrictContainer';
import '../styles/DistrictRepository.css';

export const DistrictCard = ({ location, data, getData }) => {
	return (
		<div className="card">
			<h3>
				{location}
			</h3>
			<ul className="card-list">
				{data.map((year, i) => {
					console.log(year.Data);

					year.Data =
						typeof year.Data === 'number'
							? parseFloat(year.Data.toFixed(3))
							: 0;
					return (
						<li key={i}>
							{`${year.TimeFrame}: ${year.Data}`}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
