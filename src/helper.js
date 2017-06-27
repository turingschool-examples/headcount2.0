export default class DistrictRepository {
  constructor(data) {
    this.data = this.reducedData(data)
  }

  reducedData(data) {
    return data.reduce((accum, object) => {
      let { Location, TimeFrame, Data } = object;

      if(!accum[Location]) {
        accum[Location] = {
          location: Location,
          annualData: {}
        }
      }
      accum[Location].annualData[TimeFrame] = this.sanitizedData(Data)
      return accum
    },{})
  }

  findByName(location) {
    if(!location) {
      return undefined
    }
    let school = Object.keys(this.data).find(place => {
      return location.toLowerCase() === place.toLowerCase()
    })
    return this.data[school];
  }

  sanitizedData(data) {
    if (typeof data === 'number') {
      return Math.round(data * 1000) / 1000
    } else {
      return 0
    }
  }

  findAllMatches(input = '') {
    const schoolKeys = Object.keys(this.data)

    const newArray = schoolKeys.map(school => {
      return school.toLowerCase()
    })

    return newArray.filter(location => {
      let searchInput = input.toLowerCase()
      if (searchInput === '') {
        return true
      } else if (location.split(' ').includes(searchInput)) {
        return true
      }
    })
  }

}
