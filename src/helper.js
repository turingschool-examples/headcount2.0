
export default class DistrictRepository {
  constructor(stats){
    this.stats = this.cleanData(stats)
  }

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
        if(typeof year.data !== 'number'){ year.data = 0}
        const roundedData = Math.round(year.data * 1000)/1000
        let yearStats = {year: year.year, data: roundedData}
        years.push(yearStats)
        let orderedYears = years.sort((a, b) => a.year - b.year)
        schoolData = {
          location: district,
          stats: orderedYears
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
  }
  let upperName = name.toUpperCase()
  const nameMatch = this.stats.filter( district =>  
      district.location === upperName )
  if (nameMatch.length === 0){
    return undefined
  } else { 
    const yearlyData = nameMatch.reduce((obj, match) => {
        const yearData = match.stats.reduce((yearData, district) => {
          if(typeof district.data !== 'number'){ district.data = 0}
          yearData[district.year]= Math.round(district.data * 1000)/1000
          return yearData
        }, {})
      return yearData
    }, {})  
     
    return nameMatch.reduce((district, year) => {
      district = {
        location: year.location,
        stats: yearlyData
      }
      return district
    }, {})
  }  
}

  findAllMatches(name){
    let nameMatch;
    if(name === undefined){
      return this.stats
    } else {
      let upperName = name.toUpperCase()
      nameMatch = this.stats.filter( district =>  {
          return district.location.includes(upperName)
        })
      return nameMatch
    }
  }
}



