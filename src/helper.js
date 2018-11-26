export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanStats(stats);
  }

  cleanStats = (stats) => stats.reduce((allStats, stat) => {
    allStats[stat.Location] = {[stat.TimeFrame]: stat.Data};
    console.log(Object.keys(allStats).length);
    return allStats;
  }, {});


}

