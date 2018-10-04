export default class DistrictRepository {
	constructor(data) {
		this.data = data,
		this.stats = this.compileDistricts();
	}

	compileDistricts() { 

		const schoolDistrict = this.data.reduce((district, location) => {
			const school = location.Location.toLowerCase()
			const schoolYear = location.TimeFrame
			const schoolData = Math.round(location.Data * 1000)/1000 || 0;

			if (!district[school]) {
			district[school] = 
				{location: location.Location.toUpperCase(), 
					stats: {[schoolYear]: schoolData}
		}
	}
			if (district[school]) {
				district[school] = 
				Object.assign({}, district[school], 
					{stats: Object.assign({}, 
						district[school].stats, 
							{[schoolYear]: schoolData})})
			}

			return district
		}, {})	
console.log(schoolDistrict)
		return schoolDistrict
	}

	findByName(district) {
		// console.log(this.stats)
		if (!district) {
			return undefined
		} 

		const districtLowerCase = district.toLowerCase()
		if (this.stats[districtLowerCase]) {
		// console.log(this.stats[districtLowerCase].stats)
			return this.stats[districtLowerCase]
		}

		return undefined
	}

	findAllMatches(district) {
		const allDistricts = this.stats
		const districtKeys = Object.keys(this.stats)
		const districtObjects = districtKeys.map((schoolDistrict) => {
				return allDistricts[schoolDistrict]
			})

		if (!district) {
			return districtObjects
		}

		const districtLowerCase = district.toLowerCase()

		if (!districtKeys.includes(districtLowerCase)) {
			return []
		}

		if (districtKeys.includes(districtLowerCase)) {
			const filteredDistricts = districtObjects.filter((schoolDistrict) => {
				const schoolDistrictLowerCase = schoolDistrict.location.toLowerCase()

				if (schoolDistrictLowerCase.includes(districtLowerCase)) {
				return schoolDistrict
				}
			})
			return filteredDistricts
		}

	}


}
