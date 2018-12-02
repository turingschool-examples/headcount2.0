export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, item) => {
      const upperCaseLocation = item.Location.toUpperCase();
      let dataNumber;
      if (typeof item.Data === 'string') {
        dataNumber = 0;
      } else {
        dataNumber = parseFloat(item.Data.toFixed(3));
      }

      if (!obj[upperCaseLocation]) {
        obj[upperCaseLocation] = {
          location: upperCaseLocation, 
          stats: {[item.TimeFrame]: dataNumber}
        }
      } else {
        obj[upperCaseLocation].stats[item.TimeFrame] = dataNumber
      }
      return obj
    }, {})
  }

  findByName(name) {
    if (!name) {
      return undefined;
    } else {
      const upperCaseName = name.toUpperCase();
      const statsKeys = Object.keys(this.stats);
      const foundName = statsKeys.find((key) => {
        return key.includes(upperCaseName);
      })
      return this.stats[foundName]
    }
  }

  findAllMatches(str) {
    if (!str) {
      let statsKeys = Object.keys(this.stats);
      return statsKeys.map((key) => {
        return this.stats[key];
      })

    } else {
      const upperCaseStr = str.toUpperCase();
      const statsKeys = Object.keys(this.stats);
      const filteredStats = statsKeys.filter((key) => {
        return key.includes(upperCaseStr);
      }).map((key) => {
        return this.stats[key];
      })
      return filteredStats;
    }
  }

  findAverage(districtName) {
    let foundName = this.findByName(districtName);
    let statsKeys = Object.keys(foundName.stats);
    let totalStat = statsKeys.reduce((total, key) => {
      total += foundName.stats[key];
      return total;
    }, 0)
    const avgStat = parseFloat((totalStat / statsKeys.length).toFixed(3));
    return avgStat;
  }

  compareDistrictAverages(district1, district2) {
    const dist1 = this.findAverage(district1.toUpperCase());
    const dist2 = this.findAverage(district2.toUpperCase());
    const comparedAvg = parseFloat((dist1 / dist2).toFixed(3));

    return {
      [district1.toUpperCase()]: dist1, 
      [district2.toUpperCase()]: dist2, 
      compared: comparedAvg
    }
  }
}