export default class DistrictRepository {
  constructor(rawSchoolData) {
    this.stats = this.sanitize(rawSchoolData);
    // this.stats = stats;
  }

  sanitize = (schools) => {
    return schools.reduce((acc, schoolObj) => {
      const key = schoolObj.Location.toUpperCase();
      if (!acc[key]) {
        acc[key] = {};
      }
      if (acc[key].location !== key) {
        acc[key].location = key.toUpperCase();
      }
      if (typeof (schoolObj.Data) !== 'number') {
        acc[key].stats = {
          ...acc[key].stats,
          [schoolObj.TimeFrame]: 0
        };
      } else {
        acc[key].stats = {
          ...acc[key].stats,
          [schoolObj.TimeFrame]: Math.round(1000 * schoolObj.Data) / 1000
        };
      }
      return acc;
    }, {});
  }

  findByName = (userInput) => {
    if (!userInput) {
      return undefined;
    }
    let upperCaseInput = userInput.toUpperCase();
    const schoolKeys = Object.keys(this.stats);
    const upperCaseKeys = schoolKeys.map(key => key.toUpperCase());
    const match = upperCaseKeys.find(key => {
      return key === upperCaseInput;
    });

    if (match === undefined) {
      return undefined;
    } else {
      return this.stats[match];
    }
  }

  findAllMatches = (userInput) => {
    if (!userInput) {
      return Object.keys(this.stats);
    } else {
      const wantToMatch = new RegExp(userInput, 'i');
      const keys = Object.keys(this.stats).filter((key) => {
        return wantToMatch.test(key);
      });
      return keys;
    }
  }

  findAverage = (schoolName) => {
    const foundSchool = this.findByName(schoolName);
    const schoolValues = Object.values(foundSchool.stats);

    const avg = schoolValues.reduce((acc, dataPoint) => {
      return acc + dataPoint
    }, 0)/schoolValues.length;

    const roundedAvg = Math.round(1000 * avg)/1000;
    return roundedAvg;
  }

  compareDistrictAverages = (school1, school2) => {
    const school1Avg = this.findAverage(school1);
    const school2Avg = this.findAverage(school2);
    const upperCasedSchool1 = school1.toUpperCase();
    const upperCasedSchool2 = school2.toUpperCase();
    const comparedAvgs = {
      [upperCasedSchool1]: school1Avg,
      [upperCasedSchool2]: school2Avg,
      compared: Math.round(1000 * (school1Avg/school2Avg))/1000
    }
    return comparedAvgs;
  }
}
