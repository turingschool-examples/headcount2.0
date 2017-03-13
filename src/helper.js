export default class DistrictRepository {
  constructor(data) {
    this.data = this.reduceData(data)
  }

  reduceData(data) {
    return data.reduce((acc, currentValue) => {
      const objData = currentValue.Data
      const location = currentValue.Location
      const timeFrame = currentValue.TimeFrame

      if (!acc[location]) {
        acc[location] = {};
      }
      acc[location][timeFrame] = objData
      return acc;
    },{})
  }

  findByName(name) {
    

  }
};
