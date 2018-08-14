export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data)
  }

  removeDuplicates = (data) => {
    return data.reduce((acc, stat) => {
      let name = stat.Location.toUpperCase();

      if (!acc[name]) {
        acc[name] = {
          location: name,
          stats: {}
        }
      }

      acc[name].stats[stat.TimeFrame] = Math.round(1000 * stat.Data) / 1000 || 0;
      return acc
    }, {})
  }

  findByName = (search) => {
    if (!search) return;
    let upper = search.toUpperCase()
    return this.stats[upper] ? this.stats[upper] : undefined
  }

  findAllMatches = (search) => {
    let arr = Object.keys(this.stats).map(key => this.stats[key]);

    if (!search) return arr
    
    let matches = arr.filter(match => {
      return match.location.includes(search.toUpperCase())
    })

    return matches
  }
}