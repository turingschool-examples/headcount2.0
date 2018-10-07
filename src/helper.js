export default class DistrictRepository {
  constructor(data) {
    this.data = data
    this.stats = this.filterData()
    // console.log (this.stats)
  }

  filterData = () => {
    return this.data.reduce((locations, entry) => {
      let district = entry.Location.toUpperCase()

      if (district in locations) {
        locations[district].stats[entry.TimeFrame] = this.roundData(entry.Data)
      } else {
        locations[district] = {
          location: district,
          stats: {
            [entry.TimeFrame]: this.roundData(entry.Data)
          }
        }
      }

      return locations
    }, {})
  };

  roundData = entry => {
    return Math.round(1000 * entry) / 1000 || 0
  };

  findByName = name => {
    if (!name) return undefined
    return this.stats[name.toUpperCase()]
  };

  findAllMatches = input => {
    let dataset = Object.keys(this.stats).map(key => this.stats[key])
    if (!input) return dataset
    let capitalised = input.toUpperCase()
    let filtered = dataset.filter(entry => {
      if (entry.location.includes(capitalised)) return entry
    })

    //refactor when possible
    filtered = filtered.filter(entry => {
      if (capitalised.length > 1) {
        if (entry.location[0] === capitalised[0] && entry.location[1] === capitalised[1]) return entry
      } else {
        if (entry.location[0] === capitalised[0]) return entry
      }
    })
    return filtered
  };

  findMultipleMatches = data => {
    const matches = []
    data.forEach(element => {
      matches.push(this.findByName(element))
    })
    return matches
  }
}
