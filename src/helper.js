import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(data) {
    this.stats = this.dataCleaner(data)
  }

dataCleaner = (data) => {
    let dataObj = data.reduce((dataObj, district) => {
      let location = district.Location.toUpperCase()
        if(!dataObj[location]) {
          dataObj[location] = [district]
        } else {
          dataObj[location].push(district)
        }
      return dataObj
    },{})
    return dataObj
  }

  findByName = (str) => {
    Object.keys(this.stats).find(district => {
      return district === str
    })

  }
}


