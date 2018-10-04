export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }

  cleanData = (data) => {
    let cleanData = data.reduce( (schools, year) => {

      let roundedYear = Math.round(year.Data * 1000)/1000 || 0;

      if (!schools[year.Location]) {
        schools[year.Location] = {
          [year.TimeFrame]: roundedYear
        }
      } else {
        Object.assign(schools[year.Location], {[year.TimeFrame]: roundedYear});
      }
      return schools;
    }, {});
    return cleanData;

  }

  findByName = (enteredName) => {
    const locations = Object.keys(this.stats)

    if (enteredName) {
      enteredName = enteredName.toLowerCase()
      let correctDistrict = locations.find( location => {
        if (enteredName === location.toLowerCase()) {
          return location;
        } else {
          return false;
        }
      })

      if (correctDistrict) {
        correctDistrict = correctDistrict.toUpperCase()
        return {
          location: correctDistrict,
          stats: this.stats[correctDistrict]
        }
      }
    } else {
      return undefined
    }
  }

  findAllMatches = (entry) => {
    const locations = Object.keys(this.stats)
    const returnData = [];

    if (entry) {
      locations.forEach( location => {
        if (location.toLowerCase().includes(entry.toLowerCase())) {
          returnData.push({
            stats: this.stats[location],
            location: location
          })
        }
      })
    } else {
      locations.forEach( location => {
        returnData.push({
            stats: this.stats[location],
            location: location
          })
      })
    }
    return returnData;
  }

  findAverage = (place) => {
    
  }

}
