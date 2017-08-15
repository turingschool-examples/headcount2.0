import React, { Component } from 'react';

export default class DistrictRepository extends Component {
	constructor(rawData) {
		super();
		this.data = this.getDistrictData(rawData);
	}

	findAllMatches(userInput) {
		if (userInput) {
			userInput = userInput.toUpperCase();
		}

		const dataSet = this.data;
		const districtKeys = Object.keys(dataSet).map(key => {
			return key.toUpperCase();
		});

		if (!userInput) {
			return districtKeys;
		}

		const filteredMatches = districtKeys.filter(district =>
			district.includes(userInput)
		);

		return filteredMatches;
	}

	findByName(userInput) {
		if (userInput) {
			userInput = userInput.toUpperCase();
		}
		const dataSet = this.data;
		const districtKeys = Object.keys(dataSet).map(key => {
			return key.toUpperCase();
		});

		let districtName = dataSet[userInput];
		let answer;

		if (districtKeys.includes(userInput)) {
			return (answer = {
				location: userInput,
				data: this.getData(districtName)
			});
		}
	}

	getData(districtInfo) {
		districtInfo = districtInfo.reduce((acc, item) => {
			if (item.Data === 'N/A') {
				item.Data = 0;
			}
			acc[item.TimeFrame] = parseFloat(item.Data.toFixed(3));
			return acc;
		}, {});
		return districtInfo;
	}

	getDistrictData(rawData) {
		const cleanData = rawData.reduce((acc, obj) => {
			if (!acc[obj.Location]) {
				acc[obj.Location] = [];
			}
			if (acc[obj.Location]) {
				acc[obj.Location].push(obj);
			}
			return acc;
		}, {});
		return cleanData;
	}
}
