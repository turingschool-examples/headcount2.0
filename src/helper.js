export default class DistrictRepository {
  constructor(data) {
    this.stats = this.dataCleaner(data);
  }

  dataCleaner(dataList) {
    return dataList.reduce((cleanedData, data) => {
      if(!cleanedData[data.Location]) {
        cleanedData[data.Location] = []
      }
      cleanedData[data.Location].push({ [data.TimeFrame]: data.Data });

      return cleanedData
    }, {})
  }
// findByName(place).location => location === place.toUpperCase()
// location [{ colorado: {'year' : 0.992, year: '0101201'} }, {academy: {stuff}}
}
