export default class DistrictRepository {
  constructor(data) {
    this.data = this.mappedData(data)
  }

  mappedData(data) {
    let newData = {}
    data.forEach(val => {
      let { Location, TimeFrame, Data } = val

      if(!newData[Location]) {
        newData[Location] = {}
        newData[Location].location = Location
        newData[Location].data = {}
      }
        newData[Location].data[TimeFrame] = Data
    })
    return newData
  }

  findByName(name) {
    if(!name) {
      return undefined
    }
    let school = Object.keys(this.data).find(specificLocation => {
      if (name.toLowerCase() == specificLocation.toLowerCase()) {
        return this.data[specificLocation]
      }
    })
    return this.data[school];
  }



}
