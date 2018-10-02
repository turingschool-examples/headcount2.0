export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }


  cleanData(stats) {
    return stats.reduce((acc, district) => {
      if (!acc[district.Location.toUpperCase()]) {
        acc[district.Location.toUpperCase()] = {
          [district.TimeFrame]: Math.round(district.Data * 1000) / 1000
        }
      } else {
        acc[district.Location.toUpperCase()][district.TimeFrame] = Math.round(district.Data * 1000) / 1000
      }
      return acc;
    }, {})
  }

  findByName(string) {
    if (string) {
      string = string.toUpperCase()
      return Object.keys(this.stats).includes(string) 
        ? { location: string, stats: this.stats[string]}
        : undefined 
    } else {
      return undefined;
    }
  }

  compareDistrictAverages() {

  }
}

