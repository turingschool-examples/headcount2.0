export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data)
  }

  dataCleaner(data) {
    let cleanData = data.reduce( (districtObject, district)=> {
    
      let yearData = { [district.TimeFrame] : district.Data }

      if (!districtObject[district.Location]) {
        districtObject[district.Location] = {};
      } 

      Object.assign(districtObject[district.Location], yearData)

      return districtObject
    }, {})

  return cleanData;

  }

  roundNumbers(data) {
    let dataValues = Object.values(data);
    let dataYears = Object.keys(data);
    let newObject = {}

    for(let i = 0; i < dataValues.length; i++) {
      if(typeof dataValues[i] === 'number') {
        let roundedNum = Math.round(dataValues[i] * 1000) / 1000
        newObject[dataYears[i]] = roundedNum
      } else {
        dataValues[i] = 0;
        newObject[dataYears[i]] = dataValues[i];
      }
    }

    return newObject;
  }

  findByName(search) {
    let foundLocation;
    let newObject;

    typeof search === 'string' ? foundLocation = 
      Object.keys(this.data)
        .find( location => search.toUpperCase() === location.toUpperCase()) 
      : foundLocation = undefined;

    foundLocation ? 
      newObject = {location: foundLocation.toUpperCase(),
                   data: this.roundNumbers(this.data[foundLocation])}
      : newObject = undefined;

    return newObject;
  }
}