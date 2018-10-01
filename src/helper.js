export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, point) => {
      if (!obj[point.Location]) {
        obj[point.Location] = {}
      }
      obj[point.Location][point.TimeFrame] = point.Data
      return obj
    }, {})
  }
}

const findByName = (district) => {
  if (!district) {
    return undefined;
  }
}