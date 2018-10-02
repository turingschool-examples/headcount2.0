export default class DistrictRepository {
  constructor(stats){
    this.stats = this.cleanData(stats)
  }
  cleanData = (stats) => {
    return stats.reduce((acc, district) => {
      if(!acc[district.Location.toUpperCase()]){
        acc[district.Location.toUpperCase()] = {
          [district.TimeFrame]: district.Data
        } 
    } else { 
       Object.assign( acc[district.Location.toUpperCase()], {[district.TimeFrame]: district.Data})  
    }
      return acc 
    }, {})
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
}
