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
}