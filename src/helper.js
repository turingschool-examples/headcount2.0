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
      return newObject;
    }, {});
  };

  findByName = name => {
    if (!name) {
      return;
    }
    name = name.toUpperCase();
    return this.stats[name];
  };

  //   findAllMatching = name => {

  //   }
}
