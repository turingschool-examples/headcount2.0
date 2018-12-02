export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce( (district, schoolData) => {
      if (!district[schoolData.Location.toUpperCase()]) {
        district[schoolData.Location.toUpperCase()] = {}
      }

      const { TimeFrame, Data } = schoolData;
      district[schoolData.Location.toUpperCase()][TimeFrame] = Math.round(Data * 1000) / 1000 || 0;

      return district; 
    }, {})
    
    this.compareDistrictAverages = this.compareDistrictAverages.bind(this)
  }

  findByName(name) {
    if (name === undefined || !this.stats[name.toUpperCase()]) {
      return undefined; 
    } else {
      const schoolNames = Object.keys(this.stats)
      return schoolNames.reduce( (schoolObj, school) => {
        if (school.match(name.toUpperCase())) {
          schoolObj.location = name.toUpperCase()
          schoolObj.stats = this.stats[name.toUpperCase()]
        }
        return schoolObj;
      }, {})
    }
  }

  findAllMatches(name) {
    const schoolNames = Object.keys(this.stats)
    if (name === undefined) {
      return schoolNames.map( school => {
        return {school: school, data: this.stats[school] }
      })
    } else {

      let filteredLocations = schoolNames.filter( school => school.includes(name.toUpperCase()) )

      return filteredLocations.map( location => {
        return {school: location, data: this.stats[location]}
      })
    }
  }
  
  findAverage(name) {
    const schoolStats = Object.values(this.stats[name.toUpperCase()])
    const avg = schoolStats.reduce( (total, stat) => {
      total += stat
      return total
    }, 0) / schoolStats.length
    return Math.round(avg * 1000) / 1000
  }

  compareDistrictAverages(name1, name2) {
    const name1Avg = this.findAverage(name1.toUpperCase())
    const name2Avg = this.findAverage(name2.toUpperCase())
    const compared = Math.round((name1Avg / name2Avg) * 1000) / 1000

    return {[name1.toUpperCase()]: name1Avg, [name2.toUpperCase()]: name2Avg, compared: compared}
  }

}






