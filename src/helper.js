export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  formatData(data) {
    return data.reduce((obj, item) => {
      const location = item.Location.toUpperCase();
      
      if (!obj[location]) {
        obj[location] = {}
      }

      if(typeof item.Data != 'number'){
        item.Data = 0;
      }

      const yearData = {[item.TimeFrame]: parseFloat(item.Data.toPrecision(3))}

      obj[location].location = item.Location.toUpperCase();
      obj[location].data = 
        Object.assign({...obj[location].data}, yearData)

      return obj
    }, {})
  }

  findByName(location) {
    if(!location) {
      return undefined;
    }

    const keys = Object.keys(this.data)
    const match = keys.find(key => key === location.toUpperCase());

    return this.data[match];
  }
}
