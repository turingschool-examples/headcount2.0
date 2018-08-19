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

    return matchKeys.map(key => ({ ...this.stats[key], selected: false }));
  };

  findAverage = name => {
    const values = Object.values(this.stats[name].stats);
    const longAvg =
      values.reduce((sum, value) => sum + value, 0) / values.length;
    return Math.round(longAvg * 1000) / 1000;
  };

  compareDistrictAverages = (district1, district2) => {
    const dOneAvg = this.findAverage(district1.toUpperCase());
    const dTwoAvg = this.findAverage(district2.toUpperCase());
    const lower = Math.min(dOneAvg, dTwoAvg);
    const higher = Math.max(dOneAvg, dTwoAvg);
    const comparedVal = Math.round((lower / higher) * 1000) / 1000;

    return {
      [district1.toUpperCase()]: dOneAvg,
      [district2.toUpperCase()]: dTwoAvg,
      compared: comparedVal
    };
  };
}
