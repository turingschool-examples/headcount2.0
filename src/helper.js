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
    let keys = Object.keys(this.stats);

    if (name) {
      return keys.map(key => this.stats[key]).filter(district => district.location.includes(name.toUpperCase()))
    } else {
      return keys.map(key => this.stats[key])
    }
  }

  findAverage(name) {
    const district = this.findByName(name)
    console.log(district.data)
    const percentagesList = Object.values(district.data)
    const sum = percentagesList.reduce((sum, percentage) => sum + percentage, 0)
    return parseFloat((sum / percentagesList.length).toFixed(3))
  }

  compareDistrictAverages() {

  }
}
