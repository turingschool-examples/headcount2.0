export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce( (district, schoolData) => {
      if (!district[schoolData.Location]) {
        district[schoolData.Location] = {}
      }

      const { TimeFrame, Data } = schoolData;
      district[schoolData.Location][TimeFrame] = Math.round(Data * 100) / 100 || 0;

      return district; 
    }, {})
  }

  findByName(name) {
    if (name) {
      const schoolNames = Object.keys(this.stats)

      const foundSchool = schoolNames.reduce( (schoolObj, school) => {
        if (school.match(name)) {
          schoolObj.location = name.toUpperCase()
          schoolObj.stats = this.stats[name]
        }
        return schoolObj;
      }, {})
      
      if (schoolNames.includes(name)) {
        return foundSchool;
      }
    }
  }
}






