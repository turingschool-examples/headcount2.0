export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(rawData) {
    let locData = rawData.reduce((obj, location) => {
      const loc = location.Location.toUpperCase();
      if (!obj[loc]) {
        obj[loc] = {
          location: loc,
          data: {}
        }
      }
      obj[loc].data[location.TimeFrame] = this.getRoundedNum(location.Data)
      return obj
    }, {});

    return locData
  }

  getRoundedNum(num) {
    if (isNaN(num)) {
      return 0;
    }
    return Math.round(1000 * num)/1000;
  }

  findByName(searchInput) {
    if (!searchInput) {
      return undefined
    }
    let initialLocations = Object.keys(this.data);
    let cleanedLocations = initialLocations.map(key => key.toLowerCase());
    let searchIndex = cleanedLocations.indexOf(searchInput.toLowerCase());

    return this.data[initialLocations[searchIndex]]
  }

  findAllMatches(searchInput) {
    const locations = Object.keys(this.data)

    if (!searchInput) {
      return locations.map(location => this.findByName(location))
    }

    return locations.filter(input => input.toLowerCase().includes(searchInput.toLowerCase()))
                    .map(location => this.findByName(location))
  }
}
