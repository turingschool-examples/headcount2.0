/* eslint-disable */
export default class DistrictRepository {
  constructor(kinderData){
    this.data = this.cleanData(kinderData)
  }

  makeCardArray(data) {
    const dataPairs = Object.keys(data).map((yearData) =>{
      return `${yearData}: ${data[yearData]}`
    })
    return dataPairs
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
