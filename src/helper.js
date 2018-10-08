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

  findAverage = (input1, input2) => {
    if (input1) input1 = input1.toUpperCase()
    if (input2) input2 = input2.toUpperCase()

    const averages = this.calcAverage (input1, input2)

    let average = {
      [input1]: averages[0],
      [input2]: averages[1],
      'compared': this.roundData(averages[0]/averages[1])
    }

    if (input2) return average
    return averages[0]
  }

  compareDistrictAverages = (x, y) => {
    return this.findAverage(x, y)
  }

  calcAverage = (input1, input2) => {
    let firstAvg = 0
    let secondAvg = 'no value'
    let iterator

    iterator = Object.entries(this.findByName(input1).stats)
    firstAvg = iterator.reduce((acc, stat) => {
      acc += stat[1]
      return acc
    }, 0)

    firstAvg /= iterator.length
    firstAvg = this.roundData(firstAvg)

    if (input2) {
      iterator = Object.entries(this.findByName(input2).stats)
      secondAvg = iterator.reduce((acc, stat) => {
        acc += stat[1]
        return acc 
      }, 0)
      secondAvg /= iterator.length
      secondAvg = this.roundData(secondAvg)
    }
    
    return [firstAvg, secondAvg]
  }
}


