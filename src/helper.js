export default class DistrictRepository {
  constructor(data) {
  this.stats = this.cleanData(data)
  }

  cleanData = (data) => {
      return data.reduce( (districtObj, district) => {
        const { Location, TimeFrame, Data } = district;
        if (!districtObj[Location]) {
          districtObj[Location] = { 
            location: district.Location,
            timeFrame: district.TimeFrame,
            data: district.Data
          }
        }
       return districtObj
      }, {})
  }

  findByName = (userInput) => {

    if(!userInput) {
      return undefined
    } else if (userInput) {

      const keyNames = Object.keys(this.stats);

      const matches = keyNames.reduce((acc, name)=> {
    // want to create an object with a key of the name
    // that matches the user input and a value of
    // the district object
       
      }, {})

      return matches
    }
  }
}  
