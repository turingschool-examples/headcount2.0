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
    return typeof number === "number" ? parseFloat(Number(number).toFixed(3)) : 0
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
}
