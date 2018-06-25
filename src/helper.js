export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = this.cleanedData(kinderData)
  }

  cleanedData = (kinderData) => {
    return kinderData.reduce((cleanedKinder, school) => {
      const upperCaseDistrict = school.Location.toUpperCase()

      if (!cleanedKinder[upperCaseDistrict]) {
        cleanedKinder[upperCaseDistrict] = {
          location: upperCaseDistrict,
          stats: {},
          selected: false
        }
      }

      return cleanedKinder
    }, [])
  }

  findByName = (location) => {
    if(!location) {
      return undefined
    }
    const upperCaseLocation = location.toUpperCase()
    return this.stats[upperCaseLocation]
  }
}
