export default class DistrictRepository {
  constructor(data) {
    this.data = data.reduce((accum, object) => {
          if(!accum[object.Location]) {
            accum[object.Location] = 'value'
          }
          return accum
        },{})
  }

  reducedData(data) {
    data.reduce((accum, object) => {
      if(!accum[object.Location]) {
        accum[object.Location] = 'value'
      }
      return accum
    },{})
  }

}
