export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, program) => {
      if(!obj[program.Location]){
        obj[program.Location] = { location: '', data: {}} 
      } 

      obj[program.Location].location = program.Location.toUpperCase();
      obj[program.Location].data[program.TimeFrame] = this.cleanData(program.Data)

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
      let newDistrict = district.toUpperCase();
      return newDistrict === caseInsensitive
    })


    return this.stats[findDistrict]
  }
}
