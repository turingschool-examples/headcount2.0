export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.formatStats(stats);
  }

  formatStats = stats => {
    return stats.reduce((acc, stat) => {
      let {TimeFrame, Data} = stat;
      let Location = stat.Location.toUpperCase();
      if(typeof Data !== 'number') {
        Data = 0;
      }
      if(acc[Location]) {
        acc[Location][TimeFrame] = Math.round(Data * 1000) / 1000;
      } else {
        acc[Location] = {[TimeFrame] : Math.round(Data  * 1000) / 1000}
      }
      return acc;
    },{});
  }

  findByName = name => {
    if (!name) return undefined;
    
    const result = Object.keys(this.stats).find(place => {
      return place.toLowerCase().includes(name.toLowerCase());    
    });
    
    if (!result) return undefined;

    return {location: result, stats: this.stats[result]};
  }


  findAverage = () => {

  }

  findAllMatches = (name = '') => {
    const filteredList = Object.keys(this.stats).filter(place => {
      return place.toLowerCase().includes(name.toLowerCase());
    });
    const expectedResults = filteredList.map(place => {
      return {location: place, stats: this.stats[place]}
    });

     return expectedResults;
  }

  compareDistrictAverage = () => {

  }

}