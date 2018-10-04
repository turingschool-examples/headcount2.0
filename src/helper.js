
export default class DistrictRepository {
  constructor(stats){
    this.stats = this.organizeData(stats)
    // this.districtStats = this.organizeDistrictData(stats) 
  }

  organizeData(stats){
    const filteredData = stats.reduce((districts, school) => {
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
    return filteredData
  }

  // organizeDistrictData(this.stats){  //won't accept this.stats as a Parameter---> need to change all reference to stats to this.stats
  //   const districtData = Object.keys(stats).map( district => {
  //     let years = [];
  //     const districtData = stats[district].reduce((data, year) => {
      
  //       if(typeof year.data !== 'number'){ year.data = 0} //ternerary?
  //       const roundedData = Math.round(year.data * 1000)/1000

  //       years.push({year: year.year, data: roundedData})
  //       let orderedYears = years.sort((a, b) => a.year - b.year)

  //       data = {location: district, stats: orderedYears}
  //         return data
  //     }, {})
  //   return districtData
  // }

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



