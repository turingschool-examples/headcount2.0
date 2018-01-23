export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data)
  }

  dataCleaner(data) {

    let cleanData = data.reduce( (districtObject, district)=> {
    
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
    if(search) {
      let foundLocation = Object.keys(this.data)
          .find( location => search.toUpperCase() === location.toUpperCase())
      if(foundLocation) {
        let foundObject = { location: foundLocation.toUpperCase(), 
                            data: this.data[foundLocation]}
        return foundObject;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
}