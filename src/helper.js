export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data);
  }

  dataCleaner(data) {
    return data.reduce((districts, yearlyData) => {
      const location = yearlyData.Location;
      const year = yearlyData.TimeFrame;
      const data = yearlyData.Data;

     if (!districts[location]) {
       districts[location] = {};
     }
     districts[location][year] = data
     return districts;
   }, {});
 };
}
