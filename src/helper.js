

export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
   return data.reduce((obj, district) => {
      const local = district.Location.toUpperCase();

      if (!obj[local]) {
        obj[local] = {}
        obj[local].data = {}
      }
      obj[local].location = local;

      const objData = obj[local].data;
      const year = [district.TimeFrame]

      isNaN(district.Data) ? objData[year] = 0 :
      objData[year] = this.round(district.Data)
      return obj;
    }, {})
  }

  round(num) {
    return Math.round(1000*num)/1000
  }

  findByName(search) {
    if (!search) {
      return undefined
    } else {
      let searched = search.toUpperCase();

      //return this.data[searched]

      if (!this.data[searched]) {
        return undefined
      } else {
        return this.data[searched]
      }
    }
  }

  findAllMatches(searched) {
    const dataArray = Object.keys(this.data)
 
    const found = dataArray.filter(district => {
      if(!searched || district.includes(searched.toUpperCase()) ) {
        return district 
      } 

    })

    return found
  }

}