export default class DistrictRepository {
  constructor(data) {
    this.data = this.reducedData(data)
  }

  reducedData(data) {
    let newData = data.reduce((accum, object) => {
      let { Location, TimeFrame, Data } = object;

      if(!accum[Location]) {
        accum[Location] = {
          location: Location,
          data: {}
        }
      }
      accum[Location].data[TimeFrame] = this.sanitizedData(Data)
      return accum
    },{})
    return newData
  }

  findByName(location) {
    if(!location) {
      return undefined
    }
    let school = Object.keys(this.data).find(place => {
      return location.toLowerCase() === place.toLowerCase()
    })
    console.log(this.data[school]);
    return this.data[school];
  }

  sanitizedData(data) {
    if (typeof data === 'number') {
      return Math.round(data * 1000) / 1000
    } else {
      return 0
    }
  }

}
