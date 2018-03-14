export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  findByName(name) {
    if (!name) {
      return;
    }
    const upperCaseName = name.toUpperCase();
    return this.stats[upperCaseName];
  }

  findAllMatches(searchValue = '') {
    return Object.keys(this.stats).reduce((allStats, stat) => {
      if (stat.includes(searchValue.toUpperCase())) {
        allStats.push(this.stats[stat]);
      }
      return allStats;
    }, []);
  }

  cleanData(stats) {
    return stats.reduce((districts, stat)=> {
      const name = stat.Location.toUpperCase();

      if (!districts[name]) {
        districts[name] = { 
          location: name,
          stats: {} };
      }
     
      if (stat.Data < 1 && stat.Data > 0) {
        stat.Data = parseFloat(stat.Data).toFixed(3);
      }

      if (isNaN(stat.Data)) {
        stat.Data = 0;
      }

      districts[name].stats[stat.TimeFrame] = parseFloat(stat.Data);
      return districts;
    }, {});
  }

  findAverage(location) {
    const years = Object.keys(this.stats[location].stats);
    const sum = years.reduce((sum, year) => {
      return sum + this.stats[location].stats[year];
    }, 0);
    const average = sum / years.length;
    return Math.round(average * 1000) / 1000;
  }

  compareDistrictAverages( location1, location2) {
    const location1UpperCase = location1.toUpperCase();
    const location2UpperCase = location2.toUpperCase();
    const locationOneAvg = this.findAverage(location1UpperCase);
    const locationTwoAvg = this.findAverage(location2UpperCase);

    return {
      [location1UpperCase]: locationOneAvg,
      [location2UpperCase]: locationTwoAvg,
      compared: parseFloat((locationOneAvg / locationTwoAvg).toFixed(3))
    };
  }
}
