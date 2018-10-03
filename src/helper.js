export default class DistrictRepository {
  constructor(newData) {
    this.stats = this.cleanData(newData)
  }

  cleanData = (newData) => {
    return newData.reduce((cleanData, entry) => {
      const upperLocale = entry.Location.toUpperCase()
      const roundedData = Math.round(entry.Data * 1000) / 1000

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

  findAverage = (school) => {
    const schoolData = this.findByName(school).stats
    const numYears = Object.keys(schoolData).length
    const sumAvg = Object.keys(schoolData).reduce((sum, year) => {
      sum += schoolData[year]
      return sum
    }, 0)

    return Math.round((sumAvg / numYears) * 1000) / 1000
  }
}
