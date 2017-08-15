export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(rawData) {
    return rawData.reduce((obj, location) => {
      // const keys = Object.keys(location);
      const dataObj = this.getDataObj(location);
      const loc = location.Location;
      if (!obj[loc]) {
        obj[loc] = {
          location: loc,
          data: []
        }
      }
      obj[loc].data.push(dataObj)
      return obj
    }, {});
  }

  getDataObj(location) {
    let newObj = {}
    newObj[location.TimeFrame] = this.getRoundedNum(location.Data)
    return newObj;
  }

  getRoundedNum(num) {
    if (isNaN(num)) {
      return 0;
    }
    return Math.round(1000 * num)/1000;
  }

  findByName(input) {
    debugger
    if (!input) {
      return undefined
    }
    let initialLocations = Object.keys(this.data);
    let cleanedLocations = initialLocations.map(key => key.toLowerCase());
    let searchIndex = cleanedLocations.indexOf(input.toLowerCase());

    return this.data[initialLocations[searchIndex]]
  }
}
