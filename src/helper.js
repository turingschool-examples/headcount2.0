export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.formatStats(stats);
  }

  formatStats = stats => {
    return stats.reduce((acc, stat) => {
      const {Location, TimeFrame, Data} = stat;
      if(acc[Location]) {
        acc[Location][TimeFrame] = Data
      } else {
        acc[Location] = {[TimeFrame] : Data}
      }
      return acc;
    },{})
  }
}