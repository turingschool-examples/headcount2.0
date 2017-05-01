export default class DistrictRepository {
  constructor(data) {
    this.data = this.mappedData(data)
  }

  mappedData(data) {
    return data.map((districts) => {
      return districts
    })
  }

}
