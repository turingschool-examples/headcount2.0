export default class DistrictRepository {
  constructor(data) {
    this.data = this.reducedData(data)
  }

  reducedData(data) {
    return data.reduce((accum, object) => {
      if(!accum[object.Location]) {
        accum[object.Location] = {
          location: object.Location,
          data: {}
        }
      }
      return accum
    },{})
  }

  findByName(location) {
    if(!location) {
      return undefined
    }
    let school = Object.keys(this.data).find(place => {
      return location.toLowerCase() === place.toLowerCase()
    })
    return this.data[school];
  }
}
