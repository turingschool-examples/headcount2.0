export default class DistrictRepository {
  constructor(data) {
    // console.log(data)
    this.stats = data.reduce( (districtObj, district) => {
      if (!districtObj[district[location]]) {
        districtObj[district[location]] = district
      }
       districtObj[district[location]] = district
     return districtObj
    }, {})
  console.log(this.stats)
  }
}


