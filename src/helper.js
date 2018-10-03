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
      if (!statSet[statistic.Location.toUpperCase()]) {
        statSet[statistic.Location.toUpperCase()] = {
        stats: {
          [statistic.TimeFrame] : Math.round(statistic.Data * 1000)/1000},
          location : statistic.Location.toUpperCase()
        }
      } else {
        statSet[statistic.Location.toUpperCase()].stats = {
          ...statSet[statistic.Location.toUpperCase()].stats,
          [statistic.TimeFrame] : Math.round(statistic.Data * 1000)/1000
        }
      }
    return statSet
  }, {})
  return district
  }

  findByName = (schoolName) => {
    if(!schoolName || !this.stats[schoolName.toUpperCase()]){
      return undefined
    }
    return this.stats[schoolName.toUpperCase()]
  }

  findAllMatches = (string) => {
    let locationsList = Object.keys(this.stats);
    if (string === undefined){
      return locationsList.map(location => 
        this.stats[location]
      )
    } else {
        let filteredLocations = locationsList.filter(location => 
          location.includes(string.toUpperCase())
        )
        return filteredLocations.map(location => 
          this.stats[location]
        )}
  }
}
