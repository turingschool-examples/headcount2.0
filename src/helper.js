export default class DistrictRepository {
  constructor(data) {
    this.data = this.removeDuplicates(data) || []
  }
  
  removeDuplicates = (districtData) => {
    return districtData.reduce((cleanData, districtData) => {
      if (!cleanData[districtData.Location]) {
        cleanData[districtData.Location.toUpperCase()] = {
          location: districtData.Location.toUpperCase(),
          stats: {},
        }
      }
      cleanData[districtData.Location.toUpperCase()].stats[districtData.TimeFrame] = Math.round(1000*districtData.Data)/1000 || 0
      return cleanData
    }, {})
  }

  findByName = (name) => {
    if (name) {
      const newName = name.toUpperCase()
      return this.data[newName]
    }
  }

  findAllMatches = (name) => {
    const statsKeys = Object.keys(this.stats)
    const newName = name.toUpperCase()
    return statsKeys.filter((district) => {
      return district.includes(newName)
    })
  }
}

