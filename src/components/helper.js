export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }

  cleanData(stats) {
    return stats.reduce((acc, district) => {
      const TimeFrame = district.TimeFrame;
      const Data = Math.round(district.Data * 1000) / 1000 || 0
      const location = district.Location.toUpperCase();
      if (!acc[location]) {
        acc[location] = {
          [TimeFrame]: Data
        }
      } else {
        acc[location][TimeFrame] = Data
      }
      return acc;
    }, {})
  }

  findByName(string) {
    if (string) {
      string = string.toUpperCase()
      return Object.keys(this.stats).includes(string) 
        ? { location: string, stats: this.stats[string]}
        : [] 
    } else {
      return undefined;
    }
  }
 
  findAllMatches(string) {
    if (string) {
      string = string.toUpperCase();
      return Object.keys(this.stats).reduce((acc, district) => {
        if (district.includes(string)) {
          acc.push({ location: district, stats: this.stats[district]})
        }
        return acc;
      }, [])
    } else { 
      return Object.keys(this.stats).map(district => {
        return { stats: this.stats[district], location: district}
      })
    }
  }

  compareDistrictAverages() {

  }
}

