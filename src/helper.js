export default class DistrictRepository {
  constructor(schoolData) {
    this.stats = this.cleanedData(schoolData);
  }

  cleanedData = (schoolData) => {
    return schoolData.reduce((cleanedInfo, school) => {
      const upperCaseDistrict = school.Location.toUpperCase();

      if (!cleanedInfo[upperCaseDistrict]) {
        cleanedInfo[upperCaseDistrict] = {
          location: upperCaseDistrict,
          stats: {}
        };
      } 

      if (!cleanedInfo[upperCaseDistrict].stats[school.TimeFrame] && typeof(school.Data) !== 'string' ) {
        cleanedInfo[upperCaseDistrict].stats[school.TimeFrame] = Math.round(1000 * school.Data) / 1000;
      } else {
        cleanedInfo[upperCaseDistrict].stats[school.TimeFrame] = 0;
      }

      return cleanedInfo;

    }, {}); 
  }

  findByName = (location) => {
    const upperCaseLocation = location.toUpperCase();

    return this.stats[upperCaseLocation]
  }

  findAllMatches = (district) => {
    const locationKeys = Object.keys(this.stats);
    if(district) {
      const upperCaseLocation = district.toUpperCase(); 
      return locationKeys.reduce((matchedArray, area) => {
        if(this.stats[area].location.includes(upperCaseLocation)) {
          matchedArray.push(this.stats[area])
        }
        return matchedArray;
      }, []);
    }  else {
      const statsArr = [];
      locationKeys.forEach(location => {
        statsArr.push(this.stats[location])
      })
      return statsArr;
    }
  }

  findAverage = (district) => {
    const selectedDistrict = this.findByName(district);
    const districtValues = Object.values(selectedDistrict.stats);
    const average = districtValues.reduce((valuesSum, value) => {
      return valuesSum + value;
    }, 0) / districtValues.length;
    return Math.round(1000 * average) / 1000;
  }
// 
  compareDistrictAverages = (locationA, locationB) => {
    const districtA = locationA.toUpperCase();
    const districtB = locationB.toUpperCase()
    const averageA = this.findAverage(districtA);
    const averageB = this.findAverage(districtB);
    const averageCompared = Math.round(1000 * (averageA / averageB)) / 1000
    const comparedData = {
      [districtA]: averageA,
      [districtB]: averageB,
      'compared': averageCompared
    };
    return comparedData;
  }
}
