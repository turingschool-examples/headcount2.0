import React, { Component } from 'react';

export default class DistrictRepository extends Component {
	constructor(districtData) {
		super();
		this.data = districtData.reduce((acc, obj) => {
			if (!acc[obj.Location]) {
				acc[obj.Location] = [];
			}
			if (acc[obj.Location]) {
				acc[obj.Location].push(obj);
			}
			return acc;
		}, {});
	}

	findByName(input) {
		const keys = Object.keys(this.data);
		const filteredArray = keys.filter(
			location => location.toUpperCase() === input.toUpperCase()
		);
		const foundLocation = filteredArray.pop().toUpperCase();
		if (input && foundLocation) {
			console.log(foundLocation);
			let districtObj = {
				location: foundLocation,
				data: this.data[foundLocation].map(
					obj => `${obj.TimeFrame}: ` + obj.Data
				)
			};
			return districtObj;
		}
	}
}
