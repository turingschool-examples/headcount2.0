export default class DistrictRepository {
  constructor(newData) {
    this.stats = this.cleanData(newData)
  }

  cleanData = (newData) => {
    return newData.reduce((cleanData, entry) => {
      const upperLocale = (entry.Location).toUpperCase()

      if (!Object.keys(cleanData).includes(entry.Location)) {
        cleanData[upperLocale] = { data: {[entry.TimeFrame]: (entry.Data)}}
      } else {
        cleanData[upperLocale].data[entry.TimeFrame] = entry.Data
      }

      return cleanData
    }, {})
  }

  findByName = (query) => {
    if (query) {
      const upperQuery = query.toUpperCase();

      if (this.stats[upperQuery]) {
        const foundSchool = this.stats[upperQuery]
        const result = {location: query.toUpperCase(), data: foundSchool.data}

        return result;
      } else {
        return undefined;
      }
    }
  }

}
