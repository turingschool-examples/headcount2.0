class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, point) => {
      const { Location, TimeFrame, Data } = point;
      if (!obj[Location] && !obj[Location.toUpperCase()]) {
        obj[Location.toUpperCase()] = {location: Location.toUpperCase()}
        obj[Location.toUpperCase()].stats = {}
      }
      obj[Location.toUpperCase()].stats[point.TimeFrame] = (Math.round(Data * 1000) / 1000 || 0)

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

  findAllMatches = (query) => {
    if (query === undefined) {
      return Object.keys(this.stats).reduce((accumulator, district) => {
        accumulator.push(this.stats[district]);
        return accumulator;
      }, [])
    } else {
      return Object.keys(this.stats).reduce((accumulator, district) => {
        if (this.stats[district].location.includes(query.toUpperCase())) {
          accumulator.push(this.stats[district])
        }
        return accumulator;
      }, [])
    }
  }
}

export default DistrictRepository;
