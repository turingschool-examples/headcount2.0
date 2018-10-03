export default class DistrictRepository {
	constructor(data) {
		this.data = data,
		this.stats = this.compileDistricts();
	}

	compileDistricts() { 
		const schoolDistrict = this.data.reduce((district, school) => {
			if (!district[school.Location.toLowerCase()]) {
			district[school.Location.toLowerCase()] = 
			{location: school.Location.toUpperCase(), 
			stats: {[school.TimeFrame]: school.Data}
		}
	}
			if (district[school.Location.toLowerCase()]) {
				district[school.Location.toLowerCase()] = 
				Object.assign({}, district[school.Location.toLowerCase()], 
					{stats: Object.assign({}, district[school.Location.toLowerCase()].stats, {[school.TimeFrame]: school.Data})})
			}

			return district
		}, {})	

		return schoolDistrict
	}

	findByName(district) {
		// console.log(this.stats)
		if (!district) {
			return undefined
		} 

		const districtLowerCase = district.toLowerCase()
		// console.log(districtLowerCase)
		if (this.stats[districtLowerCase]) {
			return this.stats[districtLowerCase]
		}

		return undefined
	}
}
