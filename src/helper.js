export default class DistrictRepository {
  constructor(data) {
  this.stats = this.cleanData(data)
  }

  cleanData(data) {
      return data.reduce( (districtObj, district) => {
        const { Location, TimeFrame, Data } = district;
        if (!districtObj[district.Location.toUpperCase()]) {
          districtObj[district.Location.toUpperCase()] = {
            location: district.Location.toUpperCase(),
            // timeFrame: district.TimeFrame,
            data: {}
           }
        }
        districtObj[district.Location.toUpperCase()].data[district.TimeFrame] = district.Data;
       return districtObj
      }, {})
  }

  findByName(userInput) {
    if (userInput) {
      return this.stats[userInput.toUpperCase()]
    } else {
      return undefined
    }
  }

}
