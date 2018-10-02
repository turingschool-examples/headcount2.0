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
        return this.stats[school] 
      })
    } else {
      return schoolNames.filter( school => {
        if (school.includes(name.toUpperCase())) {
          return this.stats[name.toUpperCase()] 
        }
      })
    }
  }

}






