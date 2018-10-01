export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }

  cleanData(stats){
     return stats.reduce((acc, district) => {
      if (!acc[district.Location]) {
        acc[district.Location] = {
          [district.TimeFrame] : district.Data
        }
      } else {
        Object.assign(acc[district.Location], {[district.TimeFrame] : district.Data})
      }
    return acc
    }, {})
  }
  findByName(name) {

    if (name == Object.keys(this.stats).toUpperCase()) {
      return true
    } else {
      return undefined
    }

  }
}

  

