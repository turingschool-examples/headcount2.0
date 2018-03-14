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
        districtObj[district.Location.toUpperCase()].data[district.TimeFrame] = this.numberHelper(district.Data);
       return districtObj
      }, {})
  }
  numberHelper(num) {
    if (isNaN(num)) {
      return 0
    } else {
      return parseFloat(num.toFixed(3))
    }
  }
  findByName(userInput) {
    if (userInput) {
      return this.stats[userInput.toUpperCase()]
    } else {
      return undefined
    }
  }
  findAllMatches(userInput) {
    return Object.keys(this.stats).reduce( (dataArray, district) => {
      if (!userInput) {
        dataArray.push(this.stats[district])
      } else {
        if (district.includes(userInput.toUpperCase())) {
          dataArray.push(this.stats[district])
        }
      }
      return dataArray;
    },[])
  
  }

}
