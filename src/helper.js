// import district from './data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.removeDuplicates(stats);
  }

  removeDuplicates = array => {
    return array.reduce((noDuplicates, stat) => {
      const { Location } = stat;
      if (!noDuplicates[Location]) {
        noDuplicates[Location] = stat;
      }
      return noDuplicates;
    }, {});
  };

  findByName = name => {
    // const foundStat = Object.keys(this.stats).find(statKey => {
    //   return statKey === name;
    // });
    // return foundStat;
    //   if (!name) return undefined;
    //   const foundLocation = this.stats.find(stat => {
    //     return stat.Location.toLowerCase() === name.toLowerCase();
    //   });
    //   return foundLocation;
  };
}
