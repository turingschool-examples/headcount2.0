
export default class DistrictRepository {
  constructor(kinderData){
    this.data = this.cleanData(kinderData)
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
// [
// {'YUMA SCHOOL DISTRICT 1': [ {
//             TimeFrame: 2007,
//             DataFormat: 'Percent',
//             Data: 1 },
//           {
//             TimeFrame: 2006,
//             DataFormat: 'Percent',
//             Data: 1 },
// }
