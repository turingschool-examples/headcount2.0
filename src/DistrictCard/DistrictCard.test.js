import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from './DistrictCard.js';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<DistrictCard />, div);
})

it('renders', () => {

})