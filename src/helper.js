export default class DistrictRepository {
  constructor(data) {
    this.data = this.reducedData(data)
  }

  reducedData(data) {
    return data.reduce((accum, object) => {
      let { Location, TimeFrame, Data } = object;
      const upCaseLocation = Location.toUpperCase()
      if(!accum[upCaseLocation]) {
        accum[upCaseLocation] = {
          location: upCaseLocation,
          annualData: {}
        }
      }
      accum[upCaseLocation].annualData[TimeFrame] = this.sanitizedData(Data);
      return accum;
    },{})
  }

  findByName(location) {
    if(!location) {
      return undefined;
    }
    let school = Object.keys(this.data).find(place => {
      return location.toUpperCase() === place.toUpperCase();
    })
    return this.data[school];
  }

  sanitizedData(data) {
    if (typeof data === 'number') {
      return Math.round(data * 1000) / 1000;
    } else {
      return 0;
    }
  }

  findAllMatches(input = '') {
    const schoolKeys = Object.keys(this.data);
    const newArray = schoolKeys.map(school => {
      return this.data[school];
    })
    return newArray
    return schoolKeys.filter(location => {
      let searchInput = input.toUpperCase();
      return location.toUpperCase().indexOf(searchInput) >= 0;
    })
  }

  findAverage(location) {
    const upCaseLocation = location.toUpperCase()
    const keys = Object.keys(this.data[upCaseLocation].annualData);
    const total = keys.reduce((sum, year) => {
      return sum + this.data[upCaseLocation].annualData[year];
    }, 0)
    let average = total/keys.length;
    return Math.round(average * 1000) / 1000;
  }

  compareDistrictAverages(obj1, obj2) {
    const average1 = this.findAverage(obj1)
    const average2 = this.findAverage(obj2)
    const compared = Math.round(average1/average2 * 1000) / 1000
    const comparisonObj = Object.assign({}, { [obj1.toUpperCase()]: average1, [obj2.toUpperCase()]: average2, compared });

    return comparisonObj;
  }
}
