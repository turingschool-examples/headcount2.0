export default class DistrictRepository {
	constructor(data) {
		this.data = data
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
// console.log(schoolDistrict)
		return schoolDistrict
	}

	findByName(district) {
		if (!district) {
			return undefined
		} 
		const allDistricts = this.stats
		const districtLowerCase = district.toLowerCase()
		if (allDistricts[districtLowerCase]) {
			return allDistricts[districtLowerCase]
		}

		return undefined
	}

	findAllMatches(district) {
		const allDistricts = this.stats
		const districtKeys = Object.keys(allDistricts)

		if (!district) {
			return districtKeys.map((districtKey) => {
					return allDistricts[districtKey]
				})
		} else {
			let districtLowerCase = district.toLowerCase()
			return districtKeys.reduce((acc, districtKey) => {
				if (districtKey.includes(districtLowerCase)) {
					acc.push(allDistricts[districtKey])
				}
				return acc
			}, [])
		}
	}
}
