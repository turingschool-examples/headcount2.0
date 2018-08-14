import kinderData from './data/kindergartners_in_full_day_program.js';


export default class DistrictRepository {
	constructor(stats) {
		this.stats = this.removeDuplicates(kinderData)
		
	}

	removeDuplicates = (kinderData) => {
		return kinderData.reduce((acc, school) => {
			let location = school.Location.toUpperCase();
			let roundedData= Math.round(school.Data * 1000) / 1000
			if(!acc[location]) {
				acc[location] = {location, stats: {school.TimeFrame = roundedData} 
			// acc[school.Location]= location
		}}
			return acc;

		}, {});

	}

	findByName = (districtName = '') => {
		console.log(this.stats)
		const upperDistrict = districtName.toUpperCase();
		
		if(!this.stats[upperDistrict]) {
			return undefined} 

		// console.log(this.stats)
		if (this.stats[upperDistrict]) {
			return this.stats[upperDistrict]
		}
		
	
		
		

	}

	findAllMatches = (districtName) => {
		return kinderData.reduce((acc, school) => {

		}, [])
	}


}
