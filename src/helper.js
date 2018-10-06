class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, point) => {
      const { Location, TimeFrame, Data } = point;
      if (!obj[Location] && !obj[Location.toUpperCase()]) {
        obj[Location.toUpperCase()] = {location: Location.toUpperCase()}
        obj[Location.toUpperCase()].stats = {}
      }
      obj[Location.toUpperCase()].stats[TimeFrame] = (Math.round(Data * 1000) / 1000 || 0)
      obj[Location.toUpperCase()].classLabel = 'card'

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

  findAverage = (query) => {
    const averageScore = Object.keys(this.stats[query.toUpperCase()].stats).reduce((accumulator, year) => {
      accumulator += this.stats[query.toUpperCase()].stats[year]
      return accumulator;
    }, 0)/(Object.keys(this.stats[query.toUpperCase()].stats).length)

    const roundedScore = (Math.round(averageScore * 1000) / 1000 || 0)
    return roundedScore;
  }

  compareDistrictAverages = (query1, query2) => {
    let average1 = this.findAverage(query1)
    let average2 = this.findAverage(query2)
    let division = (Math.round((average1/average2) * 1000) / 1000 || 0)
    return {[query1.toUpperCase()]: average1, [query2.toUpperCase()]: average2, compared: division}
  }
}

export default DistrictRepository;
