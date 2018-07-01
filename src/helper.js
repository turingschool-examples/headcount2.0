import kinderData from './data/kindergartners_in_full_day_program.js'

export default class DistrictRepository {
  constructor() {
    this.stats = kinderData.reduce((stats, stat) => {
      if (stat.Data === 'N/A') {
        stat.Data = 0
      }
      const statObj = { [stat.TimeFrame] : Number(parseFloat(stat.Data).toFixed(3)) }
        if (!stats[stat.Location]) {
          stats[stat.Location] = statObj
        } 
      stats[stat.Location] = { ...statObj, ...stats[stat.Location]}
      return stats
      }, {})
  }

  findByName = (search) => {
    let districtResults = {}
    if (!search) {
      return;
    }
    const statsKeys = Object.keys(this.stats);
    statsKeys.reduce((districtData, stat) => {
      if (stat.toUpperCase().includes(search.toUpperCase())) {
         districtData = {
          [stat]: this.stats[stat]
        };
        Object.assign(districtResults, districtData)
      } 
      return districtData;
    }, {});
    if 
    (Object.keys(districtResults).length === 0) {
      return;
    }
      return districtResults;
  }

  findAverage = (district) => {
    const distResults = this.findByName(district.toUpperCase())
    const statsVals = Object.values(distResults[district]);
    const totalVal = statsVals.reduce((sum, num) => {
      return sum += num
    }, 0)
    return Number(parseFloat(totalVal/statsVals.length).toFixed(3))
  }

  compareDistrictAverages = (district1, district2) => {
    const dist1Ave = this.findAverage(district1);
    const dist2Ave = this.findAverage(district2)
    const result = {
      [district1.toUpperCase()]: dist1Ave,
      [district2.toUpperCase()]: dist2Ave,
      compared: Number(parseFloat(dist1Ave / dist2Ave).toFixed(3))
    }
    return result
  }

  findAllMatches = (search) => {
    if(!search){
      return [Object.values(this.stats)]
    }
    return Object.keys(this.stats).filter(stat => stat.toUpperCase().includes(search.toUpperCase()));
  }
}
