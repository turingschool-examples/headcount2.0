export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }


  cleanData(stats) {
    return stats.reduce((acc, district) => {
      if (!acc[district.Location]) {
        acc[district.Location] = {
          location: district.Location.toUpperCase(),
          [district.TimeFrame]: district.Data
        }
      } else {
        acc[district.Location][district.TimeFrame] = district.Data
      }
      return acc;
    }, {})
  }

  findByName(string) {
    if (string === undefined) {
      return undefined;
    } else {
      string = string.toUpperCase();
      
     
    }
  }

  compareDistrictAverages() {

  }
}

