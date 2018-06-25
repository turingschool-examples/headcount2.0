import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(kinderData) { 

    this.stats = this.compiledData(kinderData)

  } 

  compiledData(kinderData) {
    const results = kinderData.reduce((district, obj) => {
      let location = obj.Location
      if(!district[location]) {
       district[location] = [obj]
      } else {
        district[location].push(obj)
      }
      return district
    }, {})
   
    return results
   

  }
}

