import kinderData from '../../data/kindergartners_in_full_day_program.js';


export default class DistrictRepository {
	constructor(stats) {
		this.stats = this.removeDuplicates(kinderData)
		
	}

	removeDuplicates = (kinderData) => {

		return kinderData.reduce((acc, school) => {
			// console.log(this.stats)
			let location = school.Location.toUpperCase();
			let schoolYear = school.TimeFrame
			let roundedData= Math.round(school.Data * 1000) / 1000
			if(!acc[location]) {
				acc[location] = {location, stats: {} 
		}}
			acc[location].stats[schoolYear] = roundedData || 0
			return acc;

		}, {});

	}

	findByName = (districtName = '') => {
		const upperDistrict = districtName.toUpperCase();
		
		if(!this.stats[upperDistrict]) {
			return undefined} 

		if (this.stats[upperDistrict]) {
			return this.stats[upperDistrict]
		}
	}

	findAllMatches = (districtName) => {
		let statsValues = Object.values(this.stats)
		if(!districtName) {
			return statsValues
		}
		return statsValues.reduce((acc, district) => {
		const upperDistrict = districtName.toUpperCase();
			if(district.location.includes(upperDistrict)) {
				acc.push(district)
			}
			return acc
		}, [])

		
	}

	findAverage = () => {
		
	}


}
