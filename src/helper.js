export default class DistrictRepository {
  constructor(data) {
    this.stats = this.condenseData(data);
  }

  condenseData = data => {
    return data.reduce((acc, school) => {
      let district = school.Location.toUpperCase();
      if (!acc[district]) {
        acc[district] = {
          location: district,
          stats: {}
        };
      }
      acc[district].stats[school.TimeFrame] =
        Math.round(1000 * school.Data) / 1000 || 0;
      return acc;
    }, {});
  };

  findByName = name => {
    if (!name) return undefined;
    return this.stats[name.toUpperCase()];
  };

  findAllMatches = name => {
    if (!name) return this.stats;
    const schools = Object.keys(this.stats);
    const results = schools.reduce((acc, school) => {
      if (school.includes(name.toUpperCase())) {
        acc.push(school);
      }
      return acc;
    }, []);

    return results;
  };

  findAverage = name => {
    const years = Object.keys(this.stats[name].stats);
    const total = years.reduce((total, data) => {
      total += this.stats[name].stats[data];
      return total;
    }, 0);
    return +(total / years.length).toFixed(3);
  };

  compareDistrictAverages = (schoolOne, schoolTwo) => {
    const schoolOneAvg = this.findAverage(schoolOne);
    const schoolTwoAvg = this.findAverage(schoolTwo);
    const schoolComparison = (schoolOneAvg + schoolTwoAvg) / 2;

    return {
      [schoolOne]: schoolOneAvg,
      [schoolTwo]: schoolTwoAvg,
      compared: schoolComparison
    };
  };
}
