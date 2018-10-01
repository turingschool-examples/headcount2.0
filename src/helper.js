export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.formatStats(stats);
  }

  formatStats = stats => {
    return stats.reduce((acc, stat) => {
      if(acc[stat.Location]) {
        acc[stat.Location][stat.TimeFrame] = stat.Data
      } else {
        acc[stat.Location] = {[stat.TimeFrame] : stat.Data}
      }
      return acc;
    },{})
  }
}