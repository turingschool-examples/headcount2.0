

export default class DistrictRepository {
  constructor(data) {
    this.stats = this.newData(data)
  }

  newData(data) {
    return data.reduce((schoolObj, district, index) => {
      const { TimeFrame, Data, Location } = district
      const upCaseLocation = Location.toUpperCase()
      const roundedData = Math.round(Data * 1000) / 1000 || 0;

      if (!schoolObj[upCaseLocation]) {
        schoolObj[upCaseLocation] = { data: { [TimeFrame]: roundedData }, location: upCaseLocation };
      }
      schoolObj[upCaseLocation].data[TimeFrame] = roundedData;

      return schoolObj
    }, {})
  }

  findByName(districtName) {
    if (districtName) {
      const upperCase = districtName.toUpperCase();
      return this.stats[upperCase];
    }
  }

  findAllMatches(searchString) {
    const dataLocations = Object.keys(this.stats)

    return dataLocations.reduce((accum, location) => {
      if (searchString) {
        const upCaseSearchString = searchString.toUpperCase();
        if (location.startsWith(upCaseSearchString)) {
          accum.push(this.stats[location]);
        }
      } else {
        accum.push(this.stats[location])
      }
      return accum
    }, [])
  }
}

