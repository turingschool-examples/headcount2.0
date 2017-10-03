export default class DistrictRepository {
  constructor(initialData) {
    this.data = this.removeDuplicateData(initialData);
  }
  removeDuplicateData(dataArrayToClean) {
    let cleanData = {};

    cleanData = dataArrayToClean.reduce( (acc, item) => {
      let currentLocation = item.Location.toUpperCase();
      if (!acc[currentLocation]) {
        acc[currentLocation] = {};
      }
      acc[currentLocation][item.TimeFrame] = item
      if (typeof acc[currentLocation][item.TimeFrame].Data != 'number') {
        acc[currentLocation][item.TimeFrame].Data = 0;
      }
      return acc;
    },{})
    return cleanData;
  }

  findByName(query = 'no query entered') {
    let queryUppercase = query.toUpperCase();
    if (!this.data[queryUppercase]) {
      return
    } else {
      return {
        location: queryUppercase,
        data: Object.keys(this.data[queryUppercase]).reduce( (acc, year) => {
          acc[year] = parseFloat((this.data[queryUppercase][year].Data).toFixed(3));
          return acc
        }, {})
      }
    }

  }

}
