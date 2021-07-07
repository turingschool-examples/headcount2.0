export default class DistrictRepository {
  constructor(data) {
    this.stats = this.filterDuplicates(data) || []
  }
  filterDuplicates(data) {
    const cleaner = data.reduce((cleaner, school) => {
      if(!cleaner[school.Location.toUpperCase()]) {
        cleaner[school.Location.toUpperCase()] = {
          location: school.Location.toUpperCase(),
          stats: {}
        } 
      } 
      cleaner[school.Location.toUpperCase()].stats[school.TimeFrame] = Math.round(school.Data*1000)/1000 || 0
     return cleaner
   }, {})
   return cleaner
  }

  findByName(name) {
    if(!name) {
      return 
    }  
    name = name.toUpperCase()
    return this.stats[name]
  }
  findAllMatches(name) {
    const schoolKeys = Object.keys(this.stats)
    if(!name) {
      return schoolKeys
    }
    name = name.toUpperCase()
    const matches = schoolKeys.filter(key => {
      return key.includes(name)
    })
    return matches
  }

  findAverage(match) {
    let averageKeys = Object.values(this.stats[match].stats)
    let average = averageKeys.reduce((average, value) => {
      average += value / averageKeys.length
      return average
    }, 0)
    return Math.round(average*1000)/1000
  }

  compareDistrictAverages(matchOne, matchTwo) {
    matchOne = matchOne.toUpperCase()
    matchTwo = matchTwo.toUpperCase()
    const avgOne = this.findAverage(matchOne)
    const avgTwo = this.findAverage(matchTwo)
    let comparedDistrict = {
      [matchOne]: avgOne,
      [matchTwo]: avgTwo,
      'compared': Math.round(avgOne / avgTwo*1000)/1000
    }
    return comparedDistrict
  }
}
