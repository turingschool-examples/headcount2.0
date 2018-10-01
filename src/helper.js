export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  findByName(search) {
    if (!search) return undefined;
    const searchResult = Object.keys(this.stats).find(keyName => {
      return keyName.toLowerCase().includes(search.toLowerCase());
    });

    if (!searchResult) {
      return undefined;
    }

    return {
      location: searchResult,
      stats: this.stats[searchResult]
    };
  }

  findAllMatching(search) {
  }

  cleanData(stats) {
    return stats.reduce((acc, data) => {
      if (typeof data.Data != 'number') data.Data = 0;
      const roundedData = Math.round(data.Data * 1000) / 1000;

      if(acc[data.Location]) {
        acc[data.Location][data.TimeFrame] = roundedData;
      }
      else {
        acc[data.Location.toUpperCase()] = {
          [data.TimeFrame]: roundedData
        }
      }
      return acc;
    }, {});
  }
}
