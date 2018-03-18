export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = this.cleanData(kinderData);
  }

  cleanData(stats) {
    return stats.stats.reduce((statsObj, school) => {
      if (!statsObj[school.Location.toUpperCase()]) {
        statsObj[school.Location.toUpperCase()] = {
          location: school.Location.toUpperCase(), 
          stats: {}, selected:false
        };
      }
      statsObj[school.Location.toUpperCase()]
        .stats[school.TimeFrame] = this.cleanNumber(school.stats);
      return statsObj; 
    }, {});
  }

  cleanNumber(number) {
    return typeof number === "number" ? parseFloat(number.toFixed(3)) : 0;
  }

  findByName(district) {
    let districtToCaps;
    if (district) {
      districtToCaps = district.toUpperCase();
      return this.stats[districtToCaps];
    }
  }

  findAllMatches(userInput) {
    return Object.keys(this.stats).reduce((statsArr, school) => {
      if (!userInput) {
        statsArr.push(this.stats[school]);
      } else {
        let userInputToCaps = userInput.toUpperCase();
        if (school.includes(userInputToCaps)) {
          statsArr.push(this.stats[school]);
        }
      }
      return statsArr;
    }, []);
  }

  findAverage(district) {
    const foundDistrict = this.findByName(district);
    return parseFloat((Object.values(foundDistrict.stats) 
      .reduce((sum, year) => sum + year, 0)/Object
        .values(foundDistrict.stats).length)
      .toFixed(3));
  }

  compareDistrictAverages(district1, district2) {
    return {
      [district1.toUpperCase()]: this.findAverage(district1),
      [district2.toUpperCase()]: this.findAverage(district2),
      compared: parseFloat((this
        .findAverage(district1)/this
          .findAverage(district2))
        .toFixed(3))
    };
  }
}
