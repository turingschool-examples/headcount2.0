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

    let cityNames = Object.keys(this.data);

    typeof search === 'string' ? foundLocation = 
      cityNames
        .find( location => search.toUpperCase() === location.toUpperCase()) 
      : foundLocation = undefined;

    foundLocation ? 
      newObject = {location: foundLocation.toUpperCase(),
                   data: this.roundNumbers(this.data[foundLocation])}
      : newObject = undefined;

    return newObject;
  }

  findAllMatches(search) {
    
    let cityNames = Object.keys(this.data);
   // return an array
   // we want the array to contain all data sets that match a name


    if (search) {
      // captures the name of the name of the city we're searching
      let searchedCity = cityNames.filter( city => city.toUpperCase().includes(search.toUpperCase()));
      
      // loop over the data, using searchedCity. 
      // find location: [serachedCity]
      // add key [searchedCity] value, all the data to an array
      const cityArray = searchedCity.map( (city) => {
        return { 
          location: city,
          data: this.roundNumbers(this.data[city])
        }
      })

      return cityArray
    }

    else {
      return cityNames.map( (city => {
        return {
          location: city,
          data: this.roundNumbers(this.data[city])
        }
      }))
    }
  }
}


















