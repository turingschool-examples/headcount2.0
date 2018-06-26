import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(kinderData) { 

    this.stats = this.compiledData(kinderData)

  } 

  compiledData = (kinderData) => {
    const results = kinderData.reduce((district, obj) => {
      let location = obj.Location.toUpperCase();
      let year = obj.TimeFrame;
     
      let data = this.parseData(obj.Data)
    
      if(!district[location]) {
       district[location] = {stats:{[year]: data}, location}
      } else {
        district[location].stats = {...district[location].stats, [year]: data}
      }
      return district;
    }, {})
   
    return results;
   
  }

  parseData = (input) => {
    if(typeof input !== 'number') {
      return 0
    } else {
      return input.toFixed(3)
    }
  }


  
  findByName = (district) => { 
    if(!district) {
      return
    }

    const cleanedDistrict = district.toUpperCase()
    const districtKeys = Object.keys(this.stats)
 
    const matchingDistricts = districtKeys.reduce((matchingDistricts, key) => {
      if(key.toUpperCase() === cleanedDistrict) {
        return this.stats[key]
      }
      return matchingDistricts
    }, {})

    if(matchingDistricts.location) {
      return matchingDistricts
    }

 }


  
}

