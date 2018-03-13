export default class DistrictRepository {
  constructor(data) {
    this.stats = this.summarizeStats(data)
  }

  summarizeStats(data) {
    return data.reduce((obj, enrollment) => {
      if(!obj[enrollment.Location]){
        obj[enrollment.Location] = { location: '', data: {}} 
      } 

      obj[enrollment.Location].location = enrollment.Location.toUpperCase();
      obj[enrollment.Location].data[enrollment.TimeFrame] = this.cleanData(enrollment.Data)

      return obj
    }, {})
  }

  cleanData(data) {
    if(typeof data === 'string') {
      data = 0;
    }

    return parseFloat(data.toFixed(3))
  }

  findByName(name) {
    if(name) {
      var caseInsensitive = name.toUpperCase();  
    }

    const findDistrict = Object.keys(this.stats).find(district => {
      return district.toUpperCase() === caseInsensitive
    })

    return this.stats[findDistrict]
  }

  findAllMatches(name) {

    if(!name) {
      return Object.keys(this.stats).filter(district => district)
    }

    return Object.keys(this.stats).filter(district => district.toUpperCase().includes(name.toUpperCase()))
  }
}
