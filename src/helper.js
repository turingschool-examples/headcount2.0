import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(kinderData) { 

    this.stats = this.compiledData(kinderData)

  } 

  compiledData = (kinderData) => {
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

  
  findByName = (district) => { 
    if(!district) {
      return
    }

    const cleanedDistrict = district.toUpperCase()
    const districtKeys = Object.keys(this.stats)
    console.log(cleanedDistrict)
 
    const matchingDistricts = districtKeys.reduce((matchingDistricts, key) => {
      if(key.toUpperCase() === cleanedDistrict) {
        console.log(this.stats)
        return this.stats[key]
      }
      return matchingDistricts
    }, [])

    if(!matchingDistricts.length) {
      return
    }
    return matchingDistricts
 }


  
}

