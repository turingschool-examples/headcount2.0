export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = data => {
    return data.reduce((cleanData, stat) => {
      const { Location, TimeFrame, Data } = stat;
      const location = Location.toUpperCase();
      let yearData = Math.round(Data * 1000) / 1000;
      if (!cleanData[location]) {
        cleanData[location] = {
          location,
          stats: {}
        };
      }
      cleanData[location].stats[TimeFrame] = isNaN(yearData) ? 0 : yearData;
      return cleanData;
    }, {});
  }

  findByName = name => !name ? undefined : this.stats[name.toUpperCase()];

  findAllMatches = name => {
    const matches = Object.keys(this.stats).filter(key => !name ? true : key.includes(name.toUpperCase()));
    return matches.map(key => this.stats[key]);
  };

  findAverage = name => {
    const district = this.stats[name.toUpperCase()].stats;
    const average = Object.keys(district).reduce((average, year) => {
      return average += district[year];
    }, 0) / Object.keys(district).length;
    return Math.round(average * 1000) / 1000;
  }

  compareDistrictAverages = (d1, d2) => {
    let resultObj = {};
    resultObj[d1.toUpperCase()] = this.findAverage(d1);
    resultObj[d2.toUpperCase()] = this.findAverage(d2);
    const rawComparisonData = this.findAverage(d1)/this.findAverage(d2);
    resultObj.compared = Math.round(rawComparisonData * 1000) / 1000;
    return resultObj;
  }
}