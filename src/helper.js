export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = this.cleanedData(kinderData)
  }

  cleanedData = (kinderData) => {
    const cleanedKinder = kinderData.reduce((cleanedKinder, school) => {
      const upperCaseDistrict = school.Location.toUpperCase()

      if (!cleanedKinder[upperCaseDistrict]) {
        cleanedKinder[upperCaseDistrict] = {
          location: upperCaseDistrict,
          stats: {},
          selected: false
        }
      }

      if (!cleanedKinder[upperCaseDistrict].stats[school.TimeFrame] && typeof(school.Data) !== 'string') {
        cleanedKinder[upperCaseDistrict].stats[school.TimeFrame] = 
        Math.round(1000 * school.Data)/1000
      } else {
        cleanedKinder[upperCaseDistrict].stats[school.TimeFrame] = 0
      }

      return cleanedKinder
    }, {})

    return Object.keys(cleanedKinder).map(school => {
      return cleanedKinder[school]
    })
  }

  findByName = (location) => {
    if(!location) {
      return undefined
    }
    const upperCaseLocation = location.toUpperCase()
    return this.stats.find(school => school.location === upperCaseLocation)
  }

  findAllMatches = (location) => {
    if (!location) {
      return this.stats
    } else {
      const upperCaseLocation = location.toUpperCase()

      return this.stats.filter(school => {
        return school.location.includes(upperCaseLocation)
      })
    }
  }
}
