export default class DistrictRepository {
  constructor(data) {
    this.data = this.schoolData(data)
  }

  schoolData(info) {
    return info.reduce((accu, school) => {
      if(!accu[school.Location]) {
        accu[school.Location] = {}
      }

      return accu;
    }, {})
  }  
}
