export default class DistrictRepository {
  constructor(stats){
    this.stats = this.cleanData(stats)
  }
  cleanData = (stats) => {
    return stats.reduce((acc, district) => {
      if(!acc[district.Location]){
        acc[district.Location] = {
          [district.TimeFrame]: district.Data
        } 
    } else { 
       Object.assign( acc[district.Location], {[district.TimeFrame]: district.Data})  
    }
      return acc 
    }, {})
  }
  findByName = (str) => {
    let correctLocation = Object.keys(this.stats).find(stat => { 
      if(stat === str){
        return this.stats[str]
      } 
    })

    if(str === undefined || str !== correctLocation) {
      return undefined
    } else {
     return {[correctLocation]: this.stats[str]}
  } 
}
}
