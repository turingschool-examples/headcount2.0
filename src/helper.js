export default class DistrictRepository {
  constructor(data) {
    this.data = this.mappedData(data)

  }

  mappedData(data) {
    let newData = {}
    data.forEach(val => {
      let { Location, TimeFrame, Data } = val

      if(!newData[Location]) {
        newData[Location] = {[TimeFrame]: Data}
      } else {
        newData[Location] = Object.assign(newData[Location], {[TimeFrame]: Data})
        // console.log('val.Location',val.Location)
        // console.log(newData[Location])
      }
      // console.log(Location, TimeFrame, Data)
    })
    return newData
  }

  findByName(name) {
    let matched = {}
    // const newData = Object.keys(this.data)

    if(!name) {
      return undefined
    }

    matched.data = Object.keys(this.data).forEach(specificLocation => {

      if (name.toLowerCase() == specificLocation.toLowerCase()) {
        // console.log('consoled: ', name.toLowerCase(), 'consoled:', specificLocation.toLowerCase())
        matched.location = specificLocation
        // console.log('name ', name)
        // console.log('specific ', specificLocation)
        return specificLocation
      }
    })
// console.log('consoled: ', matched)

    if(!matched.location) {
      return undefined
    } else {
      return matched
    }
  }



}
