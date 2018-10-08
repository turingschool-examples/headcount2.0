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
  
  findAverage = district => {
    const resultPlace = Object.keys(this.stats).find(place => {
      return place.toLowerCase().includes(district.toLowerCase());    
    });
    const expectedPlaceResults = this.stats[resultPlace]
    const keys = Object.keys(expectedPlaceResults);

    const expectedResults = keys.reduce((acc, place, index, array) => {
       acc += expectedPlaceResults[place] / array.length;
      return acc;
    }, 0);
    return  Math.round(expectedResults * 1000) / 1000;
  }
  
  findAllMatches = (name = '') => {
    name = name.toLowerCase();
    const filteredList = Object.keys(this.stats).filter(place => {
      return place.toLowerCase().includes(name);
    });
    const expectedResults = filteredList.map(place => {
      return {location: place, stats: this.stats[place]}
    });

     return expectedResults;
  }

  compareDistrictAverages = (district1, district2) => {
    const district1Avg = this.findAverage(district1);
    const district2Avg = this.findAverage(district2);
    const comparedDistricts = Math.round((district1Avg / district2Avg) * 1000) / 1000;
    const results = Object.assign({}, {[district1.toUpperCase()]: district1Avg}, {[district2.toUpperCase()]: district2Avg}, {compared: comparedDistricts});
    return results;
  }

}