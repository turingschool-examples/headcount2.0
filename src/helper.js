export default class DistrictRepository {
  constructor(data) {
    this.stats = this.dataCleaner(data);
  }

  removeNa (dataList) {
    return dataList.map(data => {
      if (data.Data === 'N/A') {
        data.Data = 0;
      }
      return data;
    });
  }

  dataCleaner(dataList) {
    const dataWithOutNa= this.removeNa(dataList);

    return dataWithOutNa.reduce((cleanedData, data) => {
      const sanitizedLocation = data.Location.toUpperCase();
      const sanitizedNumber = parseFloat(parseFloat(data.Data).toFixed(3));

      if(!cleanedData[sanitizedLocation]) {
        cleanedData[sanitizedLocation] = {location: sanitizedLocation, stats: {}}
      }

      cleanedData[sanitizedLocation].stats[data.TimeFrame] = sanitizedNumber;

      return cleanedData
    }, {});
  }

  findByName(district) {
    if (!district) {
      return undefined
    }
    const sanitizedDistrict = district.toUpperCase()
    return this.stats[sanitizedDistrict]
  }

  findAllMatches(district) {
    if (!district) {
      return Object.keys(this.stats);
    }
    const sanitizedDistrict = district.toUpperCase()

    if (!this.stats[sanitizedDistrict]) {
      return []
    }

    return Object.keys(this.stats[sanitizedDistrict])
  }
}
