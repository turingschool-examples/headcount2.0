export default class DistrictRepository {
  constructor(stats){
    this.stats = this.cleanData(stats)
  }
  cleanData = (stats) => {
    return stats.reduce((acc, district) => {
    let roundedData = (Math.round(district.Data * 1000) / 1000 || 0)
      if(!acc[district.Location.toUpperCase()]){
        acc[district.Location.toUpperCase()] = {
          [district.TimeFrame]: roundedData
        } 
    } else { 
       Object.assign( acc[district.Location.toUpperCase()], {[district.TimeFrame]: roundedData})  
    }
      return acc 
    }, {})
  }
  
  findAllMatches = (string, stats) => {
  if(string){
      string = string.toUpperCase()
    }
  if(!string){
    let allData = Object.keys(this.stats).map(stat => {
      return {[stat]: this.stats[stat]}
    })
    return allData;
  } else {
    let matchResult = []
    let allLocations = Object.keys(this.stats).filter(stat => {
      if(stat.includes(string)) {
        matchResult.push({[stat]: this.stats[stat]})
      }
    })
    return matchResult;
    }
  }

  findByName = (str) => {
    if(str){
      str = str.toUpperCase()
    }
    let correctLocation = Object.keys(this.stats).find(stat => { 
      if(stat.toUpperCase() === str){
        return this.stats[str]
      } 
    })

    if(correctLocation) { 
     return {location: correctLocation, stats: this.stats[str]}
    } else {
      return undefined
    } 
  }

  findAverage = (str) => {
    if(str){
      str = str.toUpperCase()
    }
    let getKeys = Object.values(this.stats[str])
    let getAvrg = getKeys.reduce((acc, num) => {
      let numData = Object.values(num)
      return acc += num
    }, 0) / 11
    return Math.round(getAvrg * 1000) / 1000
  }

  compareDistrictAverages = (str1, str2) => {
    let avrg1 = this.findAverage(str1)
    let avrg2 = this.findAverage(str2)
    let location1 = Object.keys(this.stats).filter(stat => stat.toUpperCase() === str1.toUpperCase()) 
    let location2 = Object.keys(this.stats).filter(stat => stat.toUpperCase() === str2.toUpperCase())
    return { [location1]: avrg1, [location2]: avrg2, 'compared':(Math.round(avrg1/avrg2 * 1000) / 1000) }
  }

}
