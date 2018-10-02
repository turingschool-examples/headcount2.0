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

  findByName = (query) => {
    if (query) {
      const upperQuery = query.toUpperCase();

      if (this.stats[upperQuery]) {
        const foundSchool = this.stats[upperQuery]
        const result = {location: upperQuery, stats: foundSchool.data}

        return result;
      } else {
        return undefined;
      }
    }
  }

}
