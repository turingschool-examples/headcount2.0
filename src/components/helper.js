export default class DistrictRepository {
  constructor(data) {
    this.data = this.schoolData(data)
  }

  schoolData(info) {
    return info.reduce((accu, school) => {
      if(!accu[school.Location]) {
        accu[school.Location] = {}
        // started looking at how to store duplicated data in our object
        // accu[school.Location] = {TimeFrame:school.TimeFrame}
      }

      return accu;
    }, {})
  }  
}
