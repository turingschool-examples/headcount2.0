class DistrictRepository {
  constructor(data) {
    this.stats = this.reduceData(data);
  }

  reduceData = data => {
    return data.reduce((accu, school) => {
      let name = school.Location.toUppercase();
      if (!accu[name]) {
        accu[name] = { location: name, stats: {} };
      }
      accu[name].stats[school.TimeFrame].push(school);
      return accu;
    }, {});
  };
}

export default DistrictRepository;
