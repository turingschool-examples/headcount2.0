class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = data => {
    return data.reduce((dupelessDataObj, stat) => {
      let { Location, TimeFrame, Data } = stat;
      let yearData = Math.round(Data * 1000) / 1000;
      if (!dupelessDataObj[Location]) {
        dupelessDataObj[Location] = {
          location: Location.toUpperCase(),
          stats: {}
        };
      }

      dupelessDataObj[Location].stats[TimeFrame] = yearData;

      return dupelessDataObj;
    }, {});
  }

  findByName = name => {
    if (!name) {
      return undefined;
    }
    console.log(this.stats[name]);
    return this.stats[name];
  };

  findAllMatches = name => {
    const matches = Object.keys(this.stats).filter(key => {
      if (!name) {
        return true;
      }
      return key.includes(name.toUpperCase());
    });
    return matches.map(key => this.stats[key]);
  };
}

export default DistrictRepository;