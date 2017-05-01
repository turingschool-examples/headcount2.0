export default class DistrictRepository {
  constructor(data) {
    this.data = this.mappedData(data)

  }

  mappedData(data) {
      return data.reduce((accu, value) => {

      if(!accu[value.Location]) {
        accu[value.Location] = 1
      }

      accu[value.Location]++

      return accu
    }, {})

  }

}
