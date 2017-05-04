/* eslint-disable */
export default class DistrictRepository {
  constructor(kinderData){
    this.data = this.cleanData(kinderData)
  }

  selectionMatch(location, selected){
    let result
    selected.forEach((selectItem) =>{
      if(location === selectItem){
        result = "is-selected"
      } else {
        result = "not-selected"
      }
    })
    return result
  }

  makeCardArray(data) {
    const dataPairs = Object.keys(data).map((yearData) =>{
      return `${yearData}: ${data[yearData]}`
    })
    return dataPairs
  }

  findAverage(query){
    let school = this.findAllMatches(query)[0].data
    let dataArray = Object.keys(school)
    let result = dataArray.reduce((acc, key)=>{
      acc += school[key]
      return acc
    }, 0)
    return this.sanitizeNumbers(result/dataArray.length)
  }

  compareDistrictAverages(schoolA, schoolB){
    let avgA = this.findAverage(schoolA)
    let avgB = this.findAverage(schoolB)
    let compareAvg = this.sanitizeNumbers(avgA/avgB)

    return {[schoolA.toUpperCase()]: avgA, [schoolB.toUpperCase()]: avgB, "compared": compareAvg}
  }

  highLowValues(set) {
    let result = ''
    let splitSet = set.split(' ')
    splitSet[1] < .5 ? result = 'low-data' : result = 'high-data'
    return result
  }

  findAllMatches(query) {
    const schoolsArray = Object.keys(this.data).map((school) =>{
      return this.data[school]
    })

    if(!query){
      return schoolsArray
    }

    return Object.keys(this.data).filter( (s) => {
      return s.toLowerCase().includes(query.toLowerCase())
    }).map( (school) => this.data[school])
  }

  sanitizeNumbers(number){
    if (typeof number === 'number') {
      return Math.round(number*1000)/1000
    } else {
      return 0
    }
  };

  cleanData(data){
    let cleandedData = data.reduce((acc, district) => {
      let location = district.Location
      if (acc.hasOwnProperty(location)) {
        acc[location].data[district.TimeFrame] = this.sanitizeNumbers(district.Data)
      }  else {
        acc[location] = {
          location: location,
          data: {
            [district.TimeFrame]: this.sanitizeNumbers(district.Data)
          }
       }
    }
      return acc
    },{})
    return cleandedData
  }

  findByName(name) {
    if (name) {
      let key = Object.keys(this.data).find((schoolName) => {
        return name.toLowerCase() === schoolName.toLowerCase()
      })
      return this.data[key]
    }
  }
}
