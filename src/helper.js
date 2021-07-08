export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = data => {
    return data.reduce((newObject, data) => {
      let upperCaseLocation = data.Location.toUpperCase();
      if (!newObject[upperCaseLocation]) {
        newObject[upperCaseLocation] = {
          location: upperCaseLocation,
          stats: {}
        };
      }
      newObject[upperCaseLocation].stats[data.TimeFrame] =
        Math.round(data.Data * 1000) / 1000 || 0;
      return newObject;
    }, {});
  };

  findByName = (name = '') => {
    name = name.toUpperCase();
    return this.stats[name];
  };

  findAllMatches = name => {
    const districtData = Object.keys(this.stats);
    if (!name) {
      return districtData;
    }
    name = name.toUpperCase();
    const filteredData = districtData.filter(district =>
      district.includes(name)
    );
    return filteredData;
  };
}
