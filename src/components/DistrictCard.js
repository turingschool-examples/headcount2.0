import React from 'react';
import { DistrictContainer } from './DistrictContainer';

export const DistrictCard = ({ location, data }) => {
	console.log(data);
	return (
		<div>
			<h3>
				{location}
			</h3>
			<ul>
				{data.map(year => {
					return (
						<li>
							{`${year.TimeFrame}: ${year.Data}`}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
