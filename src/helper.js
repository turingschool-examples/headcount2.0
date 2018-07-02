export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = this.cleanedData(kinderData);

    
  }

  cleanedData = (kinderData) => {
    const cleanedKinder = kinderData.reduce((cleanedKinder, school) => {
      const upperCaseDistrict = school.Location.toUpperCase();

      if (!cleanedKinder[upperCaseDistrict]) {
        cleanedKinder[upperCaseDistrict] = {
          location: upperCaseDistrict,
          stats: {},
          selected: false
        };
      }

      if (!cleanedKinder[upperCaseDistrict].stats[school.TimeFrame] 
        && typeof(school.Data) !== 'string') {
        cleanedKinder[upperCaseDistrict].stats[school.TimeFrame] = 
        Math.round(1000 * school.Data)/1000;
      } else {
        cleanedKinder[upperCaseDistrict].stats[school.TimeFrame] = 0;
      }

      return cleanedKinder;
    }, {});

    return Object.keys(cleanedKinder).map(school => {
      return cleanedKinder[school];
    });
  }

  findByName = (location) => {
    if (!location) {
      return undefined;
    }
    const upperCaseLocation = location.toUpperCase();
    return this.stats.find(school => school.location === upperCaseLocation);
  }

  findAllMatches = (location) => {
    if (!location) {
      return this.stats;
    } else {
      const upperCaseLocation = location.toUpperCase();

      return this.stats.filter(school => {
        return school.location.includes(upperCaseLocation);
      });
    }
  }

  findAverage = (school) => {
    const foundSchool = this.findByName(school);

    const foundSchoolStats = Object.keys(foundSchool.stats);

    const statsSum = foundSchoolStats.reduce((average, year) => {
      return average + foundSchool.stats[year];
    }, 0);
    
    const statsAverage = statsSum / foundSchoolStats.length;

    return Math.round(1000 * statsAverage) / 1000;
  }

  compareDistrictAverages = (schoolA, schoolB) => {
    const schoolAverageA = this.findAverage(schoolA);
    const schoolAverageB = this.findAverage(schoolB);
    const comparedAverage = schoolAverageA / schoolAverageB;

    const comparedRounded = Math.round(1000 * comparedAverage) / 1000;

    const combinedAverage = { 
      [schoolA.toUpperCase()]: schoolAverageA, 
      [schoolB.toUpperCase()]: schoolAverageB, 
      compared: comparedRounded
    };

    return combinedAverage;
  }
}
