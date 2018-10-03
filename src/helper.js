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
}
