// import district from './data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.removeDuplicates(stats);
  }

  removeDuplicates = array => {
    return array.reduce((noDuplicates, stat) => {
      let { Location, TimeFrame, Data } = stat;
      Location = Location.toUpperCase();
      if (!noDuplicates[Location]) {
        noDuplicates[Location] = {
          location: Location,
          stats: {}
        };
      }

      noDuplicates[Location].stats[TimeFrame] =
        Math.round(Data * 1000) / 1000 || 0;

      return noDuplicates;
    }, {});
  };

  findByName = name => {
    if (!name) return undefined;
    return this.stats[name.toUpperCase()];
  };

  findAllMatches = name => {
    const matchKeys = Object.keys(this.stats).filter(statKey => {
      if (!name) return true;
      return statKey.includes(name.toUpperCase());
    });

    return matchKeys.map(key => this.stats[key]);
  };

  findAverage = name => {
    const values = Object.values(this.stats[name].stats);
    const longAvg =
      values.reduce((sum, value) => sum + value, 0) / values.length;
    return Math.round(longAvg * 1000) / 1000;
  };

  // compareDistrictAverages = (district1, district2) => {
  //   console.log(this.stats[district1].stats);
  //   // const lower = Math.min(dOneData, dTwoData);
  //   // const higher = Math.max(dOneData, dTwoData);
  //   // return Math.round((lower / higher) * 1000) / 1000;
  // };
}
