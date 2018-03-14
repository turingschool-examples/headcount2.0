export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = this.cleanData(kinderData);
  }

  cleanData(data) {
    return data.reduce((statsObj, school) => {
      if(!statsObj[school.Location.toUpperCase()]) {
        statsObj[school.Location.toUpperCase()] = {location: school.Location.toUpperCase(), data: {}}
      }
      statsObj[school.Location.toUpperCase()].data[school.TimeFrame] = this.cleanNumber(school.Data)
      return statsObj; 
    }, {})   
  }

  cleanNumber(number) {
    return typeof number === "number" ? parseFloat(number.toFixed(3)) : 0
  }

  findByName(district) {
    let districtToCaps;
    if (district) {
      districtToCaps = district.toUpperCase()
      return this.stats[districtToCaps]
    }  
  }

  findAllMatches(userInput) {
    return Object.keys(this.stats).reduce((statsArr, school) => {
      if (!userInput) {
        statsArr.push(this.stats[school])
      } else {
        let userInputToCaps = userInput.toUpperCase();
          if (school.includes(userInputToCaps)) {
          statsArr.push(this.stats[school])  
        }
      }
      return statsArr
    }, [])
  }

  findAverage(district) {
    const foundDistrict = this.findByName(district);
    return parseFloat((Object.values(foundDistrict.data).reduce((sum, year) => sum + year, 0)/Object.values(foundDistrict.data).length).toFixed(3))
  }

  compareDistrictAverages(district1, district2) {
    return {
      [district1.toUpperCase()]: this.findAverage(district1),
      [district2.toUpperCase()]: this.findAverage(district2),
      compared: parseFloat((this.findAverage(district1)/this.findAverage(district2)).toFixed(3))
    }
  }
}
