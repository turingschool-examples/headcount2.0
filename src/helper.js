export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.formatStats(stats);
  }

  formatStats = stats => {
    return stats.reduce((acc, stat) => {
      let {TimeFrame, Data} = stat;
      let Location = stat.Location.toUpperCase();
      if(acc[Location]) {
        acc[Location][TimeFrame] = Data
      } else {
        acc[Location] = {[TimeFrame] : Data}
      }
      return acc;
    },{})
  }

  findByName = name => {
    if (!name) return undefined;
    
    const result = Object.keys(this.stats).find(place => {
      return place.toLowerCase().includes(name.toLowerCase());    
    });

    if (!result) return undefined;
    return {location: result};
  }

  findAverage = () => {

  }

  findAllMatches = () => {

  }

  compareDistrictAverage = () => {

  }

}