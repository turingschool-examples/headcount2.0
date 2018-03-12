export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce( (districtObj, district) => {
      const { Location, TimeFrame, Data } = district;
      if (!districtObj[Location]) {
        districtObj[Location] = { location: district.Location,
                                  timeFrame: district.TimeFrame,
                                  data: district.Data
         }
      }
     return districtObj
    }, {})
  console.log(this.stats)
  }
}
