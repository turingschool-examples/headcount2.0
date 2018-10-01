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
  findByName = (name) => {
    // console.log(this.stats)
    const correctLocation = Object.keys(this.stats).find(stat => { 
      if(stat === name){
        console.log(this.stats[name])
        return this.stats[name]
      } return correctLocation
    }) 
  } 
}
