export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }
  removeDuplicates = data => {
    return data.reduce((newObject, data) => {
      if (!newObject[data.Location]) {
        newObject[data.Location] = {};
      }
      newObject[data.Location][data.TimeFrame] = data.Data;
      return newObject;
    }, {});
  };

  findByName = name => {
    return this.stats[name];
  };
}
