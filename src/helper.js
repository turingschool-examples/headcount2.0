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
}
