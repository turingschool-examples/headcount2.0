export default class DistrictRepository {
  constructor(kinderData) {
    this.stats = this.cleanData(kinderData);
  }

  cleanData(data) {
    return data.reduce((statsObj, school) => {
      if(!statsObj[school.Location]) { 
       statsObj[school.Location] = []
      }
      statsObj[school.Location].push(school)
      statsObj[school.Location].sort((a, b) => {
        return b.TimeFrame - a.TimeFrame
      })
      return statsObj; 
    }, {})
  }
}
