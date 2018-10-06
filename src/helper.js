import KinderData from './data/kindergartners_in_full_day_program.js'

export default class DistrictRepository {
  constructor(dataSet) {
    this.dataSet = dataSet
    this.stats = this.makeStats()
  }

  makeStats = () => {
    let district = this.dataSet.reduce((statSet, statistic) => {
      if (!statSet[statistic.Location.toUpperCase()]) {
        statSet[statistic.Location.toUpperCase()] = {
        stats: {
          [statistic.TimeFrame] : Math.round(statistic.Data * 1000)/1000 || 0},
          location : statistic.Location.toUpperCase()
        }
      } else {
        statSet[statistic.Location.toUpperCase()].stats = {
          ...statSet[statistic.Location.toUpperCase()].stats,
          [statistic.TimeFrame] : Math.round(statistic.Data * 1000)/1000 || 0
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

  findAverage = (school) => {
    const schoolValues = Object.values(this.stats[school].stats);
    const schoolAverage = schoolValues.reduce((sum, stat) =>{
      sum += stat;
      return sum}
      , 0)/schoolValues.length
    return Math.round(schoolAverage * 1000)/1000
  }

  compareDistrictAverages = (school1, school2) => {
    const upcase1 = school1.toUpperCase();
    const upcase2 = school2.toUpperCase();
    const avg1 = this.findAverage(upcase1);
    const avg2 = this.findAverage(upcase2);
    return {
      [upcase1]: avg1,
      [upcase2]: avg2,
      compared: Math.round(avg1/avg2 * 1000)/1000
    }
  }
}