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
      //make key
      if (!obj[item.Location]) {
        obj[item.Location] = {}
      }
      return obj
    }, {})
  }


}
