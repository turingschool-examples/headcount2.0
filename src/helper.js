export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, point) => {
      const { Location, TimeFrame, Data } = point;
      if (!obj[Location]) {
        obj[Location.toUpperCase()] = {location: Location.toUpperCase()}
        obj[Location.toUpperCase()].stats = []
      }
      obj[Location.toUpperCase()].stats.push({[point.TimeFrame]: Data})
      obj[Location.toUpperCase()].stats.sort((a, b) => {
        return Object.keys(a) - Object.keys(b);
      })
      return obj
    }, {})
  }

  findByName = (query) => {
    if (query === undefined) {
      return undefined;
    } else {
      return this.stats[query.toUpperCase()]
    }
  }
}

