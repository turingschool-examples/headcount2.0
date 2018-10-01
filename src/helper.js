export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats)
  }

  cleanData = (data) => {
    let cleanData = data.reduce( (schools, year) => {

      let roundedYear = Math.round(year.Data * 1000)/1000 || 0;

      if (!schools[year.Location]) {
        schools[year.Location] = {
          stats: {[year.TimeFrame]: roundedYear},
          location: year.Location.toUpperCase()
        }
      } else {
        Object.assign(schools[year.Location].stats, {[year.TimeFrame]: roundedYear});
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
        }
      })
      return this.stats[correctDistrict]
    } else {
      return undefined
    }
  }

  findAllMatches = (entry) => {
    const locations = Object.keys(this.stats)


  }

}
