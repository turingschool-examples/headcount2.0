

export default class DistrictRepository {
  constructor(data) {
    this.data = this.filterData(data)
  }
  filterData(data) {
    let schools = data.reduce((acc, currentValue,index,array) => {
      if (!acc[currentValue.Location]) {
        acc[currentValue.Location] = currentValue.Location;
      } else {
        acc[currentValue.Location] += currentValue.Location;
      }
      return acc;
    },{})
  return schools;
  }
};
