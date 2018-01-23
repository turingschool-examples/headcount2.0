export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data)
  }

  dataCleaner(data) {

    let cleanData = data.reduce( (districtObject, district)=> {
    
    // if there's no district in the districtObject
    // with that location, create a key with that location
    // the value of that key should be an array of 
    // all the districts that have matching locations
      let yearData = {[district.TimeFrame] : district.Data}

      if (!districtObject[district.Location]) {
        districtObject[district.Location] = {};
      } 

      Object.assign(districtObject[district.Location], yearData)

      return districtObject
    }, {})

  return cleanData

  }

  findByName(search) {
    if (!search) {
      return undefined
    } else {
      search = search.toUpperCase();
      let foundLocation = Object.keys(this.data).find( (location) => {
          if (location == search) {
            return {location: foundLocation, 
                  data : this.data[foundLocation]}
          }
          else {
            return undefined
          }
        })
    }
  }
}