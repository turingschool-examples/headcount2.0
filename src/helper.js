export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData = (rawData) => {
    return rawData.reduce((obj, location) => {
        const keys = Object.keys(location);
        const formattedKeys = this.getKeys(keys);
        const dataObj = this.getDataObj(keys, location);
    }, {});
  }

  getDataObj = (keys, location) = {
    keys.reduce((obj, key, i) => {
      if (i != 0) {
        obj[key] = location[keys[i]];
      }
      return obj;
    }, {}
  }

}
