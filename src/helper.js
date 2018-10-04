
export default class DistrictRepository {
  constructor(stats){
    this.stats = this.cleanData(stats)
    // this.districtStats = this.organizeDistrictData(stats) 
  }

  // organizeData(stats){
  //   const data = stats.reduce((districts, school) => {
  //       let statsObj ={
  //         location: school.Location.toUpperCase(),
  //         year: school.TimeFrame,
  //         data: school.Data
  //       }   
     
  //         let upperCaseLocation = school.Location.toUpperCase()
  //         if(!districts[upperCaseLocation]){
  //           districts[upperCaseLocation] = []
  //         } 
  //         districts[upperCaseLocation].push(statsObj)
  //       return districts
  //     }, {})
  //   return data
  // }

  cleanData(data){
    const filteredData = data.reduce((districts, school) => {
      let statsObj ={ 
        location: school.Location.toUpperCase(),
        year: school.TimeFrame,
        data: school.Data
      }   
      if(!districts[school.Location]){
        districts[school.Location] = []
      } 
        districts[school.Location].push(statsObj)
      return districts
    }, {})

    const mainData = Object.keys(filteredData).map( district => {
      let years = []
      let districtData = filteredData[district].reduce((schoolData, year) => {
        let yearStats = {year: year.year, data: year.data}
        years.push(yearStats)
        let orderedYears = years.sort((a, b) => a.year - b.year)
        schoolData = {
          location: district,
          stats: years
        }
        return schoolData
      }, {})
      return districtData
    })
    return mainData
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



