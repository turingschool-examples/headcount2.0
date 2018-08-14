export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data) || []
  }
  removeDuplicates = (data) => {
    return data.reduce((cleanData, data) => {
      if (!cleanData[data.Location]) {
        cleanData[data.Location] = []
      } else {
      cleanData[data.Location].push(data)
      }
      return cleanData
    }, {})
  }

  findByName = (name) => {
    const statsKeys = Object.keys(this.stats)
    if (statsKeys.includes(name)) {
      return statsKeys.reduce((districtObject, district) => {
        if (name === district) {
            districtObject.location = district.toUpperCase()
            districtObject.data = this.stats[name]
          }
            return districtObject
          }, {})
      }
    }
  }
