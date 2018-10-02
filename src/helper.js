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
    let allLocations = Object.keys(this.stats).reduce((acc, school) => { 
      if(school.includes(string)){
        acc.push(school)
      } 
      return acc
    }, [])

    return allLocations
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

}
