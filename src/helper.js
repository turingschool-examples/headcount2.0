export default class DistrictRepository {
  constructor(newData) {
    this.stats = this.cleanData(newData)
  }

  cleanData = (newData) => {
    return newData.reduce((cleanData, entry) => {
      const upperLocale = entry.Location.toUpperCase()
      const roundedData = Number.parseFloat(Number.parseFloat(entry.Data).toFixed(3))

      if (!Object.keys(cleanData).includes(entry.Location)) {
        cleanData[upperLocale] = { data: {[entry.TimeFrame]: roundedData || 0} }
      } else {
        cleanData[upperLocale].data[entry.TimeFrame] = roundedData || 0
      }

      return cleanData
    }, {})
  }

  checkQuery = (query) => {
    if (query) return query.toUpperCase()
  }

  findByName = (query) => {
    const upperQuery = this.checkQuery(query);

    if (this.stats[upperQuery]) {
      const foundSchool = this.stats[upperQuery]
      const result = {location: upperQuery, stats: foundSchool.data}

      return result;
    } else {
      return undefined;
    }
  }

  findAllMatches = (query) => {
    const upperQuery = this.checkQuery(query)
    const schoolNames = Object.keys(this.stats)
    const matchingSchools = schoolNames.filter(name => name.includes(upperQuery))

    const result = schoolNames.reduce((matches, entry) => {
      if (matchingSchools.includes(entry) || upperQuery === undefined) {
        matches.push(entry)
        return matches
      } else {
        return matches
      }
    }, [])

    return result
  }
}
//can combine functionality of the two by using findAllMatches as autocomplete, then returning findByName() forEach matching school.
