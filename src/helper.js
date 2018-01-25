export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data)

  }

  dataCleaner(data) {
    const cleaned = (acc, district) => {
      let yearData = { [district.TimeFrame] : district.Data }

      if (!acc[district.Location]) {
        acc[district.Location] = {};
      } 

      Object.assign(acc[district.Location], yearData)
      return acc;
    }

    const cleanData = data.reduce(cleaned, {})

    return cleanData;
  }

  roundNumbers(data) {
    const roundedNums = (acc, entry) => {
      if (typeof entry[1] === 'number') {
        entry[1] = Math.round(entry[1] * 1000) / 1000
      }
      else {
        entry[1] = 0
      }
      acc[entry[0]] = entry[1]
      return acc;
    }

    const cleanedNums = Object.entries(data).reduce(roundedNums, {})

    return cleanedNums;
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

    if (search) {
      const searchedCity = cityNames.filter( city => city.toUpperCase().includes(search.toUpperCase()));
      const cityArray = searchedCity.map( city => {
        return { 
          location: city,
          data: this.roundNumbers(this.data[city])
        }
      })

      return cityArray;
    }

    else {
      return cityNames.map( city => {
        return {
          location: city,
          data: this.roundNumbers(this.data[city])
        }
      })
    }
  }
}
