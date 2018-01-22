export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  //  obj = {
  //    colorodo: {
  //                location: COLORODO, 
  //                data: {year: percentage, year: percentage} 
  //              }
  //  }

  formatData(data) {
    //sort years and percentages within each dataset 2004-2014

    return data.reduce((obj, item) => {
      const location = item.Location
      
      if (!obj[location]) {
        obj[location] = {}
      }
      const yearData = {[item.TimeFrame]: item.Data}

      obj[location].location = item.Location
      obj[location].data = 
        Object.assign({...obj[location].data}, yearData)

      return obj
    }, {})
  }


}
