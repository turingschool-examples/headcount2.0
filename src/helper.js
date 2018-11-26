export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanStats(stats);
  }

  cleanStats = (stats) => stats.reduce((allStats, stat) => {
    allStats[stat.Location] = {[stat.TimeFrame]: stat.Data};
    return allStats;
  }, {});

  findByName = (name) => {
    if (name) {
      console.log(name)
    } else {
      return undefined
    }
  }

  
}

