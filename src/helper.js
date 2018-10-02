export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }

  cleanData(stats){
     return stats.reduce((acc, district) => {
      if (!acc[district.Location]) {
        acc[district.Location.toUpperCase()] = {
          'stats': {[district.TimeFrame] : Math.round(1000*district.Data)/1000}, 
          'location': district.Location.toUpperCase()
        }
      } else {
         Object.assign(acc[district.Location.toUpperCase()].stats, {[district.TimeFrame] : Math.round(1000*district.Data)/1000})
          
        }
        // Object.assign(acc[district.Location], {[district.TimeFrame] : district.Data}, {'location': district.Location.toUpperCase()})
      
    
    return acc
    }, {})
  }

  findByName(string) {
    if (string == undefined){
      return undefined 
    } else {
      if ( string.toUpperCase() in this.stats ) {
        console.log(this.stats)
        return this.stats[string.toUpperCase()]
      } else {
        return undefined
      }
  }
}
}
