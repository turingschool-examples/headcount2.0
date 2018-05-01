export default class DistrictRepository {
  constructor(data) {
    this.stats = this.dataCleaner(data);
  }

  dataCleaner(dataList) {
    return dataList.reduce((cleanedData, data) => {
      const sanitizedLocation = data.Location.toUpperCase()
      if(!cleanedData[sanitizedLocation]) {
        cleanedData[sanitizedLocation] = {location: sanitizedLocation, dataSet: []}
      }
      cleanedData[sanitizedLocation].dataSet.push(
        { [data.TimeFrame]: data.Data }
      );

      return cleanedData
    }, {});
  }

  findByName(district) {
    if(!district) {
      return undefined
    }
    const sanitizedDistrict = district.toUpperCase()
    return this.stats[sanitizedDistrict]
  }
}
