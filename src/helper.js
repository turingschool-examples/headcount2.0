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
}
