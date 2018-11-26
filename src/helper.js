export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanStats(stats);
  }

  cleanStats = (stats) => stats.reduce((allStats, stat) => {
    allStats[stat.Location] = {[stat.TimeFrame]: stat.Data};
    return allStats;
  }, {});

  findByName = (name) => {
    if(name && Object.keys(this.stats).includes(name)) {
      const upperCaseName = name.toUpperCase();
      console.log(upperCaseName);
      return {location: upperCaseName, stats: this.stats[upperCaseName]};
    } else {
      return undefined
    }
  }


}

