
export default class DistrictRepository {
  constructor(stats){
    this.stats = stats.reduce((districts, school) => {
      let statsObj ={
        location: school.Location.toUpperCase(),
        year: school.TimeFrame,
        data: school.Data
      }   
   
        let upperCaseLocation = school.Location.toUpperCase()
        if(!districts[upperCaseLocation]){
          districts[upperCaseLocation] = []
        } 
        districts[upperCaseLocation].push(statsObj)
      return districts
    }, {})
  }

  findByName(name){
    if (name === undefined) {
      return undefined
    } else {
      let upperName = name.toUpperCase()
      const nameMatch = Object.keys(this.stats).find( district =>  district === upperName )

      if(nameMatch === undefined){ return undefined }

      const yearlyData = this.stats[nameMatch].reduce((obj, element) => {
          if(typeof element.data !== 'number'){ element.data = 0}

          if(!obj[element.year]){
            obj[element.year] = Math.round(element.data * 1000)/1000 
          }
          return obj
        }, {})

      var matchObj = this.stats[nameMatch].reduce((obj, year) => {
        obj = {
          location: year.location,
          stats: yearlyData
        }
        return obj
      }, {})
    }
  return matchObj 
  }

  findAllMatches(name){
    if(name === undefined){
      return Object.entries(this.stats)
    } else {
      let upperName = name.toUpperCase()
      var nameMatch = Object.keys(this.stats)
        .filter( district =>  district.includes(upperName) )
    }
    return nameMatch
  }
}



