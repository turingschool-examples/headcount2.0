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
      acc[currentLocation][item.TimeFrame] = {
        DataFormat: item.DataFormat,
        Data: item.Data,
      }
      return acc;
    },{})
    return cleanData;
  }

  findByName(query = 'no query entered') {
    let queryUppercase = query.toUpperCase();
    // test queryUppercase against existing data in this.data
    // if there's no match, return undefined
    if (!this.data[queryUppercase]) {
      return
    } else {
      return {
        location: queryUppercase,
      }
    }

  }

}
