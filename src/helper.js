export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }

  cleanData(stats){
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
    if (string === undefined){
      return undefined 
    } else {
      if ( string.toUpperCase() in this.stats ) {
        return this.stats[string.toUpperCase()]
      } else {
        return undefined
      }
    }
  }

  searchWords(string){
    console.log('helloooo')
    let dataSet = Object.values(this.stats)
    return dataSet.map(word => {
      if (string.startsWith(string)){
        return true
      } else{
        return false 
      }
    })
  }



  findAllMatches(string) {
    const findMatchesData = Object.values(this.stats)
    if (string === undefined) {
      console.log('1')
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
      console.log(findMatchesResult, 'number3')
    return findMatchesResult
    } else if (!(string.toUpperCase() in this.stats)) {
      console.log(2)
      return []
    }
  }
}

