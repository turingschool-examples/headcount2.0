export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.removeDuplicates(stats);
  }

  removeDuplicates = array => {
    return array.reduce((notDuplicates, stat) => {
      let { Location, TimeFrame, Data } = stat;
      Location = Location.toUpperCase();
      if (!notDuplicates[Location]) {
        notDuplicates[Location] = {
          location: Location,
          stats: {}
        };
      }

      notDuplicates[Location].stats[TimeFrame] =
        Math.round(Data * 1000) / 1000 || 0;

      return notDuplicates;
    }, {});
  };

  findByName = name => {
    if (!name) {
      return undefined;
    }
    return this.stats[name.toUpperCase()];
  };

  findAllMatches = name => {
    const nameKeys = Object.keys(this.stats).map(stat => {
      return this.stats[stat];
    });

    if (!name) {
      return nameKeys;
    }
    return nameKeys.filter(district => {
      return district.location.includes(name.toUpperCase());
    });
  };
}
