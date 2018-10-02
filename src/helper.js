import KinderData from './data/kindergartners_in_full_day_program.js'

export default class DistrictRepository {
  constructor(dataSet) {
    this.dataSet = dataSet
    this.stats = this.makeStats()
  }

  makeStats() {
    let district = this.dataSet.reduce((statSet, statistic) => {
      if(statistic.Data === "N/A"){
        statistic.Data = 0
      }
      if (!statSet[statistic.Location]) {
        statSet[statistic.Location.toUpperCase()] = {
        stats: {
          [statistic.TimeFrame] : Math.round(statistic.Data * 1000)/1000},
          location : statistic.Location.toUpperCase()
        }
      } else {
        statSet[statistic.Location].stats = {
          ...statSet[statistic.Location].stats,
          [statistic.TimeFrame] : Math.round(statistic.Data * 1000)/1000
        }
      }
    return statSet
  }, {})
  return district
  }

  findByName(schoolName) {
    if(!schoolName){
      return undefined
    }
    return this.stats[schoolName.toUpperCase()]
  }
}
