// import district from './data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(stats) {
    this.stats = stats;
  }

  removeDuplicates = array => {
    const noDuplicates = array.reduce((noDuplicates, stat) => {
      const { Location } = stat;
      if (!noDuplicates[Location]) {
        noDuplicates[Location] = stat;
      }
      return noDuplicates;
    }, {});

    this.stats = noDuplicates;
  };
}
