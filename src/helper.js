export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }

  cleanData(stats) {
     return stats.reduce((acc, district) => {
      let dataNum = Math.round(1000*district.Data)/1000 || 0
      if (!acc[district.Location.toUpperCase()]) {
        acc[district.Location.toUpperCase()] = {
          'stats': {[district.TimeFrame] : dataNum}, 
          'location': district.Location.toUpperCase()
        }
      } else {
         Object.assign(acc[district.Location.toUpperCase()].stats, {[district.TimeFrame] : dataNum})         
        }   
    return acc
    }, {})
  }

  findByName(string) {
    if (string === undefined) {
      return undefined 
    } else {
      if ( string.toUpperCase() in this.stats ) {
        return this.stats[string.toUpperCase()]
      } else {
        return undefined
      }
    }
  }

  searchWords(string) {
    let dataSet = Object.values(this.stats)
    return dataSet.map(word => {
      if (string.startsWith(string)){
        return true
      } else{
        return false 
      }
    })
  }

  findAverage(string) {
    let stringData = this.findByName(string)
    let stringValues = Object.values(stringData.stats)

    let averageStringData = stringValues.reduce((acc, value) => {
      acc += value;
      return acc
    }, 0)
    return Math.round(1000 * (averageStringData / stringValues.length) ) / 1000
  }

  compareDistrictAverages(string1, string2) {
    let string1Data = this.findByName(string1)
    let string1Values = Object.values(string1Data.stats)
    if(string2 === undefined) {
      let string1Average =  this.findAverage(string1Values)
        return string1Average
    }

    let string2Data = this.findByName(string2)
    let string2Values = Object.values(string2Data.stats)



   let string2Average =  this.findAverage(string2Values)

   return 

  }



  findAllMatches(string) {
    const findMatchesData = Object.values(this.stats)
    if (string === undefined) {
      return findMatchesData
    } else if (string.toUpperCase() in this.stats || this.searchWords(string)){
      let findMatchesResult = []

      string = string.toUpperCase()

      findMatchesData.filter(school => {
      if (school.location.match(string)){
        findMatchesResult.push(school)
      }
      return true;
    })
    return findMatchesResult
    } else if (!(string.toUpperCase() in this.stats)) {
      return []
    }
  }
}

