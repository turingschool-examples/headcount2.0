export default class DistrictRepository {
  constructor(initialData) {
    this.data = this.removeDuplicateData(initialData);
  }
  removeDuplicateData(dataArrayToClean) {
    let cleanData = {};

    cleanData = dataArrayToClean.reduce( (acc, item) => {
      if (!acc[item.Location]) {
        acc[item.Location] = {};
      }
      acc[item.Location][item.TimeFrame] = {
        DataFormat: item.DataFormat,
        Data: item.Data,
      }
      return acc;
    },{})
    return cleanData;
  }
}
