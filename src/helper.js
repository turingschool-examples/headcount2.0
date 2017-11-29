export default class DistrictRepository {
  constructor(data) {
    this.data = this.mutateData(data)
  }

  mutateData(data) {
    const arrayToObject = data.reduce((obj, district) => {
      if (district.Location in obj) {
        obj[district.Location][district.TimeFrame] = district.Data
      } else {
        obj[district.Location] = {[district.TimeFrame]: district.Data}
      }
      return obj
    },{})
  //   const arrayToObject = (data) =>
  // Object.assign({}, ...data.map(item => ({[item.location]: {item}})))
  return arrayToObject
  }
}
